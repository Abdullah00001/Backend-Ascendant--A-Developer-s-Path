import { Router } from "express";
import createCategoryControllers from "../controllers/category/createCategory.controllers.js";
import addBulkCategoryController from "../controllers/category/addBulkCategory.controllers.js";
import getAllCategoryController from "../controllers/category/getAllCategory.controllers.js";
import getCategoryController from "../controllers/category/getCategory.controllers.js";
import updateCategoryController from "../controllers/category/updateCategory.controllers.js";
import deleteCategoryController from "../controllers/category/deleteCategory.controllers.js";

const router = Router();

router
  .route("/category")
  .post(createCategoryControllers)
  .post(addBulkCategoryController)
  .get(getAllCategoryController);

router
  .route("/category/:id")
  .get(getCategoryController)
  .put(updateCategoryController)
  .delete(deleteCategoryController);

export default router;
