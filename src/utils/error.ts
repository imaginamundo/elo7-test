export class ResponseError extends Error {
  name: "ResponseError" = "ResponseError";
  constructor(
    public statusText: string,
    public status: number,
    public response: Response,
    message?: string,
  ) {
    super(message);
  }
}

export function hasErrorStatus(error: unknown) {
  return !!error && typeof error === "object" && "status" in error;
}
