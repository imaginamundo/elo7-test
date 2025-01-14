import { GetJobsResponse, getJobs } from "@/bff/jobs";

import Link from "next/link";
import clsx from "clsx";
import { dataLayer, events } from "@/utils/analytics";

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
  setFilter,
  page,
  setPage,
}: {
  jobs: GetJobsResponse;
  filter: string;
  setFilter: Dispatch<SetStateAction<string>>;
  page: number;
  setPage: Dispatch<SetStateAction<number>>;
}) {
  const [unparsedJobs, setUnparsedJobs] = useState<GetJobsResponse>(jobs);
  const [parsedJobs, setParsedJobs] = useState<ParsedJobs>(
    parseJobs(jobs, filter),
  );
  const [loading, setLoading] = useState(false);

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
    dataLayer({ event: events.cta, label: "Carregar mais…" });
    setLoading(true);
    const newJobs = await getJobs({ page: page + 1 });

    if ("message" in newJobs) {
      console.log("Ocorreu um erro ao tentar carregar mais");
      setLoading(false);
      return;
    }

    setPage(newJobs.page);
    newJobs.jobs = [...unparsedJobs.jobs, ...newJobs.jobs];

    setUnparsedJobs(newJobs);
    setParsedJobs(parseJobs(newJobs));
    setLoading(false);
  };

  return (
    <>
      {Object.entries(parsedJobs).map(([category, jobs]) => {
        return (
          <Fragment key={`jobs-${category}`}>
            <p
              key={`job-category-${category}`}
              className={clsx("mt-m", styles.jobCategory)}
            >
              <strong>{category}</strong>
            </p>
            <ul className={styles.jobs}>
              {jobs.map((job) => {
                return (
                  <li key={`job-${job.title}`} className={styles.job}>
                    <Link href="#" className={styles.jobLink}>
                      {job.title}
                      <span className={styles.jobLocation}>{job.location}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </Fragment>
        );
      })}
      {!Object.keys(parsedJobs).length && (
        <p className="text-center">
          Nenhuma vaga encontrada.{" "}
          <Button onClick={() => setFilter("")}>Limpar filtro {filter}</Button>
        </p>
      )}
      {unparsedJobs.jobs.length < unparsedJobs.total && (
        <div className="text-center mt-l">
          <Button onClick={loadMore} loading={loading}>
            Carregar mais…
          </Button>
        </div>
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
    const type = jobsToParse[i].type;
    if (!parsedJobs[type]) parsedJobs[type] = [];

    parsedJobs[type].push({
      title: jobsToParse[i].title,
      location: jobsToParse[i].location,
    });
  }

  return parsedJobs;
}

type ParsedJobs = {
  [key: string]: ({
    title: string;
  } & ParsedLocation)[];
};
