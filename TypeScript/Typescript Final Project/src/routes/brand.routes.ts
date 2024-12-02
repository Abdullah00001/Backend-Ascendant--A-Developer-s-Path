import { Router } from 'express';

const router = Router();

/* ===================================================
-----------------------MIDDLEWARES--------------------
=====================================================*/
import brandInputValidationMiddleware from '../middlewares/brand/brand-input-validation.middleware.js';
/* ===================================================
-----------------------CONTROLLERS--------------------
=====================================================*/
import createBrandController from '../controllers/brand/createBrand.controller.js';
import isBrandExistMiddleware from '../middlewares/brand/is-brand-exist.middleware.js';

router
  .route('/brand')
  .post(
    brandInputValidationMiddleware,
    isBrandExistMiddleware,
    createBrandController
  );

export default router;
