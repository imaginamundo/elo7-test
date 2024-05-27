import next from "next";

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      BASE_URL: string;
      NEXT_PUBLIC_REQUEST_TIMEOUT: number;
      JOBS_ENDPOING: string;
    }
  }
}
