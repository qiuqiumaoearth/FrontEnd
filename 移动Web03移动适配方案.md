# 适配方案
- 屏幕分辨率:纵横向上的像素点数,单位是px
	- pc分辨率:1920*1080/1366*768
	- 缩放150%:1920/150%;1080/150%
	- 硬件分辨率 → 物理分辨率(出厂设置)
	- 缩放调节的分辨率 → 逻辑分辨率(软件/驱动设置)
	- iPhone6/7/8 物理分辨率750 * 1334;逻辑分辨率375 * 667 比例关系2:1
- 视口:显示HTML网页的区域,用来约束HTML尺寸
	```html
	<head>
		<meta charset="UTF-8">
		
		<!-- 视口标签 -->
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<title>Document</title>
	</head>
	```
- 二倍图:防止图片在高分辨率屏幕下模糊失真
	- 现阶段设计稿参考iPhone6/7/8,设备宽度375px产出设计稿
	- 二倍图设计稿尺寸:750px
- 适配方案
	- 宽度适配:宽度自适应
		- 百分比布局
		- flex布局
	- 等比适配:宽高等比缩放
		- rem
		- vw
***
# rem单位
- rem是相对单位
	- rem单位是相对于HTML标签的字号计算结果
	- 1rem = 1HTML字号大小
	- rem是根元素字体尺寸，em是元素自身或者父元素字体尺寸
	- rem里的r是root
- 媒体查询
	- 媒体查询能够检测视口的宽度,让后编写差异化的CSS样式
	- 当某个条件成立,执行对应的CSS样式
	- 媒体查询相当于css的if，条件是各种媒体状态，根据各种状态适配css样式
	- 媒体查询一般不写绝对尺寸, 一般写大于那个尺寸或者小于哪个尺寸
	```html
	<head>
		<meta charset="utf-8">
		<title></title>
		<meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no" />
		<style>
			/* 视口宽度是375px,网页背景色是绿色 */
			/* 媒体查询一般不写绝对尺寸, 一般写大于那个尺寸或者小于哪个尺寸*/
			@media (width:375px) {
				body{
					background-color: green;
				}
			}
			
		</style>
	</head>
	```

- rem-flexible.js
	- flexible.js是手淘开发出的一个用来适配移动端的js库
	- 核心原理就是根据不同的视图宽度给网页中html根节点设置不同的font-size
	```html
	<!DOCTYPE html>
	<html lang="zh">
	<head>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<title>Document</title>
		<style>
			.box{
				width: 5rem;
				height: 3rem;
				background-color: pink;
			}
		</style>
	</head>
	<body>
		<div class="box">
			
			<script src="flexible.js"></script>
		</div>
	</body>
	</html>
	```
- rem:移动适配 
	- 计算68px是多少个rem?(设计稿适配375px视口)
	- n*37.5=68
	- 得到n,也就是rem单位的尺寸  

***
# 单位
- px（像素）—— 绝对单位  
	- 定义：最基础的尺寸单位，代表屏幕上的一个「逻辑像素点」（注意：不是物理像素，Retina 屏等高清屏会用多个物理像素显示 1 个逻辑像素）。    
	- 核心特点：尺寸固定不变，不受屏幕大小、根元素字体等因素影响。比如设置 width: 100px，无论在手机还是电脑上，这个元素的逻辑宽度都是 100px（视觉上的大小会随屏幕分辨率变化，但数值固定）。
- vw（视口宽度单位）—— 相对单位（基于视口）
定义：1vw = 浏览器「可视区域（视口）宽度」的 1%。
核心特点：尺寸随视口宽度动态变化。比如：
视口宽度为 1000px 时，1vw = 10px，20vw = 200px；
视口宽度缩小到 500px 时，1vw = 5px，20vw = 100px。
补充：对应的还有 vh（视口高度单位），逻辑和 vw 一致，只是参考视口高度。
3. rem（根元素 em）—— 相对单位（基于根元素）
定义：1rem = HTML 根元素（<html> 标签）的 font-size 取值。
核心特点：尺寸随根元素字体大小变化，默认情况下浏览器的 <html> 字体大小是 16px，所以默认 1rem = 16px。
比如你设置 html { font-size: 20px; }，那么 1rem = 20px，5rem = 100px；
如果修改 html { font-size: 25px; }，5rem 就变成了 125px。


- less:css预处理器

