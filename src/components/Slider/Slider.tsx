import Image, { type ImageProps } from "next/image";

import styles from "./Slider.module.css";

export type SliderProps = {
  title: string;
  images: ImageProps[];
};

export default function Slider({ title, images }: SliderProps) {
  return (
    <div>
      <div className="container mb-l">
        <h2 className="text-center">{title}</h2>
      </div>
      <div className={styles.sliderImages}>
        {images.map((image) => (
          <Image
            {...image}
            key={`${title}-${image.src}`}
            className={styles.sliderImage}
          />
        ))}
      </div>
    </div>
  );
}
