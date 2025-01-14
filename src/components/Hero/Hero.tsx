"use client";

import Link from "next/link";
import styles from "@/components/Hero/Hero.module.scss";
import ArrowRight from "@/icons/arrow-right.svg";
import clsx from "clsx";

import { dataLayer } from "@/utils/analytics";

export type HeroProps = {
  title: string;
  description: string;
  callToAction: string;
  callToActionHref: string;
  background?: string;
};

export default function Hero({
  title,
  description,
  callToAction,
  callToActionHref,
  background,
}: HeroProps) {
  return (
    <div className={styles.hero}>
      <div
        className={styles.heroWrapper}
        style={{
          background: background || "var(--primary)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container">
          <h1 className={clsx("text-center", styles.title)}>{title}</h1>
        </div>
      </div>
      <div className={clsx("container", styles.heroDescription)}>
        <p className="font-s-mobile">{description}</p>
        <hr />
        <div className="text-center">
          <Link
            href={callToActionHref}
            className={styles.callToAction}
            onClick={() =>
              dataLayer({
                event: "cta",
                target: callToActionHref,
                label: callToAction,
              })
            }
          >
            {callToAction}
            <ArrowRight />
          </Link>
        </div>
      </div>
    </div>
  );
}
