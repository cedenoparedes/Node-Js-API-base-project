import { Router } from "express";
import {
  createProduct,
  getProductById,
  getProducts,
  remuveProductById,
  updateProductById,
} from "../controller/product.controller";
import { login } from "../controller/login.controller";

const router = Router();

router.get("/product", getProducts);
router.post("/product", createProduct);
router.get("/product/:id", getProductById);
router.delete("/product/remove/:id", remuveProductById);
router.put("/product/update/:id", updateProductById);

export default router;
