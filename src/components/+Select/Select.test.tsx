import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import Select from "./Select";

describe("Select props", () => {
  test("should render", () => {
    render(
      <Select name="input-test">
        <option value="Hello">Value</option>
      </Select>,
    );
    const select: HTMLSelectElement = screen.getByRole("option");
    expect(select).toBeTruthy();
    expect(select.value).toBe("Hello");
  });
});
