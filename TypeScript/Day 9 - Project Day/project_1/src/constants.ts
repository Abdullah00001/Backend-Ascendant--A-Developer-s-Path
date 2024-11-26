const enum apiResponseStatusType {
  success = 'Sucess',
  field_error = 'Field Error',
  server_error = 'Server Error',
  conflict = 'Already Exist',
  not_found = 'Resource Not Found',
  bad_request='Bed Request'
}

const baseURL: string = '/api/v1';

export { apiResponseStatusType, baseURL };
