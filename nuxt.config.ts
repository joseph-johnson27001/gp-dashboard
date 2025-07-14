export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",
  devtools: { enabled: true },
  modules: ["@nuxt/icon"],

  app: {
    head: {
      title: "GP Dashboard",
      link: [
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossorigin: "anonymous",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Assistant:wght@300;400;600&family=Inter&family=Roboto:wght@300;400;500&family=Unica+One&display=swap",
        },
      ],
    },
  },
});
