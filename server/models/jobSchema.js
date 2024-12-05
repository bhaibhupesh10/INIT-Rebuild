import e from "cors";
import mongoose from "mongoose";

const jobSchema = new mongoose.Schema({
    jobTitle: {
        type: String,
        required: true
    },
    jobType: {
        type: String,
        required: true,
        // enum: ["Full Time", "Part Time", "Internship", "Contract"]
        enum: ["Full Time", "Part Time"]
    },
    location: {
        type: String,
        required: true
    },
    companyName: {
        type: String,
        required: true
    },
    jobDescription: {
        type: String,
        // required: true
    },
    responsibilities: {
        type: String,
        // required: true
    },
    qualifications: {
        type: String,
        // required: true
    },
    benefits: {
        type: String,
        // required: true
    },
    salary: {
        type: String,
        required: true
    },
    hiringMultipleCandidates: {
        type: String,
        default: "No",
        enum: ["Yes", "No"]
    },
    companyWebsite: {
        title: String,
        url: String,
    },
    
    jobNiche: {
        type: String,
        required: true
    },
    newsLettersSent: {
        type: Boolean,
        default: false,
    },
    applyDeadline: {
        type: String,
        required: true
    },
    jobPostedOn: {
        type: Date,
        default: Date.now
    },
    postedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    }
    // status: {
    //     type: String,
    //     default: "active"
    // },

}, { timestamps: true });

export const Job = mongoose.model("Job", jobSchema);