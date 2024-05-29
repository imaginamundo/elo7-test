"use client";

import Button from "@/components/+Button/Button";

export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html>
      <body>
        <div className="container mt-xxxl mb-xxxl text-center">
          <h2>Algo errado aconteceu :(</h2>
          <Button onClick={() => reset()}>Tentar novamente</Button>
        </div>
      </body>
    </html>
  );
}
