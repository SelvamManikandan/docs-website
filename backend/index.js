import express from "express"
import cookieParser from "cookie-parser"
import cors from 'cors';
import mongoose from "mongoose";
import dotenv from "dotenv";
import authRoute from './Routes/auth.js';
import userRoute from "./Routes/user.js";
import doctorRoute from "../backend/Routes/doctor.js";
import reviewRoute from "../backend/Routes/review.js";
dotenv.config()

const app = express()
app.use(cors(
    {
    origin: ["https://deploy-mern-lwhq.vercel.app"],
    method: ["POST", "GET"],
    credentials: true
    }
));
const port = process.env.PORT || 8000


app.get('/', (req, res) => {
    res.send('Api is Working');
});
mongoose.connect("mongodb+srv://mani:Mani21112003@cluster0.mil2aso.mongodb.net/?retryWrites=true&w=majority").then(() => {
    console.log("Database is Connected!");
}).catch((err) => {
    console.log(err);
})

//middleware
app.use(express.json());
app.use(cookieParser());
app.use('/api/v1/auth', authRoute)// domain/api/v1/auth/register
app.use('/api/v1/users', userRoute)
app.use('/api/v1/doctor', doctorRoute);
app.use('/api/v1/reviews', reviewRoute);

app.listen(port, () => {
    console.log("Server is running on port" + port);
});