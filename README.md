# OriginSeek 网站

<p align="center">
  <img src="./docs/.vuepress/public/logo.svg" alt="OriginSeek Logo" width="200" height="200">
</p>

<p align="center">
  探索技术本源，提升认知格局
</p>

## 项目简介

OriginSeek 是一个专注于技术探索与实践的知识分享平台，旨在帮助开发者深入理解技术本质，构建系统化的技术认知。网站涵盖 Java 技术栈、AI 框架、技术书籍推荐以及实用开发工具等多个领域的内容。

主要特点：

- **技术本质探索**：深入底层原理与设计思想，探寻技术演进本源，建立系统化的技术认知
- **源码深度剖析**：剖析主流框架核心机制，理解设计精髓，掌握技术实现真谛
- **技术认知提升**：梳理技术发展脉络，把握技术演进方向，构建完整的技术知识体系
- **技术分享交流**：分享学习心得与实践经验，碰撞思维火花，共同探讨技术成长之路

## 技术栈

本项目基于以下技术栈构建：

- **框架**：[VuePress 2.0](https://v2.vuepress.vuejs.org/zh/)
- **主题**：[VuePress Theme Hope](https://theme-hope.vuejs.press/zh/)
- **包管理器**：[pnpm](https://pnpm.io/zh/)
- **构建工具**：[Vite](https://vitejs.dev/)
- **搜索插件**：[@vuepress/plugin-search](https://v2.vuepress.vuejs.org/zh/reference/plugin/search.html)

## 项目结构

```
.
├── docs                    # 文档目录
│   ├── .vuepress          # VuePress 配置目录
│   │   ├── config.js      # VuePress 配置文件
│   │   ├── public         # 静态资源目录
│   │   └── styles         # 样式目录
│   ├── README.md          # 首页
│   ├── about              # 关于作者
│   ├── ai                 # AI 框架相关内容
│   ├── books              # 阅读书单
│   ├── copyright          # 版权说明
│   ├── java               # Java 相关内容
│   ├── plugins            # 插件相关内容
│   ├── privacy            # 隐私政策
│   ├── terms              # 服务条款
│   └── tools              # 常用工具
├── deploy.sh              # 部署脚本
├── package.json           # 项目依赖配置
└── README.md              # 项目说明文档
```

## 本地开发

### 环境要求

- Node.js 16.0 或更高版本
- pnpm 7.0 或更高版本

### 安装依赖

```bash
pnpm install
```

### 启动开发服务器

```bash
pnpm docs:dev
```

启动后，访问 http://localhost:8080 即可查看网站。

### 构建静态文件

```bash
pnpm docs:build
```

构建后的文件位于 `docs/.vuepress/dist` 目录。

## 部署

本项目使用 GitHub Pages 进行部署，执行以下命令即可完成部署：

```bash
./deploy.sh
```

该脚本会自动构建项目并将生成的静态文件推送到 GitHub 仓库的 main 分支。

## 贡献指南

1. Fork 本仓库
2. 创建您的特性分支 (`git checkout -b feature/amazing-feature`)
3. 提交您的更改 (`git commit -m 'Add some amazing feature'`)
4. 推送到分支 (`git push origin feature/amazing-feature`)
5. 打开一个 Pull Request

## 许可证

本项目采用 ISC 许可证，详情请参阅 `package.json` 文件。

## 联系方式

- 网站：[https://originseek.com](https://originseek.com)
- GitHub：[https://github.com/originseek](https://github.com/originseek)