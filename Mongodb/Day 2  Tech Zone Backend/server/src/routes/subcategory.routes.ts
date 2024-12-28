import { Router } from "express";
import createSubCategoryController from "../controllers/subcategory/createSubCategory.controllers.js";
import createBulkSubCategoryController from "../controllers/subcategory/createBulkSubCategory.controllers.js";
import getAllSubCategoryController from "../controllers/subcategory/getAllSubCategories.controllers.js";
import getSubCategoryController from "../controllers/subcategory/getSubCategory.controllers.js";
import updateSubCategoryController from "../controllers/subcategory/updateSubCategory.controllers.js";
import deleteSubCategoryControllers from "../controllers/subcategory/deleteSubCategory.controllers.js";

const router = Router();

router
  .route("/subcategory")
  .post(createSubCategoryController)
  .post(createBulkSubCategoryController)
  .get(getAllSubCategoryController);

router
  .route("/subcategory/:id")
  .get(getSubCategoryController)
  .put(updateSubCategoryController)
  .delete(deleteSubCategoryControllers);

export default router;
