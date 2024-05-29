import { describe, expect, test, afterEach } from "vitest";
import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import Search from "./Search";

describe("Search", () => {
  afterEach(cleanup);

  test("should render", () => {
    render(<Search />);

    const kindSelect: HTMLSelectElement = screen.getByRole("combobox");
    const searchInput = screen.getByRole("searchbox");
    expect(kindSelect.value).toBe("produtos");
    expect(searchInput.getAttribute("placeholder")).toBe(
      "Procure por produtos",
    );
  });

  test("should update placeholder when changing kind", () => {
    render(<Search />);

    const kindSelect: HTMLSelectElement = screen.getByRole("combobox");
    const searchInput = screen.getByRole("searchbox");

    fireEvent.change(kindSelect, { target: { value: "materiais" } });
    expect(kindSelect.value).toBe("materiais");
    expect(searchInput.getAttribute("placeholder")).toBe(
      "Procure por materiais",
    );
  });
});
