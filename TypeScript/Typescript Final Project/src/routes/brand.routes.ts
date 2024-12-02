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

router
  .route('/brand')
  .post(brandInputValidationMiddleware, createBrandController);

export default router;
