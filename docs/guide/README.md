# 快速上手指南

## 环境准备

在开始使用OriginSeek网站之前，请确保您的系统已安装以下工具：

- [Node.js](https://nodejs.org/) (推荐v16或更高版本)
- [pnpm](https://pnpm.io/) (推荐v8或更高版本)

## 安装pnpm

如果您尚未安装pnpm，可以通过以下方式安装：

```bash
# 使用npm安装
npm install -g pnpm

# 验证安装
pnpm --version
```

## 项目设置

### 克隆项目

```bash
git clone https://github.com/your-username/originseek-website.git
cd originseek-website
```

### 安装依赖

使用pnpm安装项目所需的所有依赖：

```bash
pnpm install
```

## 启动开发服务器

使用以下命令启动本地开发服务器：

```bash
pnpm docs:dev
```

启动成功后，您可以在浏览器中访问 `http://localhost:8080` 查看网站。

开发服务器具有热重载功能，当您修改文件时，页面会自动刷新。

## 构建静态网站

当您完成开发并准备部署时，可以使用以下命令构建静态网站：

```bash
pnpm docs:build
```

构建过程会执行以下操作：

1. 编译所有的Markdown文件为HTML
2. 处理所有的静态资源（图片、CSS、JavaScript等）
3. 应用主题和插件
4. 生成优化后的生产环境代码

构建完成后，静态文件将生成在 `docs/.vuepress/dist` 目录中。这个目录包含了完全静态的HTML、CSS和JavaScript文件，可以直接部署到任何静态网站托管服务。

### 检查构建结果

您可以在构建完成后检查生成的文件：

```bash
# 查看生成的文件结构
ls -la docs/.vuepress/dist
```

### 部署选项

您可以将构建好的静态文件部署到多种平台：

- **GitHub Pages**：适合开源项目文档
- **Netlify**：提供免费托管和自动部署
- **Vercel**：适合前端项目，提供全球CDN
- **自托管服务器**：将dist目录内容上传到您的Web服务器

部署时只需将 `docs/.vuepress/dist` 目录中的所有文件上传到您选择的托管服务即可。

## 常见问题

### 依赖安装失败

如果您在安装依赖时遇到问题，可以尝试清除缓存后重新安装：

```bash
pnpm store prune
pnpm install
```

### 端口占用

如果8080端口已被占用，VuePress会自动使用下一个可用端口。您可以在终端输出中查看实际使用的URL。

### 更新依赖

定期更新依赖可以获得最新的功能和安全修复：

```bash
pnpm update
```

## 更多资源

- [VuePress官方文档](https://v2.vuepress.vuejs.org/zh/)
- [vuepress-theme-hope主题文档](https://theme-hope.vuejs.press/zh/)
- [pnpm官方文档](https://pnpm.io/zh/)