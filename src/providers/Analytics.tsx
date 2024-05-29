"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { dataLayer } from "@/utils/analytics";

export default function Analytics() {
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
