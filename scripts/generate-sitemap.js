const fs = require("fs");
const path = require("path");

// Base URL of your website
const BASE_URL = "https://natanam.org";

// List of routes in your application
const routes = [
  "/",
  "/about",
  "/founder",
  "/classes",
  "/costumes",
  "/jewellery",
  "/examinations",
  "/festivals",
  "/events",
  "/gallery",
  "/upcomings",
  "/contact",
];

// Generate sitemap XML content
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${routes
    .map(
      (route) => `
  <url>
    <loc>${BASE_URL}${route}</loc>
    <changefreq>weekly</changefreq>
    <priority>${route === "/" ? "1.0" : "0.8"}</priority>
  </url>`
    )
    .join("")}
</urlset>`;

// Write sitemap to public directory
const publicDir = path.join(__dirname, "../public");
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

fs.writeFileSync(path.join(publicDir, "sitemap.xml"), sitemap);
console.log("Sitemap generated successfully!");
