# const 优先(数组和对象)
- const语义化更好
- react框架,基本const
- let:基本数据类型,变化赋值的用
- const:引用数据类型,地址不变可以,数组和对象
***
# Web API基本认知
- API作用和分类
	- 作用:使用js去操作html和浏览器
	- 分类:DOM(文档对象模型),BOM(浏览器对象模型)
![](img/js.jpg)
- DOM(文档对象模型)
	- 用来操作网页内容的功能
	- 作用:开发网页内容特效和实现用户交互
	- 把网页当作对象处理
- DOM树
	- 将HTML文档以树状结构直观的表现出来,文档树或DOM树
	- 描述网页内容关系的名词
	- 作用:文档树直观的体现了标签与标签之间的关系
![](img/DOM树.jpg)
- DOM对象
	- 浏览器根基html标签生成JS对象
	- 所有的标签都可以在这个对象上面找到
	- 修改这个对象的属性会自动映射到标签身上

	```html
		<body>
	<div>123</div>
	<script>
		const div = document.querySelector('div')
		// 打印对象
		console.dir(div); //dom对象
	</script>
	</body>
	```
	- document对象
		- 是DOM里提供的一个对象
		- 所以它提供的属性和方法都是用来访问和操作网页内容的
			> document.write()
		- 网页所有的内容都在document里面
*** 
# 获取DOM对象
- 根据CSS选择器来获取DOM元素
	1. 选择匹配第一个元素  
		- 语法:```document.querySelector('css选择器')```  
		- 参数:包含一个或多个有效的CSS选择器字符串
		- 返回值:CSS选择器匹配的第一个元素,一个HTML Element对象
	```html
		<body>
		<div class="box">123</div>
		<div class="box">abc</div>
		<script>
			const div = document.querySelector('div:nth-child(2)')
			const box = document.querySelector('.box')
			console.dir(div);
			// dir就是对象形式
		</script>
	</body>
	```
	2. 选择匹配的的多个元素
		- 语法:```document.querySelectorAll('css选择器')```  
		- 参数:包含一个或多个有效的CSS选择器字符串
		- 返回值:CSS选择器匹配的NodeList对象集合,伪数组,需要for遍历的方式依次给里面的元素做修改
		- 得到的是伪数组
			- 有长度有索引号的数组
			- 但没有pop() push()等数组方法
	```
	document.querySelectorAll('ul li')
	```
- 其他获取DOM元素方法
	
	```javascript
	// 根据 id获取一个元素
	document.getElementById('nav')
	//根据 标签获取一类元素 获取页面 所有div
	document.getElementsByTagName('div')
	//根据 类名获取元素 获取页面 所有类名为w的
	document.getElementsByClassName('w')
	```
***
# 操作元素内容
- 对象.innerText属性
	- 将文本内容添加/更新到任意标签位置
	- 显示纯文本,不解析标签
	```html
		<body>
		<div class="box">我是文字内容</div>
		<script>
			//1.获取元素
			const box = document.querySelector('.box')
			// 2.修改文字内容,对象.innerText属性
			console.log(box.innerText)
			box.innerText = '我是一个盒子'
			box.innerHTML = '<b>我是</b>'
		</script>
	</body>
	```
- 对象.innerHTML属性
	- 将文本内容添加/更新到任意标签位置
	- 会解析标签,多标签建议使用模板字符
***
# 操作元素属性
- 操作元素常用属性
- 操作元素样式属性
- 操作表单元素属性
- 自定义属性