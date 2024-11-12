const fs = require("fs");
const path = require("path");

const BASE_URL = "https://www.oyousaf.dev";

function generateSitemap() {
  const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
      <loc>${BASE_URL}/</loc>
      <changefreq>monthly</changefreq>
      <priority>1.0</priority>
    </url>
  </urlset>`;

  fs.writeFileSync(
    path.resolve(__dirname, "public", "sitemap.xml"),
    sitemapContent
  );
  console.log("✅ Sitemap generated");
}

function generateRobotsTxt() {
  const robotsContent = `User-agent: *
Allow: /
Sitemap: ${BASE_URL}/sitemap.xml`;

  fs.writeFileSync(
    path.resolve(__dirname, "public", "robots.txt"),
    robotsContent
  );
  console.log("✅ Robots.txt generated");
}

// Run both functions
generateSitemap();
generateRobotsTxt();
