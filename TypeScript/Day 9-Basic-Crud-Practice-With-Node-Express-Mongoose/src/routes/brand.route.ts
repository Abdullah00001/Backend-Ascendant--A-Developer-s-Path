import { Router } from 'express';

const router = Router();

/* ===================================================
-----------------------MIDDLEWARES--------------------
=====================================================*/
import brandInputValidation from '../middlewares/brands/brandInputValidation.middlewares.js';
import isBrandNameExist from '../middlewares/brands/isBrandNameExist.middlewares.js';
import isBrandIdExistMiddleware from '../middlewares/brands/isBrandIdExist.middlewares.js';

/* ===================================================
-----------------------CONTROLLERS--------------------
=====================================================*/

import createBrandController from '../controllers/brands/postBrand.controllers.js';
import getAllBrandsControllers from '../controllers/brands/getAllBrands.controllers.js';
import getBrandbyIDController from '../controllers/brands/getBrandById.controllers.js';
import updateBrandController from '../controllers/brands/updateBrand.controllers.js';
import deleteBrandByIdController from '../controllers/brands/deleteBrandById.controllers.js';

router
  .route('/brand')
  .post(brandInputValidation, isBrandNameExist, createBrandController)
  .get(getAllBrandsControllers);

router
  .route('/brand/:id')
  .get(isBrandIdExistMiddleware, getBrandbyIDController)
  .put(brandInputValidation, isBrandIdExistMiddleware, updateBrandController)
  .delete(isBrandIdExistMiddleware, deleteBrandByIdController);

export default router;
