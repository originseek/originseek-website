import { viteBundler } from '@vuepress/bundler-vite'
import { hopeTheme } from 'vuepress-theme-hope'
import { defineUserConfig } from 'vuepress'

export default defineUserConfig({
  bundler: viteBundler(),
  theme: hopeTheme({
    // 主题基本配置
    hostname: 'https://originseek.com',
    author: {
      name: 'OriginSeek@王虎',
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
      { text: '爪哇',link: '/java/', activeMatch: '/java/'},
      { text: '阅读书单', link: '/books/', activeMatch: '/books/'},
      { text: '常用工具', link: '/tools/', activeMatch: '/tools/'},
      { text: '关于作者', link: '/about/', activeMatch: '/about/'},
      { text: '版权说明', link: '/copyright/', activeMatch: '/copyright/'},
    ],
    
    // 侧边栏配置
    sidebar: {
      '/java/': [
        {
          text: 'Java 基础',
          collapsible: true,
          children: [
            { text: '语言基础', link: '/java/basics/language' },
            { text: '面向对象编程', link: '/java/basics/oop' },
            { text: '集合框架', link: '/java/basics/collections' },
            { text: '异常处理', link: '/java/basics/exceptions' }
          ]
        },
        {
          text: 'Java 进阶',
          collapsible: true,
          children: [
            { text: '多线程编程', link: '/java/advanced/multithreading' },
            { text: 'IO 操作', link: '/java/advanced/io' },
            { text: '网络编程', link: '/java/advanced/network' },
            { text: '反射机制', link: '/java/advanced/reflection' }
          ]
        },
        {
          text: 'Java 框架',
          collapsible: true,
          children: [
            { text: 'Spring Framework', link: '/java/frameworks/spring' },
            { text: 'Spring Boot', link: '/java/frameworks/spring-boot' },
            { text: 'Spring Cloud', link: '/java/frameworks/spring-cloud' },
            { text: 'MyBatis', link: '/java/frameworks/mybatis' }
          ]
        },
        {
          text: '最佳实践',
          collapsible: true,
          children: [
            { text: '设计模式', link: '/java/best-practices/design-patterns' },
            { text: '性能优化', link: '/java/best-practices/performance' },
            { text: '代码规范', link: '/java/best-practices/code-standards' },
            { text: '项目实战', link: '/java/best-practices/projects' }
          ]
        }
      ],
      '/books/': [
        {
          text: '技术类书籍',
          collapsible: true,
          children: [
            { text: '深入理解Java虚拟机', link: '/books/tech/jvm' },
            { text: '代码整洁之道', link: '/books/tech/clean-code' },
            { text: '设计模式', link: '/books/tech/design-patterns' },
            { text: '重构', link: '/books/tech/refactoring' }
          ]
        },
        {
          text: '非技术类书籍',
          collapsible: true,
          children: [
            { text: '原则', link: '/books/non-tech/principles' },
            { text: '思考，快与慢', link: '/books/non-tech/thinking' },
            { text: '穷查理宝典', link: '/books/non-tech/charlie' },
            { text: '人类简史', link: '/books/non-tech/sapiens' }
          ]
        }
      ],
      '/tools/': [
        {
          text: '检查类工具',
          collapsible: true,
          children: [
            { text: 'JSON格式化工具', link: '/tools/check/json' },
            { text: '正则表达式测试工具', link: '/tools/check/regex' },
            { text: '代码格式化工具', link: '/tools/check/code' }
          ]
        },
        {
          text: '转换类工具',
          collapsible: true,
          children: [
            { text: '进制转换工具', link: '/tools/convert/hex' }
          ]
        }
      ],
      '/about/': [
        {
          text: '技术专长',
          collapsible: true,
          children: [
            { text: '后端开发', link: '/about/skills/backend' }
          ]
        }
      ]
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
      }
    },
  }),
})