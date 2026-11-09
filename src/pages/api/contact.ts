import type { APIRoute } from "astro";
import { CONTACT_FROM, CONTACT_TO, RESEND_API_KEY } from "astro:env/server";

// Runs as a Vercel function; everything else on the site is static.
export const prerender = false;

const MAX = { name: 100, email: 200, message: 500 };
const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
// Submissions faster than this after the page loaded are almost always bots.
const MIN_FILL_MS = 2500;

const json = (status: number, body: Record<string, unknown>) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json", "Cache-Control": "no-store" },
  });

const clean = (v: unknown, max: number) =>
  typeof v === "string" ? v.replace(/\r\n?/g, "\n").trim().slice(0, max) : "";

export const POST: APIRoute = async ({ request }) => {
  // Same-origin only: the form posts from this site, nothing else should.
  const origin = request.headers.get("origin");
  if (origin && origin !== new URL(request.url).origin) {
    return json(403, { ok: false, error: "Forbidden" });
  }

  let data: Record<string, unknown>;
  try {
    data = await request.json();
  } catch {
    return json(400, { ok: false, error: "Invalid request" });
  }

  // Honeypot and timing traps: pretend success so bots learn nothing.
  const startedAt = Number(data.startedAt);
  if (clean(data.company, 100) || !startedAt || Date.now() - startedAt < MIN_FILL_MS) {
    return json(200, { ok: true });
  }

  const name = clean(data.name, MAX.name);
  const email = clean(data.email, MAX.email);
  const message = clean(data.message, MAX.message);
  if (!name || !EMAIL.test(email) || !message) {
    return json(422, { ok: false, error: "Please fill in your name, a valid email and a message." });
  }

  if (!RESEND_API_KEY) {
    if (import.meta.env.DEV) {
      console.info("[contact] preview mode, not sent:", { name, email, message });
      return json(200, { ok: true, preview: true });
    }
    console.error("[contact] RESEND_API_KEY is not set");
    return json(503, { ok: false, error: "The contact form is unavailable right now." });
  }

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${RESEND_API_KEY}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from: CONTACT_FROM,
      to: [CONTACT_TO],
      reply_to: email,
      subject: `New enquiry from ${name.replace(/[\r\n]+/g, " ")}`,
      text: `${message}\n\n— ${name} <${email}>\nSent from the contact form on oyousaf.dev`,
    }),
  });

  if (!res.ok) {
    console.error("[contact] Resend error", res.status, await res.text());
    return json(502, { ok: false, error: "Your message couldn't be sent." });
  }

  return json(200, { ok: true });
};

export const ALL: APIRoute = () => json(405, { ok: false, error: "Method not allowed" });
