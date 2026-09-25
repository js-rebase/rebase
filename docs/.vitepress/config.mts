import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'en-US',

  title: 'Rebase',
  description: 'Rebase Docs',

  base: '/rebase/',

  cleanUrls: true,

  themeConfig: {
    //logo: '/',

    nav: [
      {
        text: 'JS.ORG',
        link: 'https://rebase.js.org'
      },
      {
        text: 'GitHub',
        link: 'https://github.com/js-rebase/code'
      },
      {
        text: 'Source',
        link: 'https://github.com/js-rebase/rebase'
      }
    ],

    sidebar: [
      {
        text: 'Rebase Documentation',
        items: [
          //{text:"",link:""}
        ]
      }
    ],

    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/js-rebase'
      },
      {
        icon: 'javascript',
        link: 'https://rebase.js.org'
      }
    ],

    search: {
      provider: 'local'
    },

    editLink: {
      pattern: 'https://github.com/js-rebase/rebase/edit/main/docs/:path',
      text: 'Edit this page'
    },

    footer: {
      message: 'Made by the Rebase Team',
      copyright: 'Copyright © 2026 Rebase'
    }
  }
})
