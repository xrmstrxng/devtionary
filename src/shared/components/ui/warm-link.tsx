"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export function WarmLink({
  children,
  className,
  href,
}: {
  children: React.ReactNode;
  className?: string;
  href: string;
}) {
  const router = useRouter();
  const warmRoute = () => router.prefetch(href);

  return (
    <Link
      className={className}
      href={href}
      onFocus={warmRoute}
      onMouseEnter={warmRoute}
      prefetch
    >
      {children}
    </Link>
  );
}
