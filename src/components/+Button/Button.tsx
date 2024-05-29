import { cva, type VariantProps } from "class-variance-authority";

import styles from "./Button.module.scss";
import clsx from "clsx";
import { LoaderCircle } from "lucide-react";

const buttonVariants = cva(styles.button, {
  variants: {
    variant: {
      default: styles.buttonDefault,
      loading: styles.buttonLoading,
      subtle: styles.buttonSubtle,
    },
    loading: {
      true: styles.loadingState,
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
  loading,
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      className={clsx(buttonVariants({ variant, loading, className }))}
    >
      {loading && <LoaderCircle className={styles.loader} />}
      <span className={styles.buttonContent}>{children}</span>
    </button>
  );
}
