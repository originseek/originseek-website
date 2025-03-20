import { viteBundler } from '@vuepress/bundler-vite'
import { hopeTheme } from 'vuepress-theme-hope'
import { defineUserConfig } from 'vuepress'

export default defineUserConfig({
  bundler: viteBundler(),
  theme: hopeTheme({
    // 主题基本配置
    hostname: 'https://originseek.com',
    author: {
      name: 'OriginSeek',
      url: 'https://originseek.com',
    },
    logo: '/logo.svg',
    breadcrumb: true,
    breadcrumbIcon: true,
    
    // 社交链接
    repo: 'originseek',
    repoDisplay: true,
    repoLabel: "GitHub",
    
    // 导航栏配置
    navbar: [
      { text: '首页', link: '/' },
      { 
        text: '爪哇',
        link: '/java/',
        children: [
          { text: 'Java基础', link: '/java/#java-基础' },
          { text: 'Java进阶', link: '/java/#java-进阶' },
          { text: 'Java框架', link: '/java/#java-框架' },
          { text: '最佳实践', link: '/java/#最佳实践' }
        ]
      },
      { text: '阅读书单', link: '/books/' },
      { text: '关于作者', link: '/about/' },
      { text: '版权说明', link: '/copyright/' },
    ],
    
    // 侧边栏配置
    sidebar: 'structure',
    
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
      }
    },
  }),
})