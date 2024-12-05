import { Router } from 'express';

const router = Router();

/* ===================================================
-----------------------MIDDLEWARES--------------------
=====================================================*/
import categoryInputValidationMiddleware from '../middlewares/category/category-input-validation.middleware.js';
import isCategoryExistMiddleware from '../middlewares/category/is-category-exist.middleware.js';
import findCategoryByIdMiddleware from '../middlewares/category/find-category-by-id.middleware.js';

/* ===================================================
-----------------------CONTROLLERS--------------------
=====================================================*/
import createCategoryController from '../controllers/category/create-category.controller.js';
import getAllCategoriesController from '../controllers/category/get-all-category.controller.js';
import getCategoryByIdController from '../controllers/category/get-category-by-id.controller.js';
import updateCategoryController from '../controllers/category/update-category.controller.js';
import deleteCategoryController from '../controllers/category/delete-category.controller.js';

router
  .route('/categories')
  .post(
    categoryInputValidationMiddleware,
    isCategoryExistMiddleware,
    createCategoryController
  )
  .get(getAllCategoriesController);

router
  .route('/categories/:id')
  .get(findCategoryByIdMiddleware, getCategoryByIdController)
  .put(
    findCategoryByIdMiddleware,
    categoryInputValidationMiddleware,
    updateCategoryController
  )
  .delete(findCategoryByIdMiddleware, deleteCategoryController);

export default router;
