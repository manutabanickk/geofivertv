"use client";
export default function NotFound() {
  return (
    <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", background: "var(--background)" }}>
      <div className="glass-card" style={{ textAlign: "center", maxWidth: 400 }}>
        <svg width="64" height="64" fill="none" viewBox="0 0 24 24" style={{ margin: "0 auto 1rem" }}>
          <circle cx="12" cy="12" r="10" fill="#38bdf8" fillOpacity="0.15" />
          <path d="M9.17 9.17a3 3 0 0 1 5.66 0m-7.07 5.66a7 7 0 0 1 8.48 0M9 10h.01M15 10h.01" stroke="#10b981" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
        <h1 className="title-main" style={{ fontSize: "2.5rem", margin: "1rem 0 0.5rem" }}>404</h1>
        <div className="subtitle" style={{ marginBottom: 24 }}>Página no encontrada</div>
        <button className="super-btn" onClick={() => window.location.href = "/"}>Volver al inicio</button>
      </div>
    </div>
  );
}
