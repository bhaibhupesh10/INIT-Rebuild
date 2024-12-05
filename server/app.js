import express from 'express';
import { config } from 'dotenv';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import {connectDB} from './database/connetion.js';
import { errorMiddleware } from './middlewares/error.js';
import fileUpload from 'express-fileupload';
import studRouter from './routes/studRouter.js';

const app = express();
config({ path: "./config/config.env" });

app.use(cors({
    origin: [process.env.FRONTEND_URL],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true
})
); //CORS middleware

app.use(cookieParser()); //Cookie parser middleware

app.use(express.json({limit: "50mb"})); //Body parser middleware //Adding Limit to the body parser
app.use(express.urlencoded({ extended: true })); //Body parser middleware

//using fileupload for uploading resume
app.use(fileUpload({
    useTempFiles: true,
    tempFileDir: "/tmp/",
}));

app.use("/auth/student", studRouter); //Student router

connectDB(); //Connect to database
app.use(errorMiddleware) //Don't call this function like cors 

export default app;