import { catchAsyncErrors } from "../middlewares/catchAsyncErrors.js";
import ErrorHandler from "../middlewares/error.js";
import { Students } from "../models/studentSchema.js";
import { v2 as cloudinary } from "cloudinary";
import { sendToken } from "../utils/jwtToken.js";
import express from "express";


export const register = catchAsyncErrors(async (req, res, next) => {
    try {
        const { name, email, phone, address, firstNiche, secondNiche, thirdNiche, password } = req.body; //No resume required here 

        if (!name || !email || !phone || !address || !password) {
            return next(new ErrorHandler("Please fill all the fields.", 400));
        }
        if (!firstNiche || !secondNiche || !thirdNiche) { //gettting niches if user is job seeker
            return next(new ErrorHandler("Please provide your preferred job niches.", 400));
        }

        const existingUser = await Students.findOne({ email }); //Finding email in student database
        // const existingUser = await User.findOne({ email }); //Finding email in student database 
        if (existingUser) {
            return next(new ErrorHandler("Student already exists with this email.", 400));
        }

        const userData = {
            name,
            email,
            phone,
            address,
            niches: {
                firstNiche,
                secondNiche,
                thirdNiche,
            },
            password,
            // resume, //Resume funtion is wriiten below
            // role:{Students},
        };
        //Resume upload function is written below using try catch, uploading resume to cloudinary
        if (req.files && req.files.resume) {
            const { resume } = req.files;
            if (resume) {
                try {
                    // cloudinary.config({
                    //     cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
                    //     api_key: process.env.CLOUDINARY_API_KEY,
                    //     api_secret: process.env.CLOUDINARY_API_SECRET,
                    // });

                    const result = await cloudinary.uploader.upload(resume.tempFilePath, {
                        folder: "INIT_Job_Resumes",
                        // resource_type: "auto",

                    });

                    if (!result || !result.secure_url || result.error) {
                        return next(new ErrorHandler("Resume upload failed.", 500));
                    }

                    userData.resume = {
                        public_id: result.public_id, //result == Cloudinary response
                        url: result.secure_url,
                    };

                    // await userData.save();
                }
                catch (error) {
                    return next(new ErrorHandler("Failed to Upload Resume", 400));
                }
            }
            // if(resume.size > process.env.MAX_RESUME_SIZE){
            //     return next(new ErrorHandler("Resume size exceeds the limit.", 400));
            // }
        }

        const studentUser = await Students.create(userData);
        // const user = await User.create(userData);

        //sending token 
        sendToken(studentUser, 201, res, "Student registered successfully");

        // res.status(201).json({
        //     success: true,
        //     userData,
        //     message: 'Student registered successfully',
        // });
    }
    catch (error) {
        next(error);
    }
}
);

// //Creating Activation Token for user
// export const createActivationToken = catchAsyncErrors(async (req, res, next) => {
//     const activationCode = Math.floor(100000 + Math.random() * 900000);
//     const token = jwt.sign({
//         user,
//         activationCode,
//     },
//         process.env.JWT_SECRET_KEY, {
//         expiresIn: "5m",
//     }

//     );
//     res.status(200).json({
//         success: true,
//         message: "Activation Token Created",
//         token,
//     });
// }
// );

// //Activating User Account by verifying the token
// export const activateAccount = catchAsyncErrors(async (req, res, next) => {
//     try{
//         const {activation_token,activation_code} = req.body;
//         const decoded = jwt.verify(activation_token, process.env.JWT_SECRET_KEY);
//         const { user, activationCode } = decoded;
//         if(activationCode !== activation_code){
//             return next(new ErrorHandler("Invalid Activation Code", 400));
//         }
//         if(!user || !activationCode){
//             return next(new ErrorHandler("Invalid Token", 400));
//         }
//         const studentUser = await Students.findById(user._id);
//         if(!studentUser){
//             return next(new ErrorHandler("Student not found", 404));
//         }
//         studentUser.activationCode = activationCode;
//         studentUser.isActivated = true;
//         await studentUser.save();
//         res.status(200).json({
//             success: true,
//             message: "Account Activated Successfully",
//         });
//     }catch(error){
//         next(error);
//     }
// });

