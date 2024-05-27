"use server";
import request from "@/utils/request";
import { ResponseError } from "@/utils/error";

type JobsResponse = {
  jobs: {
    title: string;
    type: string;
    level: string;
    location?: string;
    is_active: boolean;
  }[];
};

export async function getJobs() {
  let jobs;
  try {
    jobs = await request<JobsResponse>(process.env.JOBS_ENDPOING);
  } catch (err) {
    if (err instanceof ResponseError) {
      return { message: err.message, status: err.status };
    }
    return { message: "Something unexpected happened" };
  }
  return jobs;
}
