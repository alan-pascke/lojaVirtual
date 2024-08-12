import { Router } from "express";
import CategoryController from "../controller/CategoryController";

const categoryRouter = Router();


categoryRouter.get("/getCategories", CategoryController.getAllCategories);
categoryRouter.get("/getCategory/:id", CategoryController.getCategoryById);
categoryRouter.post("/createCategory", CategoryController.createCategory);
categoryRouter.put("/updateCategory/:id", CategoryController.updateCategory);
categoryRouter.delete("/deleteCategory/:id", CategoryController.deleteCategory);

export default categoryRouter