//Login function
export const login = catchAsyncErrors(async (req, res, next) => {
    try {
        const { role, email, password } = req.body;

        if (!role) {
            return next(new ErrorHandler("Please enter your role", 400));
        }

        if (role !== "Student") {
            return next(new ErrorHandler("Invalid Role", 401));
        }

        if (!email || !password) {
            return next(new ErrorHandler("Please enter email and password", 400));
        }

        const studentUser = await Students.findOne({ email }).select("+password");

        if (!studentUser) {
            return next(new ErrorHandler("Invalid Email or Password", 401));
        }

        const isPasswordMatched = await studentUser.comparePassword(password);

        if (!isPasswordMatched) {
            return next(new ErrorHandler("Invalid Email or Password", 401));
        }

        if (role !== studentUser.role) {
            return next(new ErrorHandler("Invalid Role", 401));
        }

        sendToken(studentUser, 200, res, "Student logged in successfully");
    }
    catch (error) {
        next(error);
    }
}
);

//Logout function
export const logout = catchAsyncErrors(async (req, res, next) => {
    res.status(200).cookie("token", null, {
        expires: new Date(Date.now()),
        httpOnly: true,
    }).json({
        success: true,
        message: "Logged out successfully",
    });
}
);


//Getting Information of User. user should access all his information
export const getStudProfile = catchAsyncErrors(async (req, res, next) => {
    const studentUser = req.user;

    if (!studentUser) {
        return next(new ErrorHandler("Student not found", 404));
    }

    res.status(200).json({
        success: true,
        studentUser,
    });
}
);


//Updating User Profile
export const updateStudProfile = catchAsyncErrors(async (req, res, next) => {
    const studentUser = req.user;

    if (!studentUser) {
        return next(new ErrorHandler("Student not found", 404));
    }

    const newStudData = {
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        address: req.body.address,
        niches: {
            firstNiche: req.body.firstNiche,
            secondNiche: req.body.secondNiche,
            thirdNiche: req.body.thirdNiche,
        }
    };

    const { firstNiche, secondNiche, thirdNiche } = newStudData.niches;
    //Student can Update his niches but cannot remove any of the niches blank
    if (req.user.role === "Student" && (!firstNiche || !secondNiche || !thirdNiche)) {
        return next(new ErrorHandler("Please provide your all preferred job niches.", 400));
    }
    //Updating resume of student
    if (req.files) {
        const { resume } = req.files;
        if (resume) {
            const currentResumeId = studentUser.resume.public_id;
            if (currentResumeId) {
                await cloudinary.uploader.destroy(currentResumeId);

            }
            try {
                const newResume = await cloudinary.uploader.upload(resume.tempFilePath, {
                    folder: "INIT_Job_Resumes",
                    // resource_type: "auto",
                });

                if (!newResume || !newResume.secure_url || newResume.error) {
                    return next(new ErrorHandler("Resume upload failed.", 500));
                }

                newStudData.resume = {
                    public_id: newResume.public_id,
                    url: newResume.secure_url,
                };
            }
            catch (error) {
                return next(new ErrorHandler("Failed to Upload Resume", 400));
            }
        }
    }

    const updatedStudentUser = await Students.findByIdAndUpdate(studentUser._id, newStudData, {
        new: true,
        runValidators: true,
        useFindAndModify: false,
    });

    res.status(200).json({
        success: true,
        updatedStudentUser,
        message: "Student Profile Updated Successfully",
    });
});


//Update Password
export const updateStudPassword = catchAsyncErrors(async (req, res, next) => {

    const studentUser = await Students.findById(req.user.id).select("+password");

    if (!studentUser) {
        return next(new ErrorHandler("Student not found", 404));
    }

    const { oldPassword, newPassword } = req.body;

    const isPasswordMatched = await studentUser.comparePassword(oldPassword);

    if (!isPasswordMatched) {
        return next(new ErrorHandler("Old Password is incorrect", 400));
    }

    if (oldPassword === newPassword) {
        return next(new ErrorHandler("New Password cannot be same as Old Password", 400));
    }

    if (newPassword.length < 7) {
        return next(new ErrorHandler("Password must be at least 8 characters long", 400));
    }

    if (newPassword !== req.body.confirmPassword) {
        return next(new ErrorHandler("New Password and Confirm Password does not match", 400));
    }

    studentUser.password = newPassword;
    await studentUser.save();

    sendToken(studentUser, 200, res, "Password Updated Successfully");
});





