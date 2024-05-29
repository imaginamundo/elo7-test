import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import Header from "./Header";

describe("Header", () => {
  test("should render", () => {
    render(<Header />);

    const logo = screen.getByRole("img");
    expect(logo.getAttribute("src")).toBe("/elo7-logo.svg");
  });
});
