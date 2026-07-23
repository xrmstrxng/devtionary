"use client";
import { useState } from "react";
export function CopyLinkButton({
  copy,
  copied,
}: {
  copy: string;
  copied: string;
}) {
  const [done, setDone] = useState(false);
  async function handle() {
    await navigator.clipboard.writeText(location.href);
    setDone(true);
    window.setTimeout(() => setDone(false), 1800);
  }
  return (
    <button className="button secondary" onClick={handle}>
      {done ? copied : copy}
    </button>
  );
}
