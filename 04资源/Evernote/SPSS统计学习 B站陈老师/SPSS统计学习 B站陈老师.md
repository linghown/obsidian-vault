---
---
## 4.秩和检验

### 1.范围：👉 当数据不服从正态分布，或为等级资料时，用秩和检验

             👉 它是 t 检验 / 方差分析的非参数替代方法

适合秩和检验的数据：

		连续型但**明显偏态分布**
	
			血清指标、肿瘤标志物
		
		等级资料
	
			疗效分级（CR/PR/SD/PD）
		
			TRG 分级（0–3 级）
		
			疼痛评分（0–10 分）
		

❌ 不适合：

		纯分类变量（性别、是/否）
	
		正态分布且方差齐的连续变量（优先 t / ANOVA）
	

### ✅ 1️⃣ 两独立样本秩和检验

Mann–Whitney U 检验

适用：

		两组独立样本
	
		连续 / 等级变量
	
		非正态分布
	

医学例子：

		男 vs 女 肿瘤标志物
	
		治疗组 vs 对照组 中位生存期
	

* * *

### ✅ 2️⃣ 配对样本秩和检验

Wilcoxon 符号秩检验

适用：

		同一患者前后比较
	
		两个时间点
	
		非正态分布
	

医学例子：

		治疗前 vs 治疗后评分
	

* * *

### ✅ 3️⃣ 多独立样本秩和检验

Kruskal–Wallis H 检验

适用：

		≥3 组独立样本
	
		连续 / 等级变量
	
		非正态分布
	

医学例子：

		不同 TRG 分级的指标差异
	
		多种治疗方案比较
	

📌 检验有差异后，需做两两比较

* * *

### ✅ 4️⃣ 多配对样本秩和检验

Friedman 检验

适用：

		同一对象 ≥3 时间点
	
		非正态分布
	

医学例子：

		术前、术后1周、术后1月指标
	

* * *

## 秩和检验 vs t 检验 / ANOVA（对照表）

|     |     |     |
| --- | --- | --- |
| 情况  | 参数检验 | 非参数（秩和） |
| 两独立样本 | 独立样本 t | Mann–Whitney U |
| 两配对样本 | 配对 t | Wilcoxon |
| ≥3 独立样本 | ANOVA | Kruskal–Wallis |
| ≥3 配对样本 | 重复测量 ANOVA | Friedman |

2.数据转换，等级资料+人数，经典3列2组

![[04资源/Evernote/SPSS统计学习 B站陈老师/_resources/SPSS统计学习_B站陈老师.resources/unknown_filename.20.png]]
3.加权
![[04资源/Evernote/SPSS统计学习 B站陈老师/_resources/SPSS统计学习_B站陈老师.resources/unknown_filename.12.png]]

![[04资源/Evernote/SPSS统计学习 B站陈老师/_resources/SPSS统计学习_B站陈老师.resources/unknown_filename.15.png]]

4.秩和检验   分析--非参数检验--旧对话框--2个独立样本
![[04资源/Evernote/SPSS统计学习 B站陈老师/_resources/SPSS统计学习_B站陈老师.resources/unknown_filename.21.png]]![[04资源/Evernote/SPSS统计学习 B站陈老师/_resources/SPSS统计学习_B站陈老师.resources/unknown_filename.22.png]]
5.结果解读
![[04资源/Evernote/SPSS统计学习 B站陈老师/_resources/SPSS统计学习_B站陈老师.resources/unknown_filename.23.png]]
＞0.05，不具备统计学意义

## 3.卡方检验

范围：比较“分类变量”之间是否有关联，不是看均值、不是看大小，而是看比例 / 构成比是否不同。
可以用 χ² 的数据：

		性别（男 / 女）
	
		是否吸烟（是 / 否）
	
		是否发生并发症（有 / 无）
	
		肿瘤分期（Ⅰ / Ⅱ / Ⅲ / Ⅳ）
	
		TRG 分级（0 / 1 / 2 / 3）
	

❌ 不能直接用 χ² 的数据：

		年龄、BMI、血压
	
		各种实验室数值
	

📌 连续变量想用 χ²，必须先分组（如 ≥60 岁 / <60 岁）

### 2️⃣ 比较目的：看“率”或“构成比”

典型问题：男女性 TRG3 的比例是否不同？

### 3️⃣ 数据形式：频数（不是百分比）

χ² 的输入数据必须是：

		**人数（n）**
	

## 三、χ² 检验的关键前提（审稿人会查）

### ⚠️ 1️⃣ 理论频数 ≥ 5（核心红线）

规则：

		≥80% 单元格理论频数 ≥5
	
		任一单元格理论频数 ≥1
	

1.转换数据形式，编码，重新编辑，一般为3列2组别
![[04资源/Evernote/SPSS统计学习 B站陈老师/_resources/SPSS统计学习_B站陈老师.resources/unknown_filename.19.png]]

