---
cssclasses:
  - home
  - mac-home
---

# ⌘ 工作台

```dataviewjs
const now = new Date();
const dateLabel = new Intl.DateTimeFormat("zh-CN", {
  year: "numeric", month: "long", day: "numeric"
}).format(now);
const weekdayLabel = new Intl.DateTimeFormat("zh-CN", { weekday: "long" }).format(now);
const timeLabel = new Intl.DateTimeFormat("zh-CN", {
  hour: "2-digit", minute: "2-digit", hour12: false
}).format(now);

const datebar = dv.container.createDiv({ cls: "hp-datebar" });
datebar.createSpan({ cls: "hp-datebar-date", text: dateLabel });
datebar.createSpan({ cls: "hp-datebar-weekday", text: weekdayLabel });
datebar.createSpan({ cls: "hp-datebar-time", text: timeLabel });
datebar.createSpan({ cls: "hp-datebar-brand", text: "Obsidian · Mac" });
```

```dataviewjs
const sourcePath = "03领域/成长/每日格言.md";
const raw = await dv.io.load(sourcePath);
const quotes = (raw ?? "")
  .split("\n")
  .map(line => line.trim())
  .filter(line => line.startsWith("- "))
  .map(line => line.slice(2).split("｜").map(part => part.trim()))
  .filter(parts => parts.length >= 3 && parts[0]);

const root = dv.container;
root.classList.add("callout", "hp-daily-quote");
root.setAttribute("data-callout", "quote");

const renderQuote = () => {
  root.replaceChildren();
  const title = root.createDiv({ cls: "callout-title" });
  title.createDiv({ cls: "callout-title-inner", text: "今日格言" });
  const content = root.createDiv({ cls: "callout-content" });

  if (!quotes.length) {
    content.createEl("p", { text: "今日格言库暂时为空。" });
    return;
  }

  const now = new Date();
  const localDay = Math.floor(new Date(now.getFullYear(), now.getMonth(), now.getDate()).getTime() / 86400000);
  const [text, source, link] = quotes[localDay % quotes.length];
  content.createEl("p", { text });
  const sourceLine = content.createEl("p", { cls: "hp-daily-quote-source" });
  sourceLine.appendText("— ");
  const sourceLink = sourceLine.createEl("a", { cls: "internal-link", text: `《${source}》`, href: link });
  sourceLink.dataset.href = link;
  sourceLink.addEventListener("click", event => {
    event.preventDefault();
    app.workspace.openLinkText(link, dv.current().file.path);
  });
};

const refreshAtNextMidnight = () => {
  const now = new Date();
  const next = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
  window.setTimeout(() => {
    if (!root.isConnected) return;
    renderQuote();
    refreshAtNextMidnight();
  }, Math.max(1000, next.getTime() - now.getTime() + 100));
};

renderQuote();
refreshAtNextMidnight();
```

## 快速入口

> [!shortcuts] 笔记库
> ```dataviewjs
> const destinations = [
>   { icon: "📁", label: "领域", folder: "03领域", index: "03领域/03领域.md" },
>   { icon: "📂", label: "项目", folder: "02项目", index: "02项目/02项目.md" },
>   { icon: "📚", label: "资源", folder: "04资源", index: "04资源/04资源.md" },
>   { icon: "📥", label: "收件箱", folder: "01收件箱", index: "01收件箱/01收件箱.md" },
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
>
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

> [!workgrid] 现在处理
> > [!note] 最近项目
> > ```dataview
> > TABLE WITHOUT ID
> >   file.link AS "项目",
> >   dateformat(file.mtime, "MM-dd HH:mm") AS "修改时间"
> > FROM "02项目"
> > WHERE file.path != "02项目/02项目.md"
> > SORT file.mtime DESC
> > LIMIT 8
> > ```
>
> > [!todo] 待办
> > ```tasks
> > not done
> > sort by due
> > limit 8
> > hide toolbar
> > hide task count
> > hide backlinks
> > hide edit button
> > hide postpone button
> > hide urgency
> > ```

## Mac 快捷操作

> [!tip] 常用快捷键
> - `⌘ N` 新建笔记　·　`⌘ P` 命令面板　·　`⌘ ⇧ F` 全文搜索
> - `⌘ O` 快速切换笔记　·　`⌘ ,` 打开设置　·　`⌘ Enter` 切换阅读/编辑视图
