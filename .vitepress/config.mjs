import { defineConfig } from 'vitepress'
// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Finna产品手册",
   base: "/docs-finna/",
  description: "A VitePress Site",
  head: [["link", { rel: "icon", href: "/logo.svg" }]],
  themeConfig: {
    outlineTitle:"目录",
    outline:[2,6],
    logo:'/logo.svg',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', items:[
        {text:'第一个',link:'/'},
        {text:'第二个',link:'/api-examples'},
        {text:'fontnUM1',link:'/fontNum1/'}
      ] },
      { text: 'Examples', link: '/markdown-examples' }
    ],
    sidebar: {
       "/fontNum1/":[

          { text: '第一章 产品概览', link: '/fontNum1/第一章' ,
          },
          { text: '第二章 快速上手', link: '/fontNum1/第二章' },
          { text: '第三章 应用开发', link: '/fontNum1/第三章' },
          { text: '第四章 模型', link: '/fontNum1/第四章' },
          { text: '第五章 知识库（跳转知识库平台）', link: '/fontNum1/第五章' },
          { text: '第六章 插件', link: '/fontNum1/第六章' },
          { text: '第七章', link: '/fontNum1/第七章' },
          { text: '第八章', link: '/fontNum1/第八章' },
          { text: '第九章', link: '/fontNum1/第九章' },
      
       ]
      
      },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],
    footer:{
      copyright:'版权所有 © 2023-present Vue.js'
    },
     // 设置搜索框的样式
    search: {
      provider: "local",
      options: {
        translations: {
          button: {
            buttonText: "搜索文档",
            buttonAriaLabel: "搜索文档",
          },
          modal: {
            noResultsText: "无法找到相关结果",
            resetButtonTitle: "清除查询条件",
            footer: {
              selectText: "选择",
              navigateText: "切换",
            },
          },
        },
      },
    },
  }
})
