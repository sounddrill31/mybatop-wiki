import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "mybatop",
  description: " Battery monitoring tool for linux with tracking",
  cleanUrls: true,
  base: '/mybatop-wiki/', //Change this when deploying
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Download', link: '/download' },
      { text: 'Docs', link: '/docs' }
    ],

    editLink: {
      pattern: 'https://github.com/sounddrill31/mybatop-wiki/edit/main/docs/:path' // Change this url
    },

    sidebar: [
      {
    text: "Documentation",
    base: "/docs",
        items: [
          { text: 'Getting Started', link: '/' },
          { text: 'Installation', link: '/install' },
          { text: 'Installation from Source', link: '/install-from-source' },
          { text: 'Generate Data', link: '/gen-data' },
          { text: 'Generate Reports', link: '/gen-reports' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vishnumur777/mybatop' }
    ]
  }
})
