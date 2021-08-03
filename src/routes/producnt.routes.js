import { Router } from "express";
import { getProduct } from "../controller/product.controller";

const router = Router();

router.get("/product", getProduct);

export default router;
