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

export async function getJobs(): Promise<GetJobsResponse> {
  let jobs;
  try {
    jobs = await request<JobsResponse>(process.env.JOBS_ENDPOING);
  } catch (err) {
    if (err instanceof ResponseError) {
      return { message: err.message, status: err.status };
    }
    console.log(err);
    return { message: "Something unexpected happened" };
  }
  return parseJobs(jobs);
}

type GetJobsResponse =
  | {
      message: string;
      status?: number;
    }
  | ParsedJobs;

function parseJobs({ jobs }: JobsResponse): ParsedJobs {
  const parsedJobs: ParsedJobs = {};

  if (!jobs) return parsedJobs;

  for (let i = 0; i < jobs.length; i++) {
    if (!jobs[i].is_active) continue;

    const type = jobs[i].type;
    if (!parsedJobs[type]) parsedJobs[type] = [];

    parsedJobs[type].push({
      title: jobs[i].title,
      ...parseLocation(jobs[i].location),
    });
  }

  return parsedJobs;
}

type ParsedJobs = {
  [key: string]: ({
    title: string;
  } & ParsedLocation)[];
};

function parseLocation(location?: string): ParsedLocation {
  if (!location) return { remote: true };
  const [city, _, country] = location.split(",");

  return { city: city.trim(), country: country.trim(), remote: false };
}

type ParsedLocation = {
  city?: string;
  country?: string;
  remote: boolean;
};
