export class ResponseError extends Error {
  name: "ResponseError" = "ResponseError";
  constructor(
    message: string,
    public status: number,
    public response: Response,
  ) {
    super(message);
  }
}

export function hasErrorStatus(error: unknown) {
  return !!error && typeof error === "object" && "status" in error;
}
