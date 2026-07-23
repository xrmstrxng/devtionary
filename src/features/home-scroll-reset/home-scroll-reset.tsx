"use client";

import { useLayoutEffect } from "react";
import type { Locale } from "@/i18n/config";

export function HomeScrollReset({ locale }: { locale: Locale }) {
  useLayoutEffect(() => {
    if (window.location.hash) {
      const target = document.querySelector(window.location.hash);
      target?.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }
    const root = document.documentElement;
    const previousBehavior = root.style.scrollBehavior;
    root.style.scrollBehavior = "auto";
    window.scrollTo({ left: 0, top: 0 });
    root.style.scrollBehavior = previousBehavior;
  }, [locale]);

  return null;
}