![[04资源/Evernote/SPSS统计学习 B站陈老师/_resources/SPSS统计学习_B站陈老师.resources/unknown_filename.13.png]]
2.粘贴到SPSS，并编辑变量名称
![[04资源/Evernote/SPSS统计学习 B站陈老师/_resources/SPSS统计学习_B站陈老师.resources/unknown_filename.14.png]]
3.加权人数
![[04资源/Evernote/SPSS统计学习 B站陈老师/_resources/SPSS统计学习_B站陈老师.resources/unknown_filename.12.png]]![[04资源/Evernote/SPSS统计学习 B站陈老师/_resources/SPSS统计学习_B站陈老师.resources/unknown_filename.15.png]]
4.卡方检验    分析--描述统计--交叉表
![[04资源/Evernote/SPSS统计学习 B站陈老师/_resources/SPSS统计学习_B站陈老师.resources/unknown_filename.16.png]]![[04资源/Evernote/SPSS统计学习 B站陈老师/_resources/SPSS统计学习_B站陈老师.resources/unknown_filename.17.png]]
5.结果解读
![[04资源/Evernote/SPSS统计学习 B站陈老师/_resources/SPSS统计学习_B站陈老师.resources/unknown_filename.18.png]]
不具有统计意义

## 2.单因素方差分析

范围：多组间比较，不限于2组，数据必须服从正态分布，且每组方差相等

![[04资源/Evernote/SPSS统计学习 B站陈老师/_resources/SPSS统计学习_B站陈老师.resources/unknown_filename.6.png]]![[04资源/Evernote/SPSS统计学习 B站陈老师/_resources/SPSS统计学习_B站陈老师.resources/unknown_filename.5.png]]![[04资源/Evernote/SPSS统计学习 B站陈老师/_resources/SPSS统计学习_B站陈老师.resources/unknown_filename.7.png]]
方差齐
![[04资源/Evernote/SPSS统计学习 B站陈老师/_resources/SPSS统计学习_B站陈老师.resources/unknown_filename.8.png]]
小结
![[04资源/Evernote/SPSS统计学习 B站陈老师/_resources/SPSS统计学习_B站陈老师.resources/unknown_filename.10.png]]

## 1.独立样本t检验

适用范围：两组间比较，注意必须两组样本均符合正太分布才可。

步骤
1.先进行正态性检验   分析--描述统计--探索(两组分别)
![[04资源/Evernote/SPSS统计学习 B站陈老师/_resources/SPSS统计学习_B站陈老师.resources/unknown_filename.png]]![[04资源/Evernote/SPSS统计学习 B站陈老师/_resources/SPSS统计学习_B站陈老师.resources/unknown_filename.1.png]]
低于0.05的数据不可用，不符合正态分布，采用非参数类检验方法
2.分析--比较均值--平均值
![[04资源/Evernote/SPSS统计学习 B站陈老师/_resources/SPSS统计学习_B站陈老师.resources/unknown_filename.2.png]]![[04资源/Evernote/SPSS统计学习 B站陈老师/_resources/SPSS统计学习_B站陈老师.resources/unknown_filename.3.png]]
结果
![[04资源/Evernote/SPSS统计学习 B站陈老师/_resources/SPSS统计学习_B站陈老师.resources/unknown_filename.4.png]]
莱文方差等同性检验，假定相等，P值＞0.05，看上一行，＜0.05看下一行。
样本分布，描述性数据，问卷调查的数据
分布状况，是否均匀，是否有选择偏差
小结
![[04资源/Evernote/SPSS统计学习 B站陈老师/_resources/SPSS统计学习_B站陈老师.resources/unknown_filename.9.png]]

![[04资源/Evernote/SPSS统计学习 B站陈老师/_resources/SPSS统计学习_B站陈老师.resources/unknown_filename.11.png]]

## 一、医学论文统计方法的总体分类（先建立框架）

医学统计方法可以分为 5 大类：

1️⃣ 描述性统计

2️⃣ 正态性与分布检验

3️⃣ 组间比较（单因素）

4️⃣ 相关与回归分析

5️⃣ 生存分析

📌 90% 的医学论文，主要用的是 **前 3 类 + 简单回归**

* * *

## 二、描述性统计（每篇论文都必须有）

目的：描述样本基本特征

### 常用方法

		均数 ± 标准差（正态分布）
	
		中位数（四分位数）（偏态分布）
	
		频数、百分比（分类变量）
	

常见变量

		年龄、BMI、血压
	
		性别、分期、是否并发症
	

📌 不需要 P 值

* * *

## 三、正态性检验（决定后续方法）

### 常用方法

		**Shapiro–Wilk 检验**（最常用，推荐）
	
		Kolmogorov–Smirnov 检验
	
		Q–Q 图、直方图（辅助判断）
	

📌 小样本时图形判断更重要

📌 正态性 ≠ 必须做检验（但医学论文几乎都写）

* * *

## 四、组间比较（医学论文核心）

### 1️⃣ 两组比较

#### 连续型变量

|     |     |
| --- | --- |
| 情况  | 方法  |
| 正态 + 方差齐 | 独立样本 t 检验 |
| 正态 + 配对数据 | 配对 t 检验 |
| 非正态 | Mann–Whitney U |

#### 分类变量

|     |     |
| --- | --- |
| 情况  | 方法  |
| 理论频数 ≥5 | χ² 检验 |
| 小样本 | Fisher 精确检验 |

* * *

### 2️⃣ 三组及以上比较

#### 连续型变量

|     |     |
| --- | --- |
| 情况  | 方法  |
| 正态  | 单因素方差分析（ANOVA） |
| 非正态 | Kruskal–Wallis H |
