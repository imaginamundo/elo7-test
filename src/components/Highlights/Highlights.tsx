import Image, { type ImageProps } from "next/image";
import Link from "next/link";
import ArrowRight from "@/icons/arrow-right.svg";
import clsx from "clsx";

import styles from "./Highlights.module.scss";

export type HighlightProps = {
  highlights: {
    image: ImageProps;
    title: string;
    description: string;
    callToAction?: {
      text: string;
      href: string;
    };
  }[];
};

export default function Highlights({ highlights }: HighlightProps) {
  return (
    <div className={styles.highlights}>
      <div className={clsx("container", styles.highlightsWrapper)}>
        {highlights.map((highlight) => {
          return (
            <div
              key={`highlight-${highlight.title}`}
              className={clsx("text-center", styles.highlight)}
            >
              <figure className={styles.highlightImageBackground}>
                <Image {...highlight.image} className={styles.highlightImage} />
              </figure>
              <h2>{highlight.title}</h2>
              <p>{highlight.description}</p>
              {!!highlight.callToAction && (
                <Link href={highlight.callToAction.href}>
                  {highlight.callToAction.text}
                  <ArrowRight />
                </Link>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
