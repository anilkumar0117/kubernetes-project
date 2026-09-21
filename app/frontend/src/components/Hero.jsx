export default function Hero({ anime }) {
  if (!anime) return null;

  return (
    <header
      id="home"
      style={{
        position: "relative",
        height: "78vh",
        minHeight: 460,
        display: "flex",
        alignItems: "flex-end",
        backgroundImage: `linear-gradient(180deg, rgba(11,11,16,0.15) 0%, rgba(11,11,16,0.55) 55%, var(--bg) 100%), url(${anime.image})`,
        backgroundSize: "cover",
        backgroundPosition: "center 20%",
      }}
    >
      <div style={{ padding: "0 48px 64px", maxWidth: 640 }}>
        <div
          style={{
            fontSize: 13,
            letterSpacing: 3,
            color: "var(--ember)",
            fontWeight: 600,
            marginBottom: 12,
          }}
        >
          FEATURED SERIES
        </div>
        <h1
          style={{
            fontFamily: "var(--display-font)",
            fontSize: "clamp(40px, 7vw, 84px)",
            lineHeight: 0.95,
            margin: 0,
            letterSpacing: 1,
          }}
        >
          {anime.title}
        </h1>
        <div style={{ display: "flex", gap: 16, alignItems: "center", margin: "16px 0", color: "var(--text-muted)", fontSize: 14 }}>
          <span style={{ color: "var(--ember)", fontWeight: 700 }}>&#9733; {anime.rating}</span>
          <span>{anime.year}</span>
          <span>{anime.genre}</span>
        </div>
        <p style={{ color: "var(--text-muted)", fontSize: 16, lineHeight: 1.6, marginBottom: 28 }}>
          {anime.description}
        </p>
        <div style={{ display: "flex", gap: 14 }}>
          <button
            style={{
              background: "var(--accent)",
              color: "#fff",
              border: "none",
              padding: "13px 30px",
              borderRadius: 4,
              fontSize: 15,
              fontWeight: 700,
              letterSpacing: 0.5,
            }}
          >
            &#9654; Play
          </button>
          <button
            style={{
              background: "rgba(255,255,255,0.12)",
              color: "var(--text)",
              border: "1px solid rgba(255,255,255,0.2)",
              padding: "13px 26px",
              borderRadius: 4,
              fontSize: 15,
              fontWeight: 600,
            }}
          >
            More Info
          </button>
        </div>
      </div>
    </header>
  );
}
