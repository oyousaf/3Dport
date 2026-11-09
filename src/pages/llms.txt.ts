import type { APIRoute } from "astro";
import { education, experiences, projects, site } from "../constants";

// A plain-text summary for AI answer engines (llmstxt.org convention).
export const GET: APIRoute = () => {
  const body = [
    `# ${site.name} (${site.handle}) — ${site.role}`,
    "",
    `> ${site.description}`,
    "",
    `- Website: ${site.url}`,
    `- GitHub: ${site.github}`,
    `- LinkedIn: ${site.linkedin}`,
    `- Contact: ${site.email}`,
    "",
    "## Experience",
    "",
    ...experiences.map((e) => `- ${e.role}, ${e.name} (${e.period})`),
    `- ${education.name} (${education.year})`,
    "",
    "## Projects",
    "",
    ...projects.map(
      (p) => `- [${p.title}](${site.url}/work/${p.slug}): ${p.desc} Stack: ${p.tags.join(", ")}. Live: ${p.href}`,
    ),
    "",
  ].join("\n");

  return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
};
