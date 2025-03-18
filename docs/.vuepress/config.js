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
    
    // 导航栏配置
    navbar: [
      { text: '首页', link: '/' },
      { text: '关于', link: '/about/' },
    ],
    
    // 侧边栏配置
    sidebar: 'structure',
    
    // 插件配置
    plugins: {
      // 所有插件默认开启
    },
  }),
})