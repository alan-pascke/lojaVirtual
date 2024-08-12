import { Router } from "express";
import ProductController from "../controller/ProductController";


const productRouter = Router();


productRouter.get("/getProducts", ProductController.getAllProducts);

productRouter.get("/getProduct/:id", ProductController.getProductById);

productRouter.post("/createProduct", ProductController.createProduct);

productRouter.put("/updateProduct/:id", ProductController.updateProduct);

productRouter.delete("/deleteProduct/:id", ProductController.deleteProduct);

export default productRouter
