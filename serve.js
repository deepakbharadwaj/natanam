const express = require("express");
const path = require("path");
const compression = require("compression");

const app = express();
const PORT = process.env.PORT || 5001;

// Enable compression
app.use(compression());

// Serve static files from the build directory
app.use(express.static(path.join(__dirname, "build")));

// Add caching headers
app.use((req, res, next) => {
  // Cache static assets for 1 week
  if (req.url.match(/\.(css|js|jpg|jpeg|png|gif|webp|ico|svg|woff|woff2|ttf|eot)$/)) {
    res.setHeader("Cache-Control", "public, max-age=604800");
  }
  next();
});

// Handle all other requests by serving index.html
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
  console.log(`Serving production build from 'build' directory`);
});
