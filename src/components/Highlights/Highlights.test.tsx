import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import Highlights, { type HighlightsProps } from "./Highlights";

const testHighlightsProps: HighlightsProps = {
  highlights: [
    {
      image: {
        src: "/page-jobs/highlights/image.png",
        width: 100,
        height: 100,
        alt: "Artista mulher trabalhando em oficina em uma mesa de madeira",
      },
      title: "Resultados",
      description:
        "Donec in vestibulum elit. Aliquam finibus facilisis elit, sit amet malesuada nibh tempor sed. Aliquam consequat ultrices fringilla.",
    },
    {
      image: {
        src: "/page-jobs/highlights/thumbsup.png",
        width: 100,
        height: 100,
        alt: "Mão com o polegar para cima fazendo um jóia",
      },
      title: "Qualidade de vida",
      description:
        "Donec in vestibulum elit. Aliquam finibus facilisis elit, sit amet malesuada nibh tempor sed. Aliquam consequat ultrices fringilla.",
      callToAction: {
        text: "dignissim quis",
        href: "#",
      },
    },
    {
      image: {
        src: "/page-jobs/highlights/safe.png",
        width: 100,
        height: 100,
        alt: "Cofre vermelho",
      },
      title: "Nossos valores",
      description:
        "Donec in vestibulum elit. Aliquam finibus facilisis elit, sit amet malesuada nibh tempor sed. Aliquam consequat ultrices fringilla.",
    },
  ],
};

describe("Highlights", () => {
  test("should render", () => {
    render(<Highlights {...testHighlightsProps} />);

    const [firstTitle, secondTitle, thirdTitle] = screen.getAllByRole(
      "heading",
      { level: 2 },
    );

    expect(firstTitle.textContent).toBe(
      testHighlightsProps.highlights[0].title,
    );
    expect(secondTitle.textContent).toBe(
      testHighlightsProps.highlights[1].title,
    );
    expect(thirdTitle.textContent).toBe(
      testHighlightsProps.highlights[2].title,
    );
  });
});
