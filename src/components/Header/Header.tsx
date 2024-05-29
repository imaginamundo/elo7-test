import Link from "next/link";
import Image from "next/image";
import Search from "./Search";
import User from "./User";
import clsx from "clsx";

import styles from "./Header.module.scss";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={clsx("container", styles.headerWrapper)}>
        <h1 className={styles.logo}>
          <Link href="/">
            <Image
              src="/elo7-logo.svg"
              width={72}
              height={29}
              alt="elo7 | Produtos Especiais e Personalizados"
              title="elo7 · Ir para página inicial"
            />
          </Link>
        </h1>
        <Search />
        <User />
      </div>
    </header>
  );
}
