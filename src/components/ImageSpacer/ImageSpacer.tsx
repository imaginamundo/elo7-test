import clsx from "clsx";
import styles from "./ImageSpacer.module.scss";

export type ImageSpacerProps = {
  background: string;
  className?: string;
};

export default function ImageSpacer({
  background,
  className,
}: ImageSpacerProps) {
  return (
    <div
      className={clsx(className, styles.imageSpacer)}
      style={{
        background: background,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    />
  );
}
