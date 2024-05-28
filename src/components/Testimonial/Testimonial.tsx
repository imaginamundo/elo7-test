import Image, { type ImageProps } from "next/image";
import clsx from "clsx";

import styles from "./Testimonial.module.css";

export type TestimonialProps = {
  image: ImageProps;
  title: string;
  subtitle: string;
  testimonial: string;
};

export default function Testimonial({
  image,
  title,
  subtitle,
  testimonial,
}: TestimonialProps) {
  return (
    <div className={styles.testimonial}>
      <div className={clsx("container", styles.testimonialWrapper)}>
        <figure>
          <Image {...image} className={styles.testimonialImage} />
        </figure>
        <div>
          <h2>{title}</h2>
          <h3 className={clsx("mb-m", styles.testimonialSubtitle)}>
            {subtitle}
          </h3>
          <p>{testimonial}</p>
        </div>
      </div>
    </div>
  );
}
