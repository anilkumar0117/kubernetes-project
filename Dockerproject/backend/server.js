const express = require("express");
const cors = require("cors");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Serve the built React app (copied into ./public during the Docker build)
app.use(express.static(path.join(__dirname, "public")));

// Load anime catalog from local JSON file (acts as our "database")
function loadCatalog() {
  const filePath = path.join(__dirname, "data", "anime.json");
  const raw = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(raw);
}

// Health check - useful for Docker/EC2 monitoring
app.get("/health", (req, res) => {
  res.json({ status: "ok", service: "aniflix-backend" });
});

// Full catalog, grouped by category (drives the homepage rows)
app.get("/api/catalog", (req, res) => {
  try {
    const catalog = loadCatalog();
    res.json(catalog);
  } catch (err) {
    res.status(500).json({ error: "Failed to load catalog" });
  }
});

// Flat list of all anime (useful for search)
app.get("/api/anime", (req, res) => {
  try {
    const catalog = loadCatalog();
    const all = catalog.categories.flatMap((c) => c.items);
    res.json(all);
  } catch (err) {
    res.status(500).json({ error: "Failed to load anime" });
  }
});

// Single anime by id (for a detail view)
app.get("/api/anime/:id", (req, res) => {
  try {
    const catalog = loadCatalog();
    const all = catalog.categories.flatMap((c) => c.items);
    const anime = all.find((a) => a.id === parseInt(req.params.id, 10));
    if (!anime) return res.status(404).json({ error: "Anime not found" });
    res.json(anime);
  } catch (err) {
    res.status(500).json({ error: "Failed to load anime" });
  }
});

// Any non-API route falls through to the React app (client-side routing)
app.get(/^(?!\/api|\/health).*/, (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Aniflix running on port ${PORT}`);
});
