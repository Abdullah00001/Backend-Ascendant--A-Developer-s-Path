import { NextFunction, Request, Response } from 'express';
import brandValidationSchema from '../../validations/brand-schema.validation.js';
import FieldValidationError from '../../utils/api-response/field-validation-error-api-response.utils.js';

const brandInputValidationMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const { error } = brandValidationSchema.validate(req.body, {
    abortEarly: false,
  });
  if (error) {
    const errorList = error.details.map((err) => err);
    new FieldValidationError(
      400,
      'Validation Error',
      errorList
    ).sendValidationErrorResponse(res);
    return;
  }
  next();
};

export default brandInputValidationMiddleware;
