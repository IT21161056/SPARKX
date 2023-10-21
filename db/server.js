import express from "express";
import mongoose from "mongoose";
import cors from 'cors';
import userRouter from "./routes/userRoutes.js";
import * as dotenv from 'dotenv' 
dotenv.config()

const app = express();
app.use(cors());
app.use(express.json());


app.use("/user",userRouter);

mongoose.set('strictQuery', false);
mongoose.connect(process.env.MONGO_URL)
.then(() => app.listen(5000))
.then(() => console.log("Database is Connected"))
.catch((err) => console.log(err));
