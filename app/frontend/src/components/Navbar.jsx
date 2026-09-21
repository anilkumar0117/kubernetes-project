import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "18px 48px",
        background: scrolled ? "rgba(11,11,16,0.92)" : "linear-gradient(180deg, rgba(11,11,16,0.85), transparent)",
        backdropFilter: scrolled ? "blur(6px)" : "none",
        transition: "background 0.3s ease",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 40 }}>
        <div
          style={{
            fontFamily: "var(--display-font)",
            fontSize: 30,
            letterSpacing: 1,
            color: "var(--accent)",
            position: "relative",
            display: "inline-block",
          }}
        >
          ANI
          <span style={{ color: "var(--text)" }}>FLIX</span>
          <span
            aria-hidden="true"
            style={{
              position: "absolute",
              left: -4,
              right: -4,
              top: "52%",
              height: 3,
              background: "var(--ember)",
              transform: "rotate(-4deg)",
            }}
          />
        </div>
        <div style={{ display: "flex", gap: 24, fontSize: 14, color: "var(--text-muted)" }}>
          <a href="#home" style={{ color: "var(--text)" }}>Home</a>
          <a href="#trending">Trending</a>
          <a href="#action">Action</a>
          <a href="#fantasy">Fantasy</a>
        </div>
      </div>
      <div style={{ fontSize: 13, color: "var(--text-muted)" }}>My DevOps Docker Project</div>
    </nav>
  );
}
