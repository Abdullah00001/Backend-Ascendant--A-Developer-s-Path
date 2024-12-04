import { Router } from 'express';

const router = Router();

/* ===================================================
-----------------------MIDDLEWARES--------------------
=====================================================*/
import categoryInputValidationMiddleware from '../middlewares/category/category-input-validation.middleware.js';
import isCategoryExistMiddleware from '../middlewares/category/is-category-exist.middleware.js';

/* ===================================================
-----------------------CONTROLLERS--------------------
=====================================================*/

router
  .route('/categories')
  .post(categoryInputValidationMiddleware, isCategoryExistMiddleware)
  .get();

router.route('/categories/:id').get().put().delete();

export default router;
