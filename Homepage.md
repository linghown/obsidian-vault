---
cssclasses:
  - home
---

# 主页

> [!quote]+ 今日
> `=dateformat(date(today), "yyyy年MM月dd日")`
> 戒掉情绪，所有的事情都是同样的逻辑，情绪无效，先处理情绪，再处理事情。
> — [[成长]] 第1条

## 快速入口

| 手术技术 | 学术写作 | 个人成长 | 知识库 |
|:--------:|:--------:|:--------:|:------:|
| [[肺叶切除术]] | [[新手小白\|SCI写作]] | [[费曼学习法]] | [[Dashboard\|导航页]] |
| [[肺段切除术]] | [[文献汇报 多发肺大疱\|文献汇报]] | [[成长]] | [[收件箱]] |
| [[清扫淋巴结]] | | [[悟]] | [[资源/Evernote\|印象笔记]] |
| [[开放肺叶切或全肺切]] | | [[你不知道的事]] | |

## 当前项目

```dataview
TABLE WITHOUT ID
  file.link AS "笔记",
  dateformat(file.mtime, "MM-dd HH:mm") AS "修改时间"
FROM "项目"
SORT file.mtime DESC
```

## 最近编辑

```dataview
TABLE WITHOUT ID
  file.link AS "笔记",
  dateformat(file.mtime, "MM-dd HH:mm") AS "修改时间"
FROM ""
WHERE file.name != "Homepage"
SORT file.mtime DESC
LIMIT 6
```

## 待办

```tasks
not done
sort by due
limit 10
```

## 我的12个问题

> [!abstract]+ 费曼学习法 · 持续思考的问题
> 1. **淋巴结清扫术**（7组、2/4组、10组、4L组）
> 2. **支气管袖式切除**
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
> 13. 于这个世界，我能留下什么

## 常用操作

- `Ctrl+N` 新建笔记 → 拖入收件箱
- `Ctrl+P` 命令面板 → 搜 "Templates: Insert" 插入模板
- `Ctrl+Shift+F` 全文搜索
- `Alt+左键` 在新面板打开链接
