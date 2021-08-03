import { Router } from "express";
import {
  createProduct,
  getProductById,
  getProducts,
  remuveProductById,
} from "../controller/product.controller";

const router = Router();

router.get("/product", getProducts);
router.post("/product", createProduct);
router.get("/product/:id", getProductById);
router.delete("/product/remuve/:id", remuveProductById);

export default router;
