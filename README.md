# SmartFlow 文档站

这是 `smart-flow-ai-skill-platform` 的对外文档站仓库，基于 VitePress 构建，当前只承接平台介绍、能力边界、版本路线和联系入口。

## 线上地址

- GitHub Pages: `https://zmx2321.github.io/smart-flow-ai-skill-platform-doc/`
- 我的博客: `https://zmx2321.github.io/vite-blog`

## 本地使用

```bash
npm install
npm run dev
```

默认开发端口：

```text
http://localhost:7080/smart-flow-ai-skill-platform-doc/
```

## 构建与预览

```bash
npm run build
npm run preview
```

## 直接部署

仓库远端默认读取 `origin`，部署到 `gh-pages` 分支：

```bash
npm run deploy
```

如果需要自定义：

```bash
REPO_URL=git@github.com:zmx2321/smart-flow-ai-skill-platform-doc.git DEPLOY_BRANCH=gh-pages npm run deploy
```

## 脚本说明

- `npm run dev`：启动 VitePress 开发环境
- `npm run build`：构建静态站点
- `npm run preview`：本地预览构建产物
- `npm run clean`：清理 VitePress 缓存和构建输出
- `npm run deploy`：构建后推送到 `gh-pages`
- `./main.sh`：统一入口，支持 `dev/build/preview/deploy/clean`
