// SPDX-License-Identifier: AGPL-3.0-or-later
import { defineConfig } from "vitepress";

export default defineConfig({
  lang: "en",
  title: "Flâneur",
  description: "Wander your favorite video platforms from one fast, open app.",
  cleanUrls: true,
  lastUpdated: false,
  head: [
    ["link", { rel: "icon", type: "image/svg+xml", href: "/logo.svg" }],
    ["meta", { name: "theme-color", content: "#3a6ea5" }],
  ],
  // The build output is not a source: watching it only spends file watchers.
  vite: { server: { watch: { ignored: ["**/.vitepress/dist/**"] } } },
  themeConfig: {
    logo: "/logo.svg",
    nav: [
      { text: "Why", link: "/why" },
      { text: "Services", link: "/services" },
      { text: "Privacy", link: "/privacy" },
      { text: "Roadmap", link: "/roadmap" },
    ],
    socialLinks: [{ icon: "github", link: "https://github.com/flaneur-app" }],
    footer: {
      message:
        "AGPL-3.0-or-later. Flâneur is independent and not affiliated with any of the services it connects to; their names only describe compatibility.",
    },
  },
});
