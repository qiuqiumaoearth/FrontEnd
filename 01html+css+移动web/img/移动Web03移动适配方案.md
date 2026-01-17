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

---

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
      .box {
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
	```html
	<!DOCTYPE html>
	<html lang="zh">
	<head>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<title>Document</title>
		<style>
			/* 68*29的盒子 */
			.box{
				width: 1.813rem;
				height:0.7733rem;
				background-color: pink;
			}
			
			/* 可以不用引入.js文件，直接利用vw来设置 */
			/* html{
				font-size: 10vw;
			}
			 */

			
		</style>
	</head>
	<body>
		<div class="box">
			
			<script src="flexible.js"></script>
		</div>
	</body>
	</html>
	```




---

# less:是css预处理器,less文件的后缀名是.less
- 现在不用less,原生css也可以嵌套和有变量
- 浏览器不识别less代码,目前阶段,网页要引入对应的css文件
- vscode插件: eady less,保存less文件后自动生成对应的css文件
- 注释:

  - 单行注释 → //注释内容(快捷键:ctrl+/)
  - 块注释 → /* 注释内容 */(快捷键:shift+alt+a)
- less - 运算
  - 加、减、乘直接书写计算表达式
  - 除法需要添加小括号
- less - 嵌套
  - &表示当前选择器,代码写到谁的大括号里面就表示谁 → 不会生成后代选择器
    - 应用：配合hover伪类或者nth-child结构伪类使用
  - 快速生成后代选择器

    ```less
    .father{
        width: 400px;
        height: 400px;
        background: #ccc;
        .child{
            width: 200px;
            height: 200px;
            background: orange;
            a{
                color: red;
                font-size: 20px;

                // &表示当前选择器,代码写到谁的大括号里面就表示谁 → 不会生成后代选择器
                &:hover{
                    background: yellow;
                }
            }


        }
    }
    ```
- less-变量

  - 概念：容器，存储数据
  - 作用：存储数据，方便使用和修改
  - 语法：
    - 定义变量：@变量名：数据
    - 使用变量：css属性：@变量名
  - ```less
    //定义变量
    @mycolor：blue;

    //使用变量
    .box {
      width: 200px;
      height: 200px;
      background: @mycolor;
    }

    a{
        color: @mycolor;
    }
    ```
- less - 导入

  - 导入less公共样式文件
  - 语法：导入@import"文件路径";
  - 提示:如果是less文件可以省略后缀

    > @import  './base.less';
    > @import './base';
	
- less - 导出

  - 写法:在less文件的第一行添加 // out:存储URL
  - 提示:文件夹后面添加

    > // out: ./index.css    导出当前文件并且取名为index.css名字
    > //out: ./css/      导出到某个文件中
	> 
- less - 禁止导出

  - 写法:在less文件第一行添加 :  `//out:false`
  - 就不会生成对应的css文件

- less直接导入
	
	```html
	<link rel="stylesheet/less" type="text/css" href="./less/index.less" />
	<!-- href后面改成自己用的文件名 -->
	 
	<!-- 把less直接变为css，不需要less，变成css再导入less -->
	<!-- 因为这个过程慢，而hx检测到文件改变比较快，所以需要你每次改了less，还需要刷新一下才能看到效果 -->
	<script src="https://cdn.jsdelivr.net/npm/less@4.1.3/dist/less.min.js"></script>
	```





---

# 单位

- px（像素）—— 绝对单位

  - 定义：最基础的尺寸单位，代表屏幕上的一个「逻辑像素点」（注意：不是物理像素，Retina 屏等高清屏会用多个物理像素显示 1 个逻辑像素）。
  - 核心特点：尺寸固定不变，不受屏幕大小、根元素字体等因素影响。比如设置 width: 100px，无论在手机还是电脑上，这个元素的逻辑宽度都是 100px（视觉上的大小会随屏幕分辨率变化，但数值固定）。
- vw（视口宽度单位）—— 相对单位（基于视口）

  - 定义：1vw = 浏览器「可视区域（视口）宽度」的 1%。
  - 核心特点：尺寸随视口宽度动态变化。比如：
  - 视口宽度为 1000px 时，1vw = 10px，20vw = 200px；
  - 视口宽度缩小到 500px 时，1vw = 5px，20vw = 100px。
  - 补充：对应的还有 vh（视口高度单位），逻辑和 vw 一致，只是参考视口高度。
- rem（根元素 em）—— 相对单位（基于根元素）

  - 定义：1rem = HTML 根元素（`<html>` 标签）的 font-size 取值。
  - 核心特点：尺寸随根元素字体大小变化，默认情况下浏览器的 `<html>` 字体大小是 16px，所以默认 1rem = 16px。
  - 比如你设置 html { font-size: 20px; }，那么 1rem = 20px，5rem = 100px；如果修改 html { font-size: 25px; }，5rem 就变成了 125px。

  | 单位 |     参考基准     | 类型 | 转换示例（视口宽 1000px，html font-size=16px） |
  | :--: | :---------------: | :--: | :--------------------------------------------: |
  |  px  |   固定逻辑像素   | 绝对 |             无转换，100px = 100px             |
  |  vw  |   视口宽度的 1%   | 相对 |       10vw = 1000px × 1% × 10 = 100px       |
  | rem | html 的 font-size | 相对 |         6.25rem = 16px × 6.25 = 100px         |
