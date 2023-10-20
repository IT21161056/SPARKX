import express from "express"
import { Login,Register } from "../controllers/useController.js"

const userRouter = express.Router()

userRouter.post("/register",Register);
userRouter.get("/login",Login);

export default userRouter;
