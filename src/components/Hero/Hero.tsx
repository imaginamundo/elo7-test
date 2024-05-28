import Link from "next/link";
import styles from "@/components/Hero/Hero.module.scss";
import ArrowRight from "@/icons/arrow-right.svg";
import clsx from "clsx";

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
        }}
      >
        <div className="container">
          <h1 className={clsx("text-center", styles.title)}>{title}</h1>
        </div>
      </div>
      <div className={clsx("container", styles.heroDescription)}>
        <p>{description}</p>
        <hr />
        <div className="text-center">
          <Link href={callToActionHref} className={styles.callToAction}>
            {callToAction}
            <ArrowRight />
          </Link>
        </div>
      </div>
    </div>
  );
}
