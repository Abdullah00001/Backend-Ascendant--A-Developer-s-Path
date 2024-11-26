import Joi from 'joi';
import { Request, Response, NextFunction } from 'express';
import { apiResponseStatusType } from '../../constants.js';

interface brandInputInterface {
  brandName: string;
  brandEstablishedAt: Date;
  brandDescription: string;
}

const brandInputValidationSchema = Joi.object<brandInputInterface>({
  brandName: Joi.string().required().messages({
    'any.required': 'Brand Name Cannot Be Empty',
    'string.base': 'Brand Name must be a string',
  }),
  brandEstablishedAt: Joi.date().required().empty('').iso().messages({
    'any.required': 'Brand Established Date Cannot Be Empty Or Invalid Format',
    'string.base': 'Brand Established Date must be a string',
    'string.empty': 'Brand Established Date Cannot Be Empty Or Invalid Format',
    'date.base': 'Brand Established Date must be in a valid ISO date format',
    'date.isoDate': 'Brand Established Date must be in a valid ISO date format',
  }),
  brandDescription: Joi.string().required().messages({
    'any.required': 'Brand Description Cannot Be Empty',
    'string.base': 'Brand Description must be a string',
  }),
});

const brandInputValidation = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const { error } = brandInputValidationSchema.validate(req.body);
  if (error) {
    const errorList = error.details.map((errorDetail) => errorDetail.message);
    res.status(400).json({
      type: apiResponseStatusType.field_error,
      status: 400,
      message: errorList[0],
    });
    return;
  }
  next();
};

export default brandInputValidation;
