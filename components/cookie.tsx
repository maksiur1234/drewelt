"use client";

import React, { useEffect, useState } from "react";
import { Button } from "@heroui/button";

export default function CookieBanner() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem("cookieAccepted");
    if (!accepted) {
      setShow(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookieAccepted", "true");
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="fixed bottom-0 left-0 w-full bg-gray-900 text-white p-4 z-50 flex flex-col md:flex-row items-center justify-between gap-2">
      <p className="text-sm md:text-base">
        Ta strona używa plików cookies w celu zapewnienia najlepszej jakości usług.
        Korzystając ze strony, wyrażasz zgodę na używanie cookies.
      </p>
      <Button color="success" size="sm" onPress={handleAccept}>
        Akceptuję
      </Button>
    </div>
  );
}
