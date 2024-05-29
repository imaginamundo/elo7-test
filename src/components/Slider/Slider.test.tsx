import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import Slider, { type SliderProps } from "./Slider";

const testSliderProps: SliderProps = {
  title: "Hello, world!",
  images: [
    {
      src: "/page-jobs/slider/1.png",
      width: 320,
      height: 183,
      title: "Mulher ruiva com os cotobelos sobre a mesa num escritório",
      alt: "Mulher ruiva com os cotobelos sobre a mesa num escritório",
    },
    {
      src: "/page-jobs/slider/2.png",
      width: 320,
      height: 183,
      title: "Homem de cabelos castanhos e barda utilizando um notebook",
      alt: "Homem de cabelos castanhos e barda utilizando um notebook",
    },
  ],
};

describe("Slider", () => {
  test("should render", () => {
    render(<Slider {...testSliderProps} />);

    expect(
      screen.getByRole("heading", {
        level: 2,
        name: testSliderProps.title,
      }),
    ).toBeTruthy();

    expect(screen.getAllByRole("img").length).toBe(2);
  });
});
