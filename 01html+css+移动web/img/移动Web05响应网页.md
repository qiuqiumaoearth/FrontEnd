# 响应式网页  
## 媒体查询
- 媒体查询 有书写顺序！
- 媒体查询完整写法：@media 关键词 媒体类型 and (媒体类型) {CSS代码}
	- 关键词/逻辑操作符：and\only\not
	- 媒体类型:区分设备类型
		- screen 屏幕/print 打印预览/speech 阅读器/all 不区分类型(默认值,包括以上三种情况)
	- 媒体特性：
		- max-width：最大宽度 → 小于等于max-width生效/max-height
		- min-width：最小宽度 → 大于等于min-width生效/min-height
		- 屏幕方向:orientation(属性) → 值:portrait(竖屏)/landscape(横屏)
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
- 外部CSS
	- 完整写法:<link rel="stylesheet" media="逻辑符 媒体类型 and (媒体特性)" href="xx.css" />
	```html
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Document</title>
	<!-- 视口宽度小于等于768px,网页背景是绿色 -->
	<link rel="stylesheet" media="(max-width:768px)" href="./pink.css" />

	<!-- 视口宽度大于等于1200px,网页背景是粉色 -->
	<link rel="stylesheet" media="(min-width:1200px)" href="./green.css" />
	```



***
## bootstrap
- 目前可以使用链接,不用下载:[链接](https://www.bootcdn.cn/twitter-bootstrap/);找对应需要的复制链接
- 查阅各种功能[中文文档](https://v5.bootcss.com/docs/getting-started/introduction/)
- 带min是压缩版，学习和开发的时候用非压缩的，方便查bug
- 上线的时候用压缩版，减少带宽和流量等
- 使用步骤
	- 1.引入Bootstrap CSS文件
	```html 
	<link href="https://cdn.bootcdn.net/ajax/libs/twitter-bootstrap/5.3.0-alpha1/css/bootstrap.min.css" rel="stylesheet">
	```
	- 2.调用类名: container:响应式布局版心  
	 ```html
	 <div class = "container"> 测试 </div>
	 ```
- 栅格系统
	- 栅格化是指将整个网页的宽度分成12等份,每个盒子占用对应的份数
		- 例如:一行排4个盒子,则每个盒子占3份即可(12 / 4 = 3)
		- 常用布局类:
			- col-*-*:列 (例如:col-xxl-3)
			- row:行
			
			|  |Extra small|Small|Medium|Large|Extra large|Extra extra large|
			|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
			|  |xs|sm|md|lg|xl|xxl|
			|  |<576px|>= 576px|>=768px|>=992px|>=1200px|>=1400px|
			|container (max-width)|None(auto)|540px|720px|960px|1140px|1320px|
			|clss preflx|col-|col-se-|col-md-|col-lg-|col-xl-|col-xxl-|
			
	```html
	<body>
		<!-- 
			视口宽度大于等于1200px,一行排4个盒子 → 3
			视口宽度大于等于768px,一行排2个盒子 → 6
			视口宽度大于等于567px,一行排1个盒子 → 12
			
		 -->
		<!-- 版心  → row → 子级 -->
		<div class="container">
			<div class="row">
				<div class="col-xl-3 col-md-6 col-sm-12">1</div>
				<div class="col-xl-3 col-md-6 col-sm-12">2</div>
				<div class="col-xl-3 col-md-6 col-sm-12">3</div>
				<div class="col-xl-3 col-md-6 col-sm-12">4</div>
				<div class="col-xl-3 col-md-6 col-sm-12">5</div>
			</div>
		</div>
		
	</body>
	```
- 全局样式
	- Button类 
		- 需要调用多类名 叠加
		- btn:默认样式
		- btn-success:成功
		- btn-warning:警告
		- .....
		- 按钮尺寸:btn-lg/btn-sm
		![](img/button类.jpg)
		```html
		<body>
			<button>按钮正常</button>
			<button class="btn">按钮普通类</button>
			<button class=" btn btn-success btn-sm">小按钮成功</button>
			<button class=" btn btn-warning btn-lg">按钮大警告</button>
			
		</body>
		```
	
	- 表格类
		- 需要调用多类名 叠加
		- table:默认样式
		- table-striped:隔行变色
		- table-success:表格颜色
		![](img/表格类.jpg)

		```html
		<table class="table table-striped ">
			<tr class="table-success">
		```
	
	- 组件:components
		- 第一步:引入样式表[中文文档](https://v5.bootcss.com/docs/getting-started/introduction/)
		- 第二步:引入js文件(有动态功能的需要引入)
		- 第三步:复制结构,修改内容

	- 字体图标
		- 只需要调用一个类名
		- 下载:导航/Extend:图标库 → 安装 → 下载安装包 → [bootstrap-icons-1.x.x.zip](https://icons.getbootstrap.com/)
		- 使用:
			1. 复制fonts文件夹到项目目录
			2. 网页引入bootstrap-icons.css文件
			3. 调用CSS类名(图标对应的类名)
			```html
			<i class="bi-android2"></i>
			```
		
			```html
			<head>
				<meta charset="UTF-8">
				<meta name="viewport" content="width=device-width, initial-scale=1.0">
				<link href="https://cdn.bootcdn.net/ajax/libs/twitter-bootstrap/5.3.0-alpha1/css/bootstrap.min.css" rel="stylesheet">
				<title>Document</title>

				<link rel="stylesheet" href="./Bootstrap/font/bootstrap-icons.css" />
				
				<style>
					
					/* 图标放大  改颜色*/
					.bi-android2{
						font-size: 100px;
						color: green;
					}
					
				</style>
				
			</head>
			<body>
				<span class = "bi-android2"></span>
				
				
			</body>
			```
	
	- Font Awesome 图标
		- 和上面字体图标使用方法一样
		- 要使用 Font Awesome 图标，请在 HTML 页面的 <head> 部分中添加以下行：  
		- 1、国内推荐 CDN：
			```html
			<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
			```
		- 2、海外推荐 CDN:  
			```html
			<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
			```
