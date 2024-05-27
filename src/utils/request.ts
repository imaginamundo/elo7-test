import { ResponseError } from "@/utils/error";
import log from "@/utils/log";

export default async function request<ResponseType>(
  url: string,
  config: RequestInit = {
    signal: AbortSignal.timeout(
      process.env.NEXT_PUBLIC_REQUEST_TIMEOUT || 3000,
    ),
  },
): Promise<ResponseType> {
  const response = await fetch(url, config);

  if (!response.ok) {
    log(response);

    throw new ResponseError(response.statusText, response.status, response);
  }

  return await response.json();
}
