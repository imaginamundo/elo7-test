import { Metadata } from "next";
import Hero, { type HeroProps } from "@/components/Hero/Hero";
import Testimonial, {
  type TestimonialProps,
} from "@/components/Testimonial/Testimonial";
import Slider, { type SliderProps } from "@/components/Slider/Slider";
import Highlights, {
  type HighlightProps,
} from "@/components/Highlights/Highlights";
import ImageSpacer, {
  type ImageSpacerProps,
} from "@/components/ImageSpacer/ImageSpacer";
import Jobs from "@/components/Jobs/Jobs";

import styles from "./page.module.scss";

export default function Home() {
  return (
    <main>
      <article className={styles.gaps}>
        <Hero {...heroProps} />
        <Testimonial {...testimonialProps} />
        <Slider {...sliderProps} />
        <Highlights {...highlightProps} />
        <ImageSpacer {...imageSpacerProps} />
        <Jobs />
      </article>
    </main>
  );
}

export const metadata: Metadata = {
  title: "elo7 · Trabalhe no elo7",
  description: "...",
};

const heroProps: HeroProps = {
  title: "Trabalhe no elo7",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur et viverra orci. Praesent consequat dolor tellus, eget viverra risus hendrerit non. Sed rutrum condimentum maximus. Donec pellentesque libero eu eros sagittis.",
  callToAction: "Vagas em aberto",
  callToActionHref: "#vagas",
};

const testimonialProps: TestimonialProps = {
  image: {
    src: "/elo7-logo.svg",
    width: 100,
    height: 100,
    alt: "Artista mulher trabalhando em oficina em uma mesa de madeira",
  },
  title: "Palavra da vendedora",
  subtitle: "Sed rutrum condimentum",
  testimonial:
    "Donec in vestibulum elit. Aliquam finibus facilisis elit, sit amet malesuada nibh tempor sed. Aliquam consequat ultrices fringilla. Sed id quam sollicitudin mi ultricies feugiat a vel velit. Pellentesque finibus vel tortor sed hendrerit. Vestibulum eu sem sapien. Nullam mollis, leo ut finibus euismod, arcu eros aliquam augue, in congue neque nulla vehicula purus.",
};

const sliderProps: SliderProps = {
  title: "Conheça nosso time fora de série",
  images: [
    {
      src: "/elo7-logo.svg",
      width: 100,
      height: 100,
      alt: "Artista mulher trabalhando em oficina em uma mesa de madeira",
    },
    {
      src: "/elo7-logo.svg",
      width: 100,
      height: 100,
      alt: "Artista mulher trabalhando em oficina em uma mesa de madeira",
    },
    {
      src: "/elo7-logo.svg",
      width: 100,
      height: 100,
      alt: "Artista mulher trabalhando em oficina em uma mesa de madeira",
    },
    {
      src: "/elo7-logo.svg",
      width: 100,
      height: 100,
      alt: "Artista mulher trabalhando em oficina em uma mesa de madeira",
    },
    {
      src: "/elo7-logo.svg",
      width: 100,
      height: 100,
      alt: "Artista mulher trabalhando em oficina em uma mesa de madeira",
    },
    {
      src: "/elo7-logo.svg",
      width: 100,
      height: 100,
      alt: "Artista mulher trabalhando em oficina em uma mesa de madeira",
    },
  ],
};

const highlightProps: HighlightProps = {
  highlights: [
    {
      image: {
        src: "/elo7-logo.svg",
        width: 100,
        height: 100,
        alt: "Artista mulher trabalhando em oficina em uma mesa de madeira",
      },
      title: "Resultados",
      description: "Representação de uma foto",
    },
    {
      image: {
        src: "/elo7-logo.svg",
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
        src: "/elo7-logo.svg",
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

const imageSpacerProps: ImageSpacerProps = {
  background: 'url("/elo7-logo.svg")',
};
