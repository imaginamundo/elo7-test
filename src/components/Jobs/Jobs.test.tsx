import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import Jobs from "./Jobs";
import { type GetJobsResponse } from "@/bff/jobs";

const testJobsProps: { jobs: GetJobsResponse } = {
  jobs: {
    jobs: [
      {
        title: "pessoa engenheira devops",
        type: "engenharia",
        level: "pleno",
        location: null,
        is_active: true,
      },
      {
        title: "pessoa desenvolvedora front-end",
        type: "engenharia",
        level: "senior",
        location: null,
        is_active: true,
      },
      {
        title: "pessoa desenvolvedora mobile (android e ios)",
        type: "engenharia",
        level: "senior",
        location: null,
        is_active: false,
      },
      {
        title: "pessoa desenvolvedora java",
        type: "engenharia",
        level: "pleno",
        location: null,
        is_active: false,
      },
      {
        title: "especialista de fp&a",
        type: "financeiro",
        level: "especialista",
        location: "são paulo, sp, brasil",
        is_active: true,
      },
    ],
    total: 5,
    limit: 6,
    page: 0,
  },
};

describe("Hero", () => {
  test("should render", () => {
    const { container } = render(<Jobs {...testJobsProps} />);

    const jobs = document.querySelectorAll("li");

    expect(jobs.length).toBe(5);
  });
});
