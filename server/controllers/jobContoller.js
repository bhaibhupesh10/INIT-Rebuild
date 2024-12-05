import { catchAsyncErrors } from "../middlewares/catchAsyncErrors.js";
import ErrorHandler from "../middlewares/error.js";
import { Students } from "../models/studentSchema.js";
import { Job } from "../models/jobSchema.js";


export const postJob = catchAsyncErrors(async (req, res, next) => {
    try {
        const { jobTitle,
            jobType,
            location,
            companyName,
            jobDescription,
            responsibilities,
            qualifications,
            benefits,
            salary,
            hiringMultipleCandidates,
            companyWebsiteTitle,
            companyWebsiteUrl,
            jobNiche,
            applyDeadline,
        } = req.body;

        if (!jobTitle ||
            !jobType ||
            !location ||
            !companyName ||
            !jobDescription ||
            !responsibilities ||
            !qualifications ||
            !salary ||
            !jobNiche ||
            !applyDeadline) {
            return next(new ErrorHandler("Please fill all required fields", 400));
        }

        if (companyWebsiteTitle && !companyWebsiteUrl || companyWebsiteUrl && !companyWebsiteTitle) {
            return next(new ErrorHandler("Please provide company website title and url or leave both blank", 400));
        }

        // const postedBy = await Students.findById(req.user._id);
        const job = await Job.create({
            jobTitle,
            jobType,
            location,
            companyName,
            jobDescription,
            responsibilities,
            qualifications,
            benefits,
            salary,
            hiringMultipleCandidates,
            companyWebsite: {
                title: companyWebsiteTitle,
                url: companyWebsiteUrl
            },
            jobNiche,
            applyDeadline,
            postedBy: req.user._id
        });


        res.status(201).json({
            success: true,
            job,
            message: "Job posted successfully"
        });
    }
    catch (error) {
        next(error);
    }
});