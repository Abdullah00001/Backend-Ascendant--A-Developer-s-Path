import { Router } from "express";
import addBulkProductController from "../controllers/add-bulk-product.controllers.js";
import getProductsController from "../controllers/getProducts.controllers.js";

const router = Router();

router
  .route("/products")
  .post(addBulkProductController)
  .get(getProductsController);

export default router;
