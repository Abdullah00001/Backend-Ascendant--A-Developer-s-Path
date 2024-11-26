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

router
  .route('/brand')
  .post(brandInputValidation, isBrandNameExist, createBrandController);

router.route('/brand').get(getAllBrandsControllers);
router
  .route('/brand/:id')
  .get(isBrandIdExistMiddleware, getBrandbyIDController);

export default router;
