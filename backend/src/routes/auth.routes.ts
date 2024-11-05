import { Router } from "express";
import AuthUserController from "../controller/AuthUserController";

const authRouter = Router();

authRouter.post('/login', AuthUserController.login);  

authRouter.get('/check-auth', AuthUserController.checkAuth)


export default authRouter