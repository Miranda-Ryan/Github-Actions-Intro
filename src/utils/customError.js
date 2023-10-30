class CustomError extends Error {
  constructor(statusCode, message) {
    super(message);
    this.statusCode = statusCode;
    this.message = message;
    this.type = ERROR_TYPES[statusCode];
  }
}

const ERROR_TYPES = {
  200: "OK",
  201: "CREATED",
  400: "BAD REQUEST",
  401: "UNAUTHENTICATED REQUEST",
  403: "FORBIDDEN",
  404: "NOT FOUND",
  422: "VALIDATION FAILED",
  500: "INTERNAL SERVER ERROR"
};

module.exports = CustomError;
