import { sendGAEvent } from "@next/third-parties/google";
import { logError } from "@/utils/log";

type DataLayer = {
  event: string;
  [key: string]: string | number;
};
export function dataLayer(data: DataLayer) {
  if (process.env.IS_SERVER) {
    const error = new Error("Data layer must be called on server side");

    logError(error);

    throw error;
  }

  sendGAEvent(data);
}

export const events = { pageview: "pageview", cta: "cta", nav: "nav" } as const;
