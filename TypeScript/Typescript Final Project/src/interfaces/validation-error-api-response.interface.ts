interface FieldErrorInterface<T> {
  field: string;
  type: T;
  hints: string;
}

interface FieldValidationErrorInterface<T> {
  fieldsErrors: FieldErrorInterface<T>[];
}

export { FieldValidationErrorInterface, FieldErrorInterface };
