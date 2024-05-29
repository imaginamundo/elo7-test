"use client";

import { useEffect } from "react";
import Button from "@/components/+Button/Button";
import { logError } from "@/utils/log";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    logError(error);
  }, [error]);

  return (
    <div className="container mt-xxxl mb-xxxl text-center">
      <h2>Algo errado aconteceu :(</h2>
      <Button onClick={() => reset()}>Tentar novamente</Button>
    </div>
  );
}
