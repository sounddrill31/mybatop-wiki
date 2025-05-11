import { defineConfig } from 'vitepress'
import { withSidebar } from 'vitepress-sidebar';

// https://vitepress.dev/reference/site-config

function genSidebarConfig(doc){
  return {
    documentRootPath: 'docs',
    scanStartPath: doc,
    resolvePath: `/${doc}/`,
    collapsed: false,
    hyphenToSpace: true,
    capitalizeEachWords: true,
    underscoreToSpace: true,
    includeEmptyFolder: false,
    sortMenusByName: false,
    excludePattern: ['README**'],
    sortMenusByFrontmatterOrder: true,
    includeFolderIndexFile: true,
    useTitleFromFrontmatter: true
  }
};

const vitePressOptions  = ({
  title: "mybatop",
  description: "Battery monitoring tool for linux with tracking",
  cleanUrls: true,
  base: '/', //Change this when deploying
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Download', link: '/download' },
      { text: 'Docs', link: '/docs/get-started' }
    ],

    editLink: {
      pattern: 'https://github.com/sounddrill31/mybatop-wiki/edit/main/docs/:path' // Change this url
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vishnumur777/mybatop' }
    ]
  }
})

const vitePressSidebarOptions = [genSidebarConfig("docs")]

export default defineConfig(withSidebar(vitePressOptions,vitePressSidebarOptions));  

// sidebar stuff referenced from FOSSonTOP(credit to @PugzAreCute) https://github.com/FOSSonTop/website/blob/main/docs/.vitepress/config.mts