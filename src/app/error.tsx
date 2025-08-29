"use client";
import Image from "next/image";

export default function Error({ statusCode, message }: { statusCode?: number; message?: string }) {
  const code = statusCode || 500;
  const msg = message || (code === 404 ? "Página no encontrada" : code === 403 ? "Acceso denegado" : "Ocurrió un error inesperado");
  return (
    <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", background: "var(--background)" }}>
      <div className="glass-card" style={{ textAlign: "center", maxWidth: 400 }}>
        <div style={{
          background: "#181f2a",
          borderRadius: "50%",
          width: 80,
          height: 80,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 2px 12px #10b98155",
          margin: "0 auto"
        }}>
          <Image src="/icons/GEOFIBERLOGO.png" alt="Error" width={64} height={64} style={{ borderRadius: "50%", objectFit: "contain", background: "transparent" }} />
        </div>
        <h1 className="title-main" style={{ fontSize: "2.5rem", margin: "1rem 0 0.5rem" }}>{code}</h1>
        <div className="subtitle" style={{ marginBottom: 24 }}>{msg}</div>
        <button className="super-btn" onClick={() => window.location.href = "/"}>Volver al inicio</button>
      </div>
    </div>
  );
}
