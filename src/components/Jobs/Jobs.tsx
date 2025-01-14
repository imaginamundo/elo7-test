"use client";

import Input from "@/components/+Input/Input";
import JobsList from "./JobsList";
import SearchIcon from "@/icons/search.svg?url";

import { useState } from "react";

import type { GetJobsResponse } from "@/bff/jobs";

import styles from "./Jobs.module.scss";
import clsx from "clsx";

export default function Jobs({ jobs }: { jobs: GetJobsResponse }) {
  const [page, setPage] = useState(0);
  const [filter, setFilter] = useState("");

  return (
    <div className="container">
      <div className={clsx("mb-xl", styles.jobsHeader)}>
        <h2 id="vagas">Vagas em aberto</h2>
        <Input
          value={filter}
          type="search"
          placeholder="Nome da vaga…"
          className={styles.jobsSearch}
          style={{
            background: `url(${SearchIcon.src}) no-repeat var(--neutral-white)`,
            backgroundPosition: "center right 0.5em",
            paddingRight: "2.5em",
          }}
          onChange={(e) => {
            setFilter(e.target.value);
          }}
        />
      </div>
      <JobsList
        jobs={jobs}
        filter={filter}
        setFilter={setFilter}
        page={page}
        setPage={setPage}
      />
    </div>
  );
}
