import express from "express";
import { newProduct,getProducts } from "../controller/product_controller.js";
import { uploads } from "../middleware/fileUpload.js";

const productRoute = express.Router();
productRoute.post("/new", uploads("uploads/").array("images", 10), newProduct);
productRoute.get("/", getProducts);

export default productRoute;