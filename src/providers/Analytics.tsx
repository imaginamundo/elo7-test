"use client";

import { Suspense, useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { dataLayer } from "@/utils/analytics";

function AnalyticsEffect() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    dataLayer({
      event: "pageview",
      url: `${pathname}?${searchParams}`,
    });
  }, [pathname, searchParams]);

  return null;
}

export default function Analytics() {
  return (
    <Suspense>
      <AnalyticsEffect />
    </Suspense>
  );
}
