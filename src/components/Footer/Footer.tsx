"use client";

import clsx from "clsx";
import Link from "next/link";
import { dataLayer, events } from "@/utils/analytics";

import Image from "next/image";

import styles from "./Footer.module.scss";

export default function Footer() {
  return (
    <footer className={clsx("container mt-xxxl mb-xxxl", styles.footer)}>
      <div className={styles.thirdParties}>
        {thirdParties.map((item, index) => {
          return (
            <div key={`third-party-${index}`} className={styles.thirdParty}>
              <Image {...item.image} className={styles.thirdPartyImage} />
              <p
                className={styles.thirdPartyText}
                style={{ color: item.accentColor }}
              >
                {item.text}
              </p>
            </div>
          );
        })}
      </div>
      <nav className={styles.footerNav}>
        {Object.entries(menu).map(([title, items]) => {
          return (
            <ul key={`menu-footer-${title}`} className={styles.footerNavList}>
              <li className={styles.footerNavTitle}>{title}</li>
              <ul className={styles.footerNavList}>
                {items.map((item) => {
                  return (
                    <li
                      key={`menu-footer-${title}-${item.label}`}
                      className={styles.footerNavItem}
                    >
                      <Link
                        href={item.href}
                        onClick={() =>
                          dataLayer({
                            event: events.nav,
                            location: "footer",
                            label: item.label,
                            target: item.href,
                          })
                        }
                      >
                        {item.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </ul>
          );
        })}
      </nav>
    </footer>
  );
}

const thirdParties = [
  {
    image: {
      src: "/layout/qrcode.svg",
      alt: "QR Code",
      width: 70,
      height: 70,
    },
    text: "Baixe o nosso app e aproveite as vantagens. Disponível para Android e IOS",
    accentColor: "#008b90",
  },
  {
    image: {
      src: "/layout/la-vem-bebe.svg",
      alt: "La vem bebê",
      width: 70,
      height: 70,
    },
    text: "Crie sua lista de Chá de Bebê Online de maneira prática, segura e grátis.",
    accentColor: "#c273a8",
    href: "#",
  },
  {
    image: {
      src: "/layout/wedy.svg",
      alt: "Wedy",
      width: 70,
      height: 70,
    },
    text: "Realize o seu casamento perfeito de forma fácil e rápida!",
    accentColor: "#86e",
    href: "#",
  },
];

const menu = {
  Institucional: [
    {
      label: "Quem somos",
      href: "#",
    },
    {
      label: "Carreira",
      href: "#",
    },
    {
      label: "Pessoas e lojas",
      href: "#",
    },
    {
      label: "Políticas Elo7",
      href: "#",
    },
  ],
  Dúvidas: [
    {
      label: "Como comprar",
      href: "#",
    },
    {
      label: "Compra segura e protegida",
      href: "#",
    },
    {
      label: "Trocas e devoluções",
      href: "#",
    },
    {
      label: "Central de atendimento",
      href: "#",
    },
  ],
  Informações: [
    {
      label: "Meios de pagamento",
      href: "#",
    },
    {
      label: "Como vender",
      href: "#",
    },
    {
      label: "Abra sua loja",
      href: "#",
    },
    {
      label: "Impacto social",
      href: "#",
    },
  ],
};
