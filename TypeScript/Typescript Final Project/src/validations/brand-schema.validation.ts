import Joi from 'joi';
import BrandInterface from '../interfaces/brand.interface.js';

const brandValidationSchema = Joi.object<BrandInterface>({
  brandName: Joi.string().empty('').min(2).required().messages({
    'string.base': 'Brand name must be a text value.',
    'string.empty': 'Brand name cannot be empty.',
    'string.min': 'Brand name must be at least 2 characters long.',
    'any.required': 'Brand name is required.',
  }),
  brandDescription: Joi.string()
    .empty('')
    .min(20)
    .max(300)
    .required()
    .messages({
      'string.base': 'Brand description must be a text value.',
      'string.empty': 'Brand description cannot be empty.',
      'string.min': 'Brand description must be at least 20 characters long.',
      'string.max': 'Brand description cannot exceed 300 characters.',
      'any.required': 'Brand description is required.',
    }),
  brandLocation: Joi.string().empty('').required().messages({
    'string.base': 'Brand location must be a text value.',
    'string.empty': 'Brand location cannot be empty.',
    'any.required': 'Brand location is required.',
  }),
  brandEmail: Joi.string().email().required().messages({
    'string.base': 'Email must be a text value.',
    'string.email': 'Please provide a valid email address.',
    'any.required': 'Brand email is required.',
  }),
  brandEstablishedAt: Joi.date().iso().required().messages({
    'date.base': 'Brand established date must be a valid date.',
    'date.format': 'Date must follow the ISO format (YYYY-MM-DD).',
    'any.required': 'Brand established date is required.',
  }),
});

export default brandValidationSchema;
