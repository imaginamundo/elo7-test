import * as Sentry from "@sentry/nextjs";

export function logInfo(data: any) {
  if (process.env.NODE_ENV === "production") {
    console.log(data);
  }
}

export function logError(data: any) {
  if (process.env.NODE_ENV === "production") {
    Sentry.captureException(data);
  }
}
