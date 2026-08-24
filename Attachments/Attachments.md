---
cssclasses:
  - index-page
tags:
  - folder-index
---

# 附件

> [!info] 概述
> 存储附件文件 —— 图片、PDF 等媒体资源。

通过 `![[Attachments/文件名.png]]` 语法在笔记中引用。

## 📎 最近附件

```dataviewjs
const attachments = app.vault.getFiles()
  .filter(file => file.path.startsWith("Attachments/") && file.extension !== "md")
  .sort((a, b) => b.stat.mtime - a.stat.mtime)
  .slice(0, 20);

dv.list(attachments.map(file => `[[${file.path}|${file.name}]]`));
```
