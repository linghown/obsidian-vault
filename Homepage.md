---
cssclasses:
  - home
标题:
  "{ title }":
日期:
  "{ date }":
标签:
tags:
---

`=dateformat(date(today), "yyyy年MM月dd日")` **`=dateformat(date(today), "cccc")`** <span class="hp-brand">Obsidian · Homepage</span>

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

> [!shortcuts]
> ```dataviewjs
> const destinations = [
>   { icon: "📁", label: "领域", folder: "03领域", index: "03领域/03领域.md", target: "01收件箱/Mobile Folder Browser.base#领域" },
>   { icon: "📂", label: "项目", folder: "02项目", index: "02项目/02项目.md", target: "01收件箱/Mobile Folder Browser.base#项目" },
>   { icon: "📚", label: "资源", folder: "04资源", index: "04资源/04资源.md", target: "01收件箱/Mobile Folder Browser.base#资源" },
>   { icon: "📥", label: "收件箱", folder: "01收件箱", index: "01收件箱/01收件箱.md", target: "01收件箱/Mobile Folder Browser.base#收件箱" },
>   { icon: "📦", label: "归档", folder: "05归档", index: "05归档/05归档.md", target: "01收件箱/Mobile Folder Browser.base#归档" },
>   { icon: "📎", label: "附件", folder: "Attachments", index: "Attachments/Attachments.md", target: "01收件箱/Mobile Folder Browser.base#附件", attachments: true },
>   { icon: "🧩", label: "模板", folder: "Templates", index: "Templates/Templates.md", target: "01收件箱/Mobile Folder Browser.base#模板" }
> ];
>
> const list = dv.container.createEl("ul");
> for (const item of destinations) {
>   const count = item.attachments
>     ? app.vault.getFiles().filter(file => file.path.startsWith(`${item.folder}/`) && file.extension !== "md").length
>     : dv.pages(`"${item.folder}"`).where(page => page.file.path !== item.index).length;
>   const row = list.createEl("li");
>   const link = row.createEl("a", { cls: "internal-link", text: `${item.icon} ${item.label}`, href: item.target });
>   link.dataset.href = item.target;
>   link.addEventListener("click", event => {
>     event.preventDefault();
>     app.workspace.openLinkText(item.target, dv.current().file.path);
>   });
>   row.createEl("code", { text: String(count) });
> }
> ```

> [!navgrid]
> ```dataviewjs
> const collections = [
>   { icon: "📁", label: "领域", folder: "03领域", index: "03领域/03领域.md", type: "note" },
>   { icon: "📂", label: "项目", folder: "02项目", index: "02项目/02项目.md", type: "example" },
>   { icon: "📚", label: "资源", folder: "04资源", index: "04资源/04资源.md", type: "abstract" }
> ];
>
> for (const collection of collections) {
>   const pages = Array.from(dv.pages(`"${collection.folder}"`)
>     .where(page => page.file.path !== collection.index))
>     .sort((a, b) => b.file.mtime.toMillis() - a.file.mtime.toMillis());
>   const card = dv.container.createDiv({ cls: "callout" });
>   card.dataset.callout = collection.type;
>   const title = card.createDiv({ cls: "callout-title" });
>   title.createDiv({ cls: "callout-title-inner", text: `${collection.icon}　${collection.label}　　${pages.length}篇` });
>   const content = card.createDiv({ cls: "callout-content" });
>   const list = content.createEl("ul");
>   for (const page of pages.slice(0, 5)) {
>     const row = list.createEl("li");
>     const link = row.createEl("a", { cls: "internal-link", text: page.file.name, href: page.file.path });
>     link.dataset.href = page.file.path;
>     link.addEventListener("click", event => {
>       event.preventDefault();
>       app.workspace.openLinkText(page.file.path, dv.current().file.path);
>     });
>   }
>   if (pages.length === 0) list.createEl("li", { text: "暂无笔记" });
> }
> ```

> [!workgrid]
> > [!info] 最近编辑
> > ```dataview
> > TABLE WITHOUT ID
> >   file.link AS "文件"
> > FROM ""
> > WHERE file.name != "Homepage"
> >   AND !(file.name = "领域" OR file.name = "项目" OR file.name = "资源" OR file.name = "收件箱" OR file.name = "归档" OR file.name = "Attachments" OR file.name = "Templates")
> >   AND !startswith(file.folder, "资源/Evernote")
> > SORT file.mtime DESC
> > LIMIT 6
> > ```
>
> > [!todo] 待办
> > ```tasks
> > not done
> > sort by due
> > limit 3
> > hide task count
> > hide backlinks
> > hide edit button
> > hide postpone button
> > hide urgency
> > ```

## 12个问题

> [!question] 费曼学习法 · 持续思考的问题
> 1. 淋巴结清扫术（7组、2/4组、10组、4L组）
> 2. 支气管袖式切除
> 3. 医疗行业寒冬如何度过
> 4. 男性如何在婚姻里保持自由
> 5. 如何保持健康，人的一生最好的状态
> 6. 结婚后遇到真爱怎么处理
> 7. 如何有效地向上走
> 8. 多年朋友不尊重你，分道扬镳
> 9. 如何维持和朋友的关系
> 10. 如何经营婚姻
> 11. 财富增长，经济周期
> 12. 教育子女，言传身教
