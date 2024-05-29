import next from "next";

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NEXT_PUBLIC_BASE_URL: string;
      NEXT_PUBLIC_REQUEST_TIMEOUT: string;
      JOBS_ENDPOING: string;

      SENTRY_AUTH_TOKEN: string;
      NEXT_PUBLIC_GA_ID: string;
    }
  }
}
