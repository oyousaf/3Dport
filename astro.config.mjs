// @ts-check
import { defineConfig, envField, fontProviders } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import vercel from "@astrojs/vercel";


export default defineConfig({
  site: "https://oyousaf.dev",
  trailingSlash: "never",
  build: { format: "file" },
  // Pages stay static; only /api/contact runs on demand (a Vercel function).
  adapter: vercel(),
  integrations: [sitemap({ filter: (page) => !page.includes("/api/") })],
  env: {
    schema: {
      RESEND_API_KEY: envField.string({ context: "server", access: "secret", optional: true }),
      CONTACT_TO: envField.string({ context: "server", access: "secret", default: "hello@oyousaf.dev" }),
      CONTACT_FROM: envField.string({
        context: "server",
        access: "secret",
        default: "oyousaf.dev <form@oyousaf.dev>",
      }),
    },
  },
  vite: { plugins: [tailwindcss()] },
  fonts: [
    {
      provider: fontProviders.fontsource(),
      name: "Funnel Display",
      cssVariable: "--font-funnel-display",
      weights: ["300 800"],
      styles: ["normal"],
      subsets: ["latin"],
      fallbacks: ["sans-serif"],
    },
  ],
});
