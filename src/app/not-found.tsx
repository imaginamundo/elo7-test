import Link from "next/link";
import type { Metadata } from "next";

export default function NotFound() {
  return (
    <div className="container mt-xxxl mb-xxxl text-center">
      <h2>Página não encontrada :(</h2>
      <Link href="/">Ir para página inicial</Link>
    </div>
  );
}

export const metadata: Metadata = {
  title: "Página não encontrada",
};
