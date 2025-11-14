import { NextFunction, Request, Response } from 'express';
import productValidationSchema from '../../validations/product-shcema.validation.js';
import FieldValidationError from '../../utils/api-response/field-validation-error-api-response.utils.js';

const productInputValidationMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { error } = productValidationSchema.validate(req.body);

    if (error) {
      const errorList = error?.details.map((err) => err);
      new FieldValidationError(
        400,
        'Validation Error',
        errorList
      ).sendValidationErrorResponse(res);
      return;
    }
    next();
  } catch (error) {
    next(error);
  }
};

export default productInputValidationMiddleware;
