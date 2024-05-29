import { describe, expect, test, afterEach } from "vitest";
import { render, screen, cleanup } from "@testing-library/react";
import User from "./User";

describe("User", () => {
  test("should render", () => {
    render(<User />);

    const [shoppingCart, login] = screen.getAllByRole("button");

    expect(login.textContent).toBe(" Entre ou cadastre-se");
  });
});
