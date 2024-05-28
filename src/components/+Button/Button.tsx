import { cva, type VariantProps } from "class-variance-authority";

import styles from "./Button.module.scss";
import clsx from "clsx";

const buttonVariants = cva(styles.button, {
  variants: {
    variant: {
      default: styles.buttonDefault,
      loading: styles.buttonLoading,
      subtle: styles.buttonSubtle,
    },
    loading: {
      true: styles.loading,
    },
  },
  defaultVariants: {
    variant: "default",
    loading: false,
  },
});

export type ButtonProps = {
  children: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants>;

export default function Button({
  children,
  className,
  variant,
  ...props
}: ButtonProps) {
  return (
    <button {...props} className={clsx(buttonVariants({ variant, className }))}>
      {children}
    </button>
  );
}
