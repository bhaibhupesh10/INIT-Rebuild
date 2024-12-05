//User Logout Problem Solved by auth.js Middleware

import { catchAsyncErrors } from "./catchAsyncErrors.js";
import ErrorHandler from "./error.js";
import jwt from "jsonwebtoken";
import { Students} from "../models/studentSchema.js";

export const isStudAuthenticated = catchAsyncErrors(async (req, res, next) => {
    const { token } = req.cookies;
    if (!token) {
        return next(new ErrorHandler("Login first to access this resource.", 401));
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);

    //get user which is logged in
    req.user = await Students.findById(decoded.id);
    next();
});