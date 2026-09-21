import { useRef } from "react";

export default function Row({ id, title, items }) {
  const trackRef = useRef(null);

  const scrollBy = (dir) => {
    if (trackRef.current) {
      trackRef.current.scrollBy({ left: dir * 600, behavior: "smooth" });
    }
  };

  return (
    <section id={id} style={{ padding: "28px 48px", position: "relative" }}>
      <h2
        style={{
          fontFamily: "var(--display-font)",
          fontSize: 26,
          letterSpacing: 0.5,
          marginBottom: 14,
          borderLeft: "4px solid var(--accent)",
          paddingLeft: 12,
        }}
      >
        {title}
      </h2>

      <button
        onClick={() => scrollBy(-1)}
        aria-label={`Scroll ${title} left`}
        style={rowNavStyle("left")}
      >
        &#8249;
      </button>

      <div
        ref={trackRef}
        style={{
          display: "flex",
          gap: 14,
          overflowX: "auto",
          scrollSnapType: "x mandatory",
          paddingBottom: 8,
        }}
      >
        {items.map((anime) => (
          <article
            key={anime.id}
            tabIndex={0}
            style={{
              flex: "0 0 auto",
              width: 200,
              scrollSnapAlign: "start",
              borderRadius: 6,
              overflow: "hidden",
              background: "var(--surface)",
              transition: "transform 0.25s ease, box-shadow 0.25s ease",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.06)";
              e.currentTarget.style.boxShadow = "0 12px 28px var(--accent-glow)";
              e.currentTarget.style.zIndex = 5;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow = "none";
              e.currentTarget.style.zIndex = 1;
            }}
          >
            <img
              src={anime.image}
              alt={anime.title}
              style={{ width: "100%", height: 260, objectFit: "cover", display: "block" }}
              loading="lazy"
            />
            <div style={{ padding: "10px 12px 14px" }}>
              <div style={{ fontSize: 14, fontWeight: 700, marginBottom: 4 }}>{anime.title}</div>
              <div style={{ fontSize: 12, color: "var(--text-muted)", display: "flex", justifyContent: "space-between" }}>
                <span>{anime.genre}</span>
                <span style={{ color: "var(--ember)" }}>&#9733; {anime.rating}</span>
              </div>
            </div>
          </article>
        ))}
      </div>

      <button
        onClick={() => scrollBy(1)}
        aria-label={`Scroll ${title} right`}
        style={rowNavStyle("right")}
      >
        &#8250;
      </button>
    </section>
  );
}

function rowNavStyle(side) {
  return {
    position: "absolute",
    top: "58%",
    [side]: 12,
    transform: "translateY(-50%)",
    background: "rgba(11,11,16,0.75)",
    color: "var(--text)",
    border: "none",
    width: 36,
    height: 36,
    borderRadius: "50%",
    fontSize: 18,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 6,
  };
}
