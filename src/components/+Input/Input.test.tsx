import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import Input from "./Input";

describe("Input props", () => {
  test("should render", () => {
    render(<Input placeholder="Hello" name="input-test" />);
    const input = screen.getByRole("textbox");
    expect(input).toBeTruthy();
    expect(input.getAttribute("placeholder")).toBe("Hello");
  });
});
