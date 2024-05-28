import { cva, type VariantProps } from "class-variance-authority";
import { ChevronDown } from "lucide-react";
import styles from "./Select.module.scss";
import clsx from "clsx";

const selectVariants = cva(styles.select, {
  variants: {
    variant: {
      default: styles.selectDefault,
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

export type SelectProps = {
  children: React.ReactNode;
} & React.SelectHTMLAttributes<HTMLSelectElement> &
  VariantProps<typeof selectVariants>;

export default function Input({
  variant,
  className,
  children,
  ...props
}: SelectProps) {
  return (
    <select className={clsx(selectVariants({ className }))} {...props}>
      {children}
    </select>
  );
}
