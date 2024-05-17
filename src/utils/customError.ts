export class CustomError extends Error {
  public statusCode: number;

  constructor(statusCode: number, message: string) {
    super(message);
    this.statusCode = statusCode;
  }
}

export class CepNotFoundError extends CustomError {
  constructor() {
    super(404, "CEP not found!");
  }
}

export class CepInvalidError extends CustomError {
  constructor() {
    super(400, "invalid CEP!");
  }
}

export const DefaultError = {
  statusCode: 500,
  body: "Something went wrong!",
};
