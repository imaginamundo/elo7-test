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

const DEFAULT_PAGE_SIZE = 5;

export async function getJobs({
  page = 0,
  limit = DEFAULT_PAGE_SIZE,
} = {}): Promise<GetJobsResponse> {
  let jobs;
  try {
    jobs = (await request<JobsResponse>(process.env.JOBS_ENDPOING)).jobs;
  } catch (err) {
    if (err instanceof ResponseError) {
      return {
        jobs: [],
        page: 0,
        total: 0,
        message: err.message,
        status: err.status,
      };
    }
    return {
      jobs: [],
      page: 0,
      total: 0,
      message: "Something unexpected happened",
    };
  }

  let total = 0;
  for (let i = 0; i < jobs.length; i++) {
    if (jobs[i].is_active) total += 1;
  }

  jobs = sortJobs(jobs);
  jobs = paginateJobs({ jobs, page, limit });

  return {
    jobs,
    page,
    limit,
    total,
  };
}

export type GetJobsResponse =
  | {
      jobs: JobsResponse["jobs"];
      page: number;
      limit: number;
      total: number;
    }
  | {
      jobs: [];
      page: number;
      total: number;
      message: string;
      status?: number;
    };

function paginateJobs({
  jobs,
  page,
  limit,
}: {
  jobs: JobsResponse["jobs"];
  page: number;
  limit: number;
}) {
  const start = page * limit;
  const end = start + limit;
  return jobs.slice(start, end);
}

function sortJobs(jobs: JobsResponse["jobs"]) {
  return jobs.sort((a, b) => {
    return a.type.localeCompare(b.type);
  });
}
