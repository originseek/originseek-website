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
    breadcrumb: true,
    breadcrumbIcon: true,


    
    // 页脚配置
    footer: "<a href=\"/terms/\">服务条款</a> <a href=\"/privacy/\">隐私政策</a>",
    copyright: "Copyright © 2025 OriginSeek@王虎 <a href=\"/copyright/\">版权说明</a>",
    
    // 社交链接
    repo: 'originseek',
    repoDisplay: true,
    repoLabel: "GitHub",
    
    // 导航栏配置
    navbar: [
      { text: '首页', link: '/' },
      { text: '爪哇',link: '/java/', activeMatch: '/java/'},
      { text: 'AI框架', link: '/ai/', activeMatch: '/ai/'},
      { text: '阅读书单', link: '/books/', activeMatch: '/books/'},
      { text: '常用工具', link: '/tools/', activeMatch: '/tools/'},
      { text: '插件', link: '/plugins/', activeMatch: '/plugins/'},
      { text: '关于作者', link: '/about/', activeMatch: '/about/'},
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
            { text: '重构', link: '/books/tech/refactoring' },
            { text: 'Effective Java', link: '/books/tech/effective-java' },
            { text: 'Spring实战', link: '/books/tech/spring-in-action' },
            { text: 'Java并发编程实战', link: '/books/tech/java-concurrency' }
          ]
        }
      ],
      '/tools/': [
        {
          text: 'API工具',
          collapsible: true,
          children: [
            { text: 'API测试工具', link: '/tools/api/test' }
          ]
        },
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
          text: '代码工具',
          collapsible: true,
          children: [
            { text: '代码调试工具', link: '/tools/code/debug' },
            { text: '代码生成工具', link: '/tools/code/generator' }
          ]
        },
        {
          text: '转换类工具',
          collapsible: true,
          children: [
            { text: '进制转换工具', link: '/tools/convert/base' },
            { text: '时间戳转换工具', link: '/tools/convert/timestamp' },
            { text: '编码转换工具', link: '/tools/convert/encoding' }
          ]
        },
        {
          text: '数据工具',
          collapsible: true,
          children: [
            { text: '数据可视化工具', link: '/tools/data/visualization' }
          ]
        },
        {
          text: '设计工具',
          collapsible: true,
          children: [
            { text: '配色工具', link: '/tools/design/color' }
          ]
        },
        {
          text: '编辑器工具',
          collapsible: true,
          children: [
            { text: '在线编辑器', link: '/tools/editor/online' }
          ]
        },
        {
          text: '图片工具',
          collapsible: true,
          children: [
            { text: '图片压缩工具', link: '/tools/image/compress' },
            { text: '图片编辑工具', link: '/tools/image/edit' }
          ]
        },
        {
          text: '网络工具',
          collapsible: true,
          children: [
            { text: '网络诊断工具', link: '/tools/network/diagnostic' }
          ]
        },
        {
          text: '办公工具',
          collapsible: true,
          children: [
            { text: '文档工具', link: '/tools/office/document' }
          ]
        },
        {
          text: '性能工具',
          collapsible: true,
          children: [
            { text: '性能测试工具', link: '/tools/performance/test' }
          ]
        },
        {
          text: '安全工具',
          collapsible: true,
          children: [
            { text: '密码工具', link: '/tools/security/password' }
          ]
        }
      ],
      '/ai/': [
        {
          text: 'Spring AI',
          collapsible: true,
          children: [
            { text: '快速开始', link: '/ai/spring-ai/getting-started' },
            //{ text: '基础概念', link: '/ai/spring-ai/concepts' },
            //{ text: '模型集成', link: '/ai/spring-ai/models' },
            //{ text: '最佳实践', link: '/ai/spring-ai/best-practices' }
          ]
        },
        {
          text: 'Spring AI Alibaba',
          collapsible: true,
          children: [
            { text: '快速入门', link: '/ai/spring-ai-alibaba/getting-started' },
            //{ text: '功能特性', link: '/ai/spring-ai-alibaba/features' },
            //{ text: '最佳实践', link: '/ai/spring-ai-alibaba/best-practices' }
          ]
        },
        {
          text: 'LangChain4j',
          collapsible: true,
          children: [
            { text: '入门指南', link: '/ai/langchain4j/introduction' },
            //{ text: '核心功能', link: '/ai/langchain4j/core-features' },
            //{ text: '链式调用', link: '/ai/langchain4j/chains' },
            //{ text: '应用示例', link: '/ai/langchain4j/examples' }
          ]
        },
        {
          text: 'Jlama',
          collapsible: true,
          children: [
            { text: '基本使用', link: '/ai/jlama/basic-usage' },
            //{ text: '模型训练', link: '/ai/jlama/training' },
            //{ text: '推理部署', link: '/ai/jlama/inference' },
            //{ text: '性能优化', link: '/ai/jlama/optimization' }
          ]
        },
        {
          text: 'deepseek4j',
          collapsible: true,
          children: [
            { text: '快速上手', link: '/ai/deepseek4j/quickstart' },
            //{ text: 'API参考', link: '/ai/deepseek4j/api-reference' },
            //{ text: '高级特性', link: '/ai/deepseek4j/advanced' },
            //{ text: '实战案例', link: '/ai/deepseek4j/case-studies' }
          ]
        },
        {
          text: 'Deeplearning4j',
          collapsible: true,
          children: [
            { text: '入门教程', link: '/ai/deeplearning4j/getting-started' },
            //{ text: '神经网络', link: '/ai/deeplearning4j/neural-networks' },
            //{ text: '数据预处理', link: '/ai/deeplearning4j/data-preprocessing' }
          ]
        },
        {
          text: 'Neuroph',
          collapsible: true,
          children: [
            { text: '快速开始', link: '/ai/neuroph/getting-started' },
            //{ text: '神经网络构建', link: '/ai/neuroph/network-building' },
            //{ text: '应用案例', link: '/ai/neuroph/use-cases' }
          ]
        },
        {
          text: 'Weka',
          collapsible: true,
          children: [
            { text: '基础教程', link: '/ai/weka/basics' },
            //{ text: '数据挖掘', link: '/ai/weka/data-mining' },
            //{ text: '机器学习', link: '/ai/weka/machine-learning' }
          ]
        },
        {
          text: 'Encog',
          collapsible: true,
          children: [
            { text: '入门指南', link: '/ai/encog/getting-started' },
            //{ text: '神经网络', link: '/ai/encog/neural-networks' },
            //{ text: '遗传算法', link: '/ai/encog/genetic-algorithms' }
          ]
        },
        {
          text: 'Mallet',
          collapsible: true,
          children: [
            { text: '快速入门', link: '/ai/mallet/getting-started' },
            //{ text: '主题建模', link: '/ai/mallet/topic-modeling' },
            //{ text: '文本分类', link: '/ai/mallet/text-classification' }
          ]
        },
        {
          text: 'Agent-Flex',
          collapsible: true,
          children: [
            { text: '入门教程', link: '/ai/agent-flex/getting-started' },
            //{ text: '智能代理', link: '/ai/agent-flex/intelligent-agents' },
            //{ text: '实战应用', link: '/ai/agent-flex/practical-applications' }
          ]
        },
        {
          text: 'JavaML',
          collapsible: true,
          children: [
            { text: '基础入门', link: '/ai/javaml/getting-started' },
            //{ text: '数据处理', link: '/ai/javaml/data-processing' },
            //{ text: '算法实现', link: '/ai/javaml/algorithms' }
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