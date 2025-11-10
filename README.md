# FTC 27570 BEAR · GitHub Pages Site

中文 | [English](#english-version)

## 项目简介
- **目标**：基于 Vite + React + TypeScript 构建的静态网站，可直接部署到 GitHub Pages（gh-pages 分支或 `/docs`）。
- **特性**：支持 zh/en 切换、亮暗主题、响应式设计、结构化数据（Organization + Event），并内置 `data/` 与 `content/` 目录方便后续替换。
- **内置内容**：DECODE 2025-2026 赛季规划、CNCHQ 赛事页面、INTO THE DEEP 历史归档、团队/机器人/战绩/图库/赞助/招新/联系等板块。

## 技术栈
- Vite + React + TypeScript + React Router
- React Markdown（渲染 `content/*.md`）
- 自定义 hooks：`useI18n`（LangSwitch）、ThemeToggle、统一 `lib/seo.ts` / `lib/events.ts`
- GitHub Actions：`github/workflows/pages.yml`

## 快速开始
```bash
npm install        # 安装依赖
npm run dev        # 本地开发，默认监听 0.0.0.0:5173（同局域网可访问）
npm run build      # 产出 dist 静态文件
npm run preview    # 预览 dist（监听 0.0.0.0:4173）
```

## 目录速览
```
├── src/                # 页面、组件、hooks、lib
├── data/               # team / results / sponsors / links JSON
├── content/            # Markdown 内容（赛季、赛事、历史、机器人）
├── public/gallery/     # 12 张 JPG 占位图（请替换为真图）
├── public/sitemap.xml  # 记得将域名替换为仓库地址
├── github/workflows/pages.yml
├── README.md / LICENSE
```

## 内容维护指引
1. **更新数据**
   - `data/results.json`：新增赛事条目（填充 `startDate`/`endDate` 可自动排序）。需要链接时使用 `@links.xxx`，链接定义集中在 `data/links.json`。
   - `data/team.json`：成员、导师、值班表；`avatar` 指向 `public/gallery` 图片。
   - `data/sponsors.json`：包含 `tier`、`logo`、中英感谢文案。
2. **Markdown 内容**
   - `content/season/2025-2026/...`、`content/history/...`、`content/robot/...` 采用 Markdown，文中 `@links.xxx` 会自动替换为真实链接。
   - 新赛季可复制现有目录命名为 `content/season/YYYY-YYYY/` 后在 `Season` 页面导入。
3. **图库 / Logo 替换**
   - 将 JPG/PNG 放入 `public/gallery`，并在 `data/*.json` 或页面数组中更新路径。
   - 完成替换后更新 README 的“待替换清单”，便于检查。
4. **添加新赛季页面**
   - 新增 Markdown + 数据条目 → 在 `src/pages/Season.tsx` 引入新的内容或在 `eventData` 中添加 `season` 字段，即可通过 `ResultTable` 自动展示。

## GitHub Pages 部署
1. 仓库设置 `Settings > Pages > Source = GitHub Actions`。
2. 预设工作流位于 `github/workflows/pages.yml`，推送到 `main` 会自动：
   - `npm install && npm run build`
   - 上传 `dist` 产物
   - 发布到 `gh-pages` 环境
3. 如果希望使用 `/docs` 分支，可将 `vite.config.ts` 的 `base` 调整为 `/仓库名/` 并将 Actions 改写为 `actions/deploy-pages@v4` 推送至 `/docs`。

### 自检清单
- [ ] `npm run build` 通过
- [ ] `public/sitemap.xml` 中的域名与仓库一致
- [ ] `data/*.json` / `content/*.md` 无待办词条
- [ ] GitHub Pages 环境已启用且 DNS 正确

## FAQ
| 问题 | 建议 |
| --- | --- |
| Pages 部署失败 | 确认 `npm run build` 能运行；必要时在 Actions 中开启 `--legacy-peer-deps`。 |
| 图片无法显示 | 检查路径是否位于 `public/`，并确保 `vite.config.ts` 的 `base` 设置正确。 |
| 路由 404 | 本项目默认 Hash Router，部署到子路径无需额外配置；若切换到 Browser Router，请在 Pages 中配置自定义 404。 |

## 待替换的占位内容
- `public/gallery/*.jpg`：仍为占位色块；请替换为真实照片与 Sponsor Logo。
- `data/links.json` 中的 `portfolio.pdf`、`handbook.pdf`、`schedule.sheet`、`apply.form` 等为示例链接。
- README 中的示例说明图（暂无，可自行追加）。

---

## English Version

### Overview
- Static site for **FTC 27570 BEAR** (DECODE 2025-2026). Built with Vite + React + TS, deployable via GitHub Pages in one click.
- Includes bilingual navigation, dark/light themes, SEO helpers, JSON/Markdown driven data, GitHub Actions workflow, and placeholder assets ready for replacement.

### Tech Stack
- React 18, React Router, custom `useI18n`, React Markdown.
- SEO helper (`lib/seo.ts`) + structured data (Organization + Event).
- Data-driven components: `Hero`, `Timeline`, `ResultTable`, `SponsorGrid`, etc.

### Getting Started
```bash
npm install
npm run dev      # local dev server (0.0.0.0:5173)
npm run build    # generate static files
npm run preview  # verify dist via 0.0.0.0:4173
```

### Content Management
1. **Data JSON** – update `data/team.json`, `data/results.json`, `data/sponsors.json`, `data/links.json`. Reference shared links via `@links.key`.
2. **Markdown** – edit files in `content/` (season overview, CNCHQ event, INTO THE DEEP archive, robot architecture). Tokens like `@links.first.decode` are replaced at runtime.
3. **Gallery** – drop real JPG/PNG files into `public/gallery` and update references.
4. **New season** – add a new folder under `content/season/`, duplicate the section in `Season.tsx`, and insert new events into `data/results.json`.

### Deployment (GitHub Pages)
1. Enable Pages → GitHub Actions.
2. Workflow `github/workflows/pages.yml` builds and deploys `dist` to the `gh-pages` environment.
3. Update `public/sitemap.xml` + `public/robots.txt` with your repository domain.

### Troubleshooting
- Build errors: run `npm run build` locally, ensure Node 18+.
- Broken links: verify `@links.*` tokens exist in `data/links.json`.
- 404 routes: this project uses `HashRouter`. Switching to BrowserRouter requires a custom 404 redirect on Pages.

### Placeholders to replace
- Gallery photos, sponsor logos, engineering portfolio PDF, outreach handbook, application/sponsorship forms.
- Textual placeholders marked as “占位/placeholder” in Markdown and `data/*.json`.

Happy DECODE season! 🚀
