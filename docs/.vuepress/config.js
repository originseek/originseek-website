import { viteBundler } from '@vuepress/bundler-vite'
import { hopeTheme } from 'vuepress-theme-hope'
import { defineUserConfig } from 'vuepress'

export default defineUserConfig({
  bundler: viteBundler(),
  head: [
    ['link', { rel: 'icon', href: '/logo.svg' }]
  ],
  theme: hopeTheme({

    // 主题基本配置
    hostname: 'https://originseek.com',
    author: {
      name: 'OriginSeek@王虎',
      url: 'https://originseek.com',
    },
    logo: '/logo.svg',
    navbarTitle: 'OriginSeek',
    breadcrumb: true,
    breadcrumbIcon: true,
    // 页脚配置
    //footer: "<a href=\"/terms/\">服务条款</a> <a href=\"/privacy/\">隐私政策</a>",
    copyright: "Copyright © 2025 OriginSeek@王虎",
    //<a href=\"/copyright/\">版权说明</a>
    // 社交链接
    repo: 'originseek',
    repoDisplay: true,
    repoLabel: "GitHub",
    
    // 导航栏配置
    navbar: [
      { text: '首页', link: '/' },
      { text: '爪哇',link: '/java/', activeMatch: '/java/'},
      { text: 'AI框架', link: '/ai/', activeMatch: '/ai/'},
      { text: '科技动态', link: '/news/', icon: 'blog', activeMatch: '/news/'},
      { text: '阅读书单', link: '/books/', activeMatch: '/books/'},
      { text: '常用工具', link: '/tools/', activeMatch: '/tools/'},
      { text: '插件', link: '/plugins/', activeMatch: '/plugins/'},
      { text: '关于作者', link: '/about/', activeMatch: '/about/'},
    ],
    
    // 侧边栏配置
    sidebar: {
    },
    
    // 插件配置
    plugins: {
      // 启用搜索功能
      search: {
        // 配置搜索
        locales: {
          "/": {
            placeholder: "搜索"
          }
        },
        // 最多显示10个搜索结果
        maxSuggestions: 10,
        // 排除首页和404页面
        isSearchable: (page) => page.path !== "/" && page.path !== "/404.html"
      },

    },
  }),
})