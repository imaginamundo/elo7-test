import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import Testimonial, { type TestimonialProps } from "./Testimonial";

const testTestimonialProps: TestimonialProps = {
  image: {
    width: 50,
    height: 50,
    src: "/elo7logo.svg",
    alt: "Alt from image, yay",
  },
  title: "Words from seller",
  subtitle: "Hi, subtitle!",
  testimonial: "Lorem ipsum large text",
};

describe("Hero", () => {
  test("should render", () => {
    render(<Testimonial {...testTestimonialProps} />);

    const image = screen.getByAltText(testTestimonialProps.image.alt);
    expect(image.getAttribute("src")).toEqual(testTestimonialProps.image.src);

    expect(
      screen.getByRole("heading", {
        level: 2,
        name: testTestimonialProps.title,
      }),
    ).toBeDefined();

    expect(
      screen.getByRole("heading", {
        level: 3,
        name: testTestimonialProps.subtitle,
      }),
    ).toBeDefined();

    expect(screen.getByText(testTestimonialProps.testimonial)).toBeDefined();
  });
});
