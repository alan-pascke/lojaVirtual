import { Router, Request, Response } from "express";
import UserController from "../controller/UserController";

const userRouter = Router();

userRouter.get("/users", UserController.getAllUsers);

userRouter.get("/users/:id", UserController.getUserById);

userRouter.post("/users", UserController.createUser);

userRouter.put("/users/:id", UserController.updateUser);

userRouter.delete("/users/:id", UserController.deleteUser);




export default userRouter