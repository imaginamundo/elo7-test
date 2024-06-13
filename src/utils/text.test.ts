import { describe, expect, test } from "vitest";
import { capitalize } from "./text";

describe("Capitalize", () => {
  test("should capitalize all first letters of words", () => {
    expect(capitalize("são paulo, brasil")).toBe("São Paulo, Brasil");
  });
});
