import { ResponseError } from "@/utils/error";
import log from "@/utils/log";

let timeout = 3000;

if (process.env.NEXT_PUBLIC_REQUEST_TIMEOUT) {
  timeout = parseInt(process.env.NEXT_PUBLIC_REQUEST_TIMEOUT);
}

export default async function request<ResponseType>(
  url: string,
  config: RequestInit = {
    signal: AbortSignal.timeout(timeout),
  },
): Promise<ResponseType> {
  const response = await fetch(url, config);

  if (!response.ok) {
    log(response);

    throw new ResponseError(response.statusText, response.status, response);
  }

  return await response.json();
}
