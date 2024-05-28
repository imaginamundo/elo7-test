import { GetJobsResponse, getJobs } from "@/bff/jobs";

import Link from "next/link";
import clsx from "clsx";

import styles from "./JobsList.module.scss";
import {
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useState,
  Fragment,
} from "react";
import Button from "../+Button/Button";

export default function JobsList({
  jobs,
  filter,
  page,
  setPage,
}: {
  jobs: GetJobsResponse;
  filter: string;
  page: number;
  setPage: Dispatch<SetStateAction<number>>;
}) {
  const [unparsedJobs, setUnparsedJobs] = useState<GetJobsResponse>(jobs);
  const [parsedJobs, setParsedJobs] = useState<ParsedJobs>(
    parseJobs(jobs, filter),
  );

  const updateFilter = useCallback(
    (filter = "", unparsedJobs: GetJobsResponse) => {
      setParsedJobs(parseJobs(unparsedJobs, filter));
    },
    [],
  );

  useEffect(() => {
    updateFilter(filter, unparsedJobs);
  }, [filter, unparsedJobs, updateFilter]);

  if ("message" in jobs) return <p>Erro ao buscar vagas :(</p>;

  const loadMore = async () => {
    const newJobs = await getJobs({ page: page + 1 });

    if ("message" in newJobs) {
      console.log("Ocorreu um erro ao tentar carregar mais");
      return;
    }

    setPage(newJobs.page);
    newJobs.jobs = [...unparsedJobs.jobs, ...newJobs.jobs];

    setUnparsedJobs(newJobs);
    setParsedJobs(parseJobs(newJobs));
  };

  return (
    <>
      {Object.entries(parsedJobs).map(([category, jobs]) => {
        return (
          <Fragment key={`jobs-${category}`}>
            <p
              key={`job-category-${category}`}
              className={clsx("mt-s", styles.jobCategory)}
            >
              {category}
            </p>
            <ul className={styles.jobs}>
              {jobs.map((job) => {
                return (
                  <li key={`job-${job.title}`} className={styles.job}>
                    <Link href="#" className={styles.jobLink}>
                      {job.title}
                      {job.remote && (
                        <span className={styles.jobLocation}>Remoto</span>
                      )}
                      {!job.remote && (
                        <span className={styles.jobLocation}>
                          {job.city}, {job.country}
                        </span>
                      )}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </Fragment>
        );
      })}
      {unparsedJobs.jobs.length < unparsedJobs.total && (
        <Button onClick={loadMore}>Carregar mais…</Button>
      )}
    </>
  );
}

function parseJobs(jobs: GetJobsResponse, filter = ""): ParsedJobs {
  if ("message" in jobs) return {};

  const parsedJobs: ParsedJobs = {};
  let jobsToParse = jobs.jobs;

  if (filter) {
    jobsToParse = jobs.jobs.filter((job) => {
      const filterLowercase = filter.toLowerCase();

      return (
        job.title.includes(filterLowercase) ||
        job.type.includes(filterLowercase) ||
        job.location?.includes(filterLowercase)
      );
    });
  }

  for (let i = 0; i < jobsToParse.length; i++) {
    if (!jobsToParse[i].is_active) continue;

    const type = jobsToParse[i].type;
    if (!parsedJobs[type]) parsedJobs[type] = [];

    parsedJobs[type].push({
      title: jobsToParse[i].title,
      ...parseLocation(jobsToParse[i].location),
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
