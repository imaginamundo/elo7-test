import { expect, test, describe, vi, beforeAll } from "vitest";
import { ResponseError } from "@/utils/error";
import { getJobs } from "./jobs";
import * as request from "@/utils/request";

describe("getJob bff return", () => {
  beforeAll(() => {
    vi.spyOn(request, "default").mockResolvedValue(apiMock);
  });

  test("should hide inactive job", async () => {
    const jobs = await getJobs();

    expect(jobs.jobs.length).toBe(2);
  });

  test("should setup pagination", async () => {
    const jobs = await getJobs();

    expect(jobs.total).toBe(2);
    expect(jobs.page).toBe(0);
    expect(jobs.limit).toBe(5);
  });
});

describe("getJob bff pagination", () => {
  beforeAll(() => {
    const apiMockWithMoreJobs = {
      jobs: [
        ...apiMock.jobs,
        ...apiMock.jobs,
        ...apiMock.jobs,
        ...apiMock.jobs,
      ],
    };
    vi.spyOn(request, "default").mockResolvedValue(apiMockWithMoreJobs);
  });
  test("should paginate", async () => {
    const jobs = await getJobs();

    expect(jobs.page).toBe(0);
    expect(jobs.limit).toBe(5);
    expect(jobs.total).toBe(8);
    expect(jobs.jobs.length).toBe(5);
  });

  test("should return specific page", async () => {
    const jobs = await getJobs({ page: 1 });

    expect(jobs.page).toBe(1);
    expect(jobs.limit).toBe(5);
    expect(jobs.total).toBe(8);
    expect(jobs.jobs.length).toBe(3);
  });

  test("should return specific page limit", async () => {
    const jobs = await getJobs({ page: 1, limit: 2 });

    expect(jobs.page).toBe(1);
    expect(jobs.limit).toBe(2);
    expect(jobs.total).toBe(8);
    expect(jobs.jobs.length).toBe(2);
  });
});

describe("getJob bff errors", () => {
  test("should return error message when request fail", async () => {
    vi.spyOn(request, "default").mockRejectedValue(
      new ResponseError("Ops", 500, new Response()),
    );

    const jobs = await getJobs();

    expect(jobs.message).toBe("Ops");
    expect(jobs.status).toBe(500);
  });
});

const apiMock = {
  jobs: [
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
      is_active: false,
    },
    {
      title: "pessoa coordenadora de engenharia de dados",
      type: "engenharia",
      level: "senior",
      location: null,
      is_active: true,
    },
  ],
};
