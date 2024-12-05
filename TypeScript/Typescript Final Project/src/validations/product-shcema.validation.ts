import Joi from 'joi';
import ProductInterface from '../interfaces/product/product.interface.js';

const productValidationSchema = Joi.object<ProductInterface>({
  productName: Joi.string().empty('').min(3).required().messages({
    'string.empty': 'Product name cannot be empty',
    'string.min': 'Product name must be at least 3 characters long',
    'any.required': 'Product name is required',
  }),
  productModel: Joi.string().empty('').min(3).required().messages({
    'string.empty': 'Product model cannot be empty',
    'string.min': 'Product model must be at least 3 characters long',
    'any.required': 'Product model is required',
  }),
  productPrice: Joi.number().required().messages({
    'number.base': 'Product price must be a valid number',
    'any.required': 'Product price is required',
  }),
  releasedDate: Joi.date().required().messages({
    'date.base': 'Released date must be a valid date',
    'any.required': 'Released date is required',
  }),
  productDescription: Joi.string()
    .empty('')
    .min(20)
    .max(400)
    .required()
    .messages({
      'string.empty': 'Product description cannot be empty',
      'string.min': 'Product description must be at least 20 characters long',
      'string.max': 'Product description cannot exceed 400 characters',
      'any.required': 'Product description is required',
    }),
  brand: Joi.string()
    .regex(/^[0-9a-fA-F]{24}$/)
    .required()
    .messages({
      'string.pattern.base': 'Brand must be a valid MongoDB ObjectId',
      'any.required': 'Brand is required',
    }),
  category: Joi.string()
    .regex(/^[0-9a-fA-F]{24}$/)
    .required()
    .messages({
      'string.pattern.base': 'Category must be a valid MongoDB ObjectId',
      'any.required': 'Category is required',
    }),
});

export default productValidationSchema;
