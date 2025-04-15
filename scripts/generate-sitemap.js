const fs = require("fs");
const path = require("path");

// Base URL of your website
const BASE_URL = "https://www.natanamfoundation.com";

// List of routes with their metadata
const routes = [
  {
    path: "/",
    changefreq: "daily",
    priority: "1.0",
    lastmod: new Date().toISOString().split("T")[0],
  },
  {
    path: "/about",
    changefreq: "weekly",
    priority: "0.9",
    lastmod: new Date().toISOString().split("T")[0],
  },
  {
    path: "/founder",
    changefreq: "monthly",
    priority: "0.9",
    lastmod: new Date().toISOString().split("T")[0],
  },
  {
    path: "/classes",
    changefreq: "weekly",
    priority: "0.8",
    lastmod: new Date().toISOString().split("T")[0],
  },
  {
    path: "/costumes",
    changefreq: "weekly",
    priority: "0.8",
    lastmod: new Date().toISOString().split("T")[0],
  },
  {
    path: "/jewellery",
    changefreq: "weekly",
    priority: "0.8",
    lastmod: new Date().toISOString().split("T")[0],
  },
  {
    path: "/examinations",
    changefreq: "monthly",
    priority: "0.7",
    lastmod: new Date().toISOString().split("T")[0],
  },
  {
    path: "/festivals",
    changefreq: "weekly",
    priority: "0.8",
    lastmod: new Date().toISOString().split("T")[0],
  },
  {
    path: "/events",
    changefreq: "weekly",
    priority: "0.8",
    lastmod: new Date().toISOString().split("T")[0],
  },
  {
    path: "/gallery",
    changefreq: "weekly",
    priority: "0.8",
    lastmod: new Date().toISOString().split("T")[0],
  },
  {
    path: "/upcomings",
    changefreq: "daily",
    priority: "0.9",
    lastmod: new Date().toISOString().split("T")[0],
  },
  {
    path: "/contact",
    changefreq: "monthly",
    priority: "0.7",
    lastmod: new Date().toISOString().split("T")[0],
  },
];

// Generate sitemap XML content
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
  ${routes
    .map(
      (route) => `
  <url>
    <loc>${BASE_URL}${route.path}</loc>
    <lastmod>${route.lastmod}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
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
