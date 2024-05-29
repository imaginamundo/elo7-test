import { describe, expect, test, afterEach } from "vitest";
import { render, screen, cleanup } from "@testing-library/react";
import Footer from "./Footer";

describe("Footer", () => {
  afterEach(cleanup);

  test("should render", () => {
    render(<Footer />);

    const nav = screen.getByRole("navigation");
    expect(nav.childNodes.length).toBe(3);
  });
});
