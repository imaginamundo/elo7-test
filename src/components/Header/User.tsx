import { ShoppingCart, CircleUser } from "lucide-react";
import Link from "next/link";
import Button from "@/components/+Button/Button";

import styles from "./User.module.scss";

export default function Use() {
  return (
    <div className={styles.user}>
      <Button>
        <ShoppingCart />
      </Button>
      <Link href="/" className={styles.login}>
        <CircleUser /> Entre ou cadastre-se
      </Link>
    </div>
  );
}
