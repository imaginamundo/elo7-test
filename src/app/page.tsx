import Link from "next/link";
import { Link as LinkIcon } from "lucide-react";

export default function Home() {
  return (
    <main>
      <article className="container mt-m">
        <h1>Teste para vaga elo7</h1>
        <p>
          <Link href="/vagas" className="link-icon">
            <LinkIcon />
            Ver página de empregos do teste
          </Link>
          .
        </p>
        <p>Tecnologias utilizadas:</p>
        <ul>
          <li>React;</li>
          <li>Next.js;</li>
          <li>Testes:</li>
          <ul>
            <li>Vitest;</li>
            <li>Playwright;</li>
          </ul>
          <li>Estilo</li>
          <ul>
            <li>SCSS;</li>
            <li>CSS Modules;</li>
          </ul>
          <li>Lucide Icons</li>
        </ul>
      </article>
    </main>
  );
}
