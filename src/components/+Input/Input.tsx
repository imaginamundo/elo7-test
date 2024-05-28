import { cva, type VariantProps } from "class-variance-authority";

import styles from "./Input.module.scss";
import clsx from "clsx";

const inputVariants = cva(styles.input, {
  variants: {
    variant: {
      default: styles.inputDefault,
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

export type InputProps = React.InputHTMLAttributes<HTMLInputElement> &
  VariantProps<typeof inputVariants>;

export default function Input({ variant, className, ...props }: InputProps) {
  return <input className={clsx(inputVariants({ className }))} {...props} />;
}
