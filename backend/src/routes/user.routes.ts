import { Router, Request, Response } from "express";
import UserController from "../controller/UserController";

const userRouter = Router();

userRouter.get("/users", UserController.getAllUsers);


export default userRouter