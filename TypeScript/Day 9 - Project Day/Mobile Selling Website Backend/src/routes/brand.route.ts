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

router
  .route('/brand')
  .post(brandInputValidation, isBrandNameExist, createBrandController);

router.route('/brand').get(getAllBrandsControllers);
router
  .route('/brand/:id')
  .get(isBrandIdExistMiddleware, getBrandbyIDController);

router.route('/brand/:id').put(brandInputValidation, isBrandIdExistMiddleware,updateBrandController);

router.route('/brand/:id').delete(isBrandIdExistMiddleware);

export default router;
