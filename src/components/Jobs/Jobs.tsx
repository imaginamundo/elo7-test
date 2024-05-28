"use client";

import Input from "@/components/+Input/Input";

import styles from "./Jobs.module.scss";
import Link from "next/link";

export default function Jobs() {
  return (
    <div className="container">
      <div className={styles.jobsHeader}>
        <h2 id="vagas">Vagas em aberto</h2>
        <Input />
      </div>
      <ul className={styles.jobs}>
        {jobsMock.map((job) => {
          return (
            <li key={`job-${job.title}`} className={styles.job}>
              <Link href="#" className={styles.jobLink}>
                {job.title}
                <span>{job.location}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

const jobsMock = [
  {
    title: "especialista de fp&a",
    type: "financeiro",
    level: "especialista",
    location: "são paulo, sp, brasil",
    is_active: true,
  },
  {
    title: "estágio em riscos e controles internos",
    type: "controles internos",
    level: "estágio",
    location: "são paulo, sp, brasil",
    is_active: true,
  },
];
