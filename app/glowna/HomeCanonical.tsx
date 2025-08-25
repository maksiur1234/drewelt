"use client";

import { usePathname } from "next/navigation";

export default function HomepageCanonical() {
  const pathname = usePathname();

  const isHomePage = pathname === "/";

    return (
    <>
        {isHomePage && (
        <link rel="canonical" href="https://drewelt.pl" />
        )}
    </>
    );
}