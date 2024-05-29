import { ShoppingCart, CircleUser } from "lucide-react";
import Button from "@/components/+Button/Button";

import styles from "./User.module.scss";

export default function Use() {
  return (
    <div className={styles.user}>
      <Button variant="subtle">
        <ShoppingCart />
      </Button>
      <Button className={styles.login} variant="subtle">
        <CircleUser />{" "}
        <span className={styles.loginText}>Entre ou cadastre-se</span>
      </Button>
    </div>
  );
}
