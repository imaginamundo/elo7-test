import { describe, expect, test } from "vitest";
import { render } from "@testing-library/react";
import ImageSpacer, { type ImageSpacerProps } from "./ImageSpacer";

const testImageSpacerProps: ImageSpacerProps = {
  background: "tomato",
};

describe("ImageSpacer", () => {
  test("should render", () => {
    const { container } = render(<ImageSpacer {...testImageSpacerProps} />);
    const div = container.querySelector("div");
    expect(div?.style).toHaveProperty("background", "tomato");
  });
});
