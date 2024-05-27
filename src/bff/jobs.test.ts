import { expect, test, describe, vi, beforeAll, afterAll } from "vitest";
import { ResponseError } from "@/utils/error";
import { getJobs } from "./jobs";
import * as request from "@/utils/request";

describe("job bff return", () => {
  beforeAll(() => {
    vi.spyOn(request, "default").mockResolvedValue(apiMock);
  });

  test("should hide inactive job", async () => {
    const jobs = await getJobs();

    expect("controle internos" in jobs).toBeFalsy();
    expect("financeiro" in jobs).toBeTruthy();
    expect("engenharia" in jobs).toBeTruthy();
  });

  test("should get city and country", async () => {
    const jobs = await getJobs();

    expect(jobs.financeiro[0].city).toBe("são paulo");
    expect(jobs.financeiro[0].country).toBe("brasil");
    expect(jobs.financeiro[0].remote).toBe(false);

    expect(jobs.engenharia[0].city).toBe(undefined);
    expect(jobs.engenharia[0].country).toBe(undefined);
    expect(jobs.engenharia[0].remote).toBe(true);
  });
});

describe("job bff errors", () => {
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
