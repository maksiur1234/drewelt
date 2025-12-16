"use client"

import Link from "next/link"

export default function NotFound() {
  return (
    <div style={{ textAlign: "center", padding: "100px 20px" }}>
      <h1>404</h1>
      <p>Nie znaleziono strony, której szukasz.</p>
      <h2>Strona nie została zbudowana</h2>
      <Link href="/" style={{ color: "#1fa11b", textDecoration: "underline" }}>
        Wróć do strony głównej
      </Link>
    </div>
  );
}
