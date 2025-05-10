import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "mybatop",
  description: " Battery monitoring tool for linux with tracking ",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Download', link: '/download' },
      { text: 'Docs', link: '/download' }
    ],

    sidebar: [
      {
        items: [
          { text: 'Download', link: '/download' },
          { text: 'Docs', link: '/docs' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vishnumur777/mybatop' }
    ]
  }
})
