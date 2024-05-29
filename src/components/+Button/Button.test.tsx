import { describe, expect, test, afterEach } from "vitest";
import { render, screen, cleanup } from "@testing-library/react";
import Button from "./Button";

describe("Button props", () => {
  afterEach(cleanup);

  test("should render", () => {
    render(<Button>Hello</Button>);
    const button = screen.getByRole("button");
    expect(button.textContent).toBe("Hello");
  });

  test("should show loading", () => {
    render(<Button loading>Hello</Button>);
    const button = screen.getByRole("button");
    expect(button.querySelector("svg")).toBeDefined();
  });
});
