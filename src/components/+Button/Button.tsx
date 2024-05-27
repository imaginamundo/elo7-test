import { cva, type VariantProps } from "class-variance-authority";

import styles from "./Button.module.scss";

const buttonVariants = cva(styles.button, {
  variants: {
    variant: {
      default: styles.buttonDefault,
      link: styles.buttonLink,
      subtle: styles.buttonSubtle,
    },
  },
});

export type ButtonProps = {
  children: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants>;

export default function Button({ children, ...props }: ButtonProps) {
  return <button {...props}>{children}</button>;
}
