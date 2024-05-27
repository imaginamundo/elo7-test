import { cva, type VariantProps } from "class-variance-authority";

import styles from "./Input.module.scss";

const inputVariants = cva(styles.input, {
  variants: {
    variant: {
      default: styles.inputDefault,
    },
  },
});

export type InputProps = React.InputHTMLAttributes<HTMLInputElement> &
  VariantProps<typeof inputVariants>;

export default function Input(props: InputProps) {
  return <input {...props} />;
}
