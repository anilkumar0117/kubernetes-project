import { useEffect, useState } from "react";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Row from "./components/Row.jsx";

export default function App() {
  const [catalog, setCatalog] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("/api/catalog")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to load catalog");
        return res.json();
      })
      .then((data) => setCatalog(data))
      .catch((err) => setError(err.message));
  }, []);

  if (error) {
    return (
      <div style={{ padding: 80, textAlign: "center", color: "var(--text-muted)" }}>
        <h2 style={{ fontFamily: "var(--display-font)", color: "var(--accent)" }}>
          Couldn't reach the Aniflix backend
        </h2>
        <p>{error}. Make sure the backend service is running and reachable at /api.</p>
      </div>
    );
  }

  if (!catalog) {
    return (
      <div style={{ height: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <span style={{ fontFamily: "var(--display-font)", fontSize: 28, color: "var(--accent)" }}>
          Loading Aniflix&hellip;
        </span>
      </div>
    );
  }

  const featured = catalog.categories[0].items[1] || catalog.categories[0].items[0];

  return (
    <div>
      <Navbar />
      <Hero anime={featured} />
      <main style={{ marginTop: -60, position: "relative", zIndex: 2, paddingBottom: 60 }}>
        {catalog.categories.map((cat) => (
          <Row key={cat.id} id={cat.id} title={cat.title} items={cat.items} />
        ))}
      </main>
      <footer style={{ padding: "24px 48px", color: "var(--text-muted)", fontSize: 13, textAlign: "center" }}>
        Aniflix &mdash; a demo project for Docker + GitHub Actions + ECR + EC2 deployment.
      </footer>
    </div>
  );
}
