import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import Hero, { type HeroProps } from "./Hero";

const testHeroProps: HeroProps = {
  title: "Hello, hero!",
  description: "Lorem ipsum description",
  callToAction: "Go to hero link!",
  callToActionHref: "/",
  background: "tomato",
};

describe("Hero", () => {
  test("should render", () => {
    render(<Hero {...testHeroProps} />);

    expect(
      screen.getByRole("heading", { level: 1, name: testHeroProps.title }),
    ).toBeDefined();

    expect(screen.getByText(testHeroProps.description)).toBeDefined();

    const callToAction = screen.getByText(testHeroProps.callToAction);
    expect(callToAction.getAttribute("href")).toEqual(
      testHeroProps.callToActionHref,
    );
  });
});
