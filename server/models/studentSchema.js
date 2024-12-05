import moongoose from 'mongoose';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import validator from 'validator';
import { validate } from 'node-cron';

const studentuserSchema = new moongoose.Schema({
    name: {
        type: String,
        required: true,
        minLength: [3, "Name must contain atleast 3 characters."],
        maxLength: [50, "Name can contain atmost 50 characters."],
    },
    email: {
        type: String,
        required: true,
        validate: [validator.isEmail, "Please provide a valid email."],
        unique: true,
    },
    phone: {
        type: Number,
        required: true,
        validate: {
            validator: function (v) {
                return /\d{10}/.test(v);
            },
            message: "Please provide a valid phone number.",
        },
    },
    address: {
        type: String,
        required: true,
    },
    niches: {
        firstNiche: {
            type: String,
            required: true,
        },
        secondNiche: {
            type: String,
        },
        thirdNiche: {
            type: String,
        },
    },
    password: {
        type: String,
        required: true,
        minLength: [8, "Password must contain atleast 8 characters."],
        validate: {
            validator: function (v) {
                return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(v);
            },
            message: "Password must be at least 8 characters, contain at least one uppercase letter, one lowercase letter, one number, and one special character."
        },
        select: false,
    },
    resume: {
        public_id: {
            type: String,
        },
        url: {
            type: String,
        },
    },
    role: {
        type: String,
        default: "Student",
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    avatar: {
        public_id: {
            type: String,
        },
        url: {
            type: String,
        },
    },
    isActivated: {
        type: Boolean,
        default: false,
    },
    isVerified: {
        type: Boolean,
        default: false,
    },
    courses: [
        {
            courseId: {
                type: String,
            },
        },
    ],

});

// Encrypting password before saving user
studentuserSchema.pre("save", async function (next) {
    if (!this.isModified("password")) {
        next();
    }
    this.password = await bcrypt.hash(this.password, 10);
    next();
});

// // sign access token
// studentuserSchema.methods.SignAccessToken = function(){
//     return jwt.sign({ id: this._id }, process.env.ACCESS_TOKEN || '');
// };

// // sign refresh token
// studentuserSchema.methods.SignRefreshToken = function(){
//     return jwt.sign({ id: this._id }, process.env.REFRESH_TOKEN || '');
// };


// Compare user password with the entered password with hash password
studentuserSchema.methods.comparePassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
}

// JWT Token
studentuserSchema.methods.getJwtToken = function () {
    try {
        return jwt.sign({ id: this._id }, process.env.JWT_SECRET_KEY, {
            expiresIn: process.env.JWT_EXPIRES_TIME,
        });
    } catch (error) {
        console.log("Error generating JWT Token", error);
    }

};

export const Students = moongoose.model("Students", studentuserSchema);







 