import { Router } from 'express';
import createProductController from '../controllers/product/create-product.controller.js';
import getProductsController from '../controllers/product/get-products.controller.js';
import getProductController from '../controllers/product/get-product.controller.js';
import deleteProductController from '../controllers/product/delete-product.controller.js';
import updateProductController from '../controllers/product/updated-product.controller.js';
import productInputValidationMiddleware from '../middlewares/product/product-input-validation.middleware.js';
import findProductByIdMiddleware from '../middlewares/product/find-product-by-id.middleware.js';

const router = Router();

router
  .route('/products')
  .post(productInputValidationMiddleware, createProductController)
  .get(getProductsController);

router
  .route('/products/:id')
  .get(findProductByIdMiddleware, getProductController)
  .put(
    findProductByIdMiddleware,
    productInputValidationMiddleware,
    updateProductController
  )
  .delete(findProductByIdMiddleware, deleteProductController);

export default router;
