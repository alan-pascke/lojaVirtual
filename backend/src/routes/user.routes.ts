import { Router } from "express";
import UserController from "../controller/UserController";

const userRouter = Router();

userRouter.get("/getUsers", UserController.getAllUsers);
userRouter.get("/getUser/:id", UserController.getUserById);
userRouter.post("/createUser", UserController.createUser);
userRouter.put("/updateUser/:id", UserController.updateUser);
userRouter.delete("/deleteUser/:id", UserController.deleteUser);




export default userRouter