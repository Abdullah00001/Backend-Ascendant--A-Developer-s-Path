import { Router } from 'express';

const router = Router();

/* ===================================================
-----------------------MIDDLEWARES--------------------
=====================================================*/
import brandInputValidationMiddleware from '../middlewares/brand/brand-input-validation.middleware.js';
/* ===================================================
-----------------------CONTROLLERS--------------------
=====================================================*/
import createBrandController from '../controllers/brand/create-brand.controller.js';
import isBrandExistMiddleware from '../middlewares/brand/is-brand-exist.middleware.js';
import getBrandsController from '../controllers/brand/get-brands.controller.js';
import getBrandByIdMiddleware from '../middlewares/brand/get-brand-by-id.middleware.js';
import getBrandByIdController from '../controllers/brand/get-brand-by-id.controller.js';
import updateBrandController from '../controllers/brand/update-brand.controller.js';

router
  .route('/brand')
  .post(
    brandInputValidationMiddleware,
    isBrandExistMiddleware,
    createBrandController
  )
  .get(getBrandsController);

router
  .route(`/brand/:id`)
  .get(getBrandByIdMiddleware, getBrandByIdController)
  .put(
    getBrandByIdMiddleware,
    brandInputValidationMiddleware,
    updateBrandController
  )
  .delete();
export default router;
