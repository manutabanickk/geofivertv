"use client";
import { useEffect } from "react";

export default function ServiceWorker() {
  useEffect(() => {
    if (typeof window !== "undefined" && "serviceWorker" in navigator) {
      window.addEventListener("load", () => {
        navigator.serviceWorker
          .register("/sw.js")
          .catch((err) => console.error("SW registration failed:", err));
      });
    }
  }, []);
  return null;
}
