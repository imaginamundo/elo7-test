import styles from "./ImageSpacer.module.scss";

export type ImageSpacerProps = {
  background: string;
};

export default function ImageSpacer({ background }: ImageSpacerProps) {
  return (
    <div className={styles.imageSpacer} style={{ background: background }} />
  );
}
