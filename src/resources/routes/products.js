import express from "express";
import Products from "../models/products.js";
import { default as productController } from '../controllers/productsController.js';

const productRoutes = express.Router();

productRoutes.get("/", productController.getAllProducts);

productRoutes.get("/:id", productController.getProductById);

// productRoutes.get("/:category", productController.getByCategory);

productRoutes.post("/", productController.create);

productRoutes.put("/:id", productController.update);

productRoutes.delete("/:id", productController.delete);

export default productRoutes;
