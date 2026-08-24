---
cssclasses:
  - home
  - home-mobile
---

<div class="hp-mobile-head"><span>移动工作台</span><small>Obsidian · Mobile</small></div>

> [!quote] 今日格言
> 一件事情，要深度尝试十次。
> — [[03领域/成长/成长|《成长·第2条》]]

## 快速入口

> [!shortcuts]
> ```dataviewjs
> const destinations = [
>   { icon: "📥", label: "收件箱", folder: "01收件箱", index: "01收件箱/01收件箱.md" },
>   { icon: "📁", label: "领域", folder: "03领域", index: "03领域/03领域.md" },
>   { icon: "📂", label: "项目", folder: "02项目", index: "02项目/02项目.md" },
>   { icon: "📚", label: "资源", folder: "04资源", index: "04资源/04资源.md" },
>   { icon: "📦", label: "归档", folder: "05归档", index: "05归档/05归档.md" },
>   { icon: "📎", label: "附件", folder: "Attachments", index: "Attachments/Attachments.md", attachments: true },
>   { icon: "🧩", label: "模板", folder: "Templates", index: "Templates/Templates.md" }
> ];
>
> const list = dv.container.createEl("ul");
> for (const item of destinations) {
>   const count = item.attachments
>     ? app.vault.getFiles().filter(file => file.path.startsWith(`${item.folder}/`) && file.extension !== "md").length
>     : dv.pages(`"${item.folder}"`).where(page => page.file.path !== item.index).length;
>   const row = list.createEl("li");
>   const link = row.createEl("a", { cls: "internal-link", text: `${item.icon} ${item.label}`, href: item.index });
>   link.dataset.href = item.index;
>   link.addEventListener("click", event => {
>     event.preventDefault();
>     app.workspace.openLinkText(item.index, dv.current().file.path);
>   });
>   row.createEl("code", { text: String(count) });
> }
> ```

> [!navgrid]
> > [!note] 📁　领域 · 最近更新
> > ```dataview
> > LIST
> > FROM "03领域"
> > WHERE file.path != "03领域/03领域.md"
> > SORT file.mtime DESC
> > LIMIT 5
> > ```
>
> > [!example] 📂　项目 · 最近更新
> > ```dataview
> > LIST
> > FROM "02项目"
> > WHERE file.path != "02项目/02项目.md"
> > SORT file.mtime DESC
> > LIMIT 5
> > ```
>
> > [!abstract] 📚　资源 · 最近更新
> > ```dataview
> > LIST
> > FROM "04资源"
> > WHERE file.path != "04资源/04资源.md"
> > SORT file.mtime DESC
> > LIMIT 5
> > ```

## 继续处理

> [!mobileactions] 常用内容
> ```dataviewjs
> const sources = [
>   { folder: "01收件箱", index: "01收件箱/01收件箱.md", icon: "📥" },
>   { folder: "02项目", index: "02项目/02项目.md", icon: "📂" },
>   { folder: "03领域", index: "03领域/03领域.md", icon: "📁" }
> ];
>
> const recent = sources
>   .flatMap(source => Array.from(dv.pages(`"${source.folder}"`)
>     .where(page => page.file.path !== source.index))
>     .map(page => ({ page, icon: source.icon })))
>   .sort((a, b) => b.page.file.mtime.toMillis() - a.page.file.mtime.toMillis())
>   .slice(0, 6);
>
> const list = dv.container.createEl("ul");
> if (recent.length === 0) {
>   list.createEl("li", { text: "暂无待继续处理的笔记" });
> } else {
>   for (const item of recent) {
>     const row = list.createEl("li");
>     const link = row.createEl("a", {
>       cls: "internal-link",
>       text: `${item.icon} ${item.page.file.name}`,
>       href: item.page.file.path
>     });
>     link.dataset.href = item.page.file.path;
>     link.addEventListener("click", event => {
>       event.preventDefault();
>       app.workspace.openLinkText(item.page.file.path, dv.current().file.path);
>     });
>   }
> }
> ```

> [!tip] 手机端说明
> 本页使用 Dataview 实时统计。请在手机端的“设置 → 社区插件”中启用 Dataview。
