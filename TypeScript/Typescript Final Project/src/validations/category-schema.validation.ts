import Joi from 'joi';
import CategoryInterface from '../interfaces/category/category.interface.js';

const categoryValidationSchema = Joi.object<CategoryInterface>({
  categoryName: Joi.string().empty('').min(3).required().messages({
    'string.base': 'Category Name Must Be A String',
    'string.empty': 'Category Name Cannot Be Empty',
    'string.min': 'Category Name Should Be Minimum Have 3 Character',
    'any.required': 'Category Name Is Required',
  }),
  categoryDescription: Joi.string().empty('').max(250).required().messages({
    'string.base': 'Description Must Be A String',
    'string.empty': 'Description Cannot Be Empty',
    'string.max': 'Description Size Must Be In 250 Characters',
    'any.required': 'Description Is Required',
  }),
});

export default categoryValidationSchema;
