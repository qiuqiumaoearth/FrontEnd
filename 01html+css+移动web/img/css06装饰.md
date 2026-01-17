- 基线
	- 浏览器文字类型元素排版中存在用于对齐的基准线(baseline)
	- ![](img/基线.jpg)
***
# 装饰
- 垂直对齐方式 - vertical-align  

	|属性值|效果|  
	|:---:|:---:|
	|baseline|默认基准线对齐|
	|top|顶部对齐|
	|middle|中部对齐|
	|bottom|底部对齐|
	
	> 当浏览器遇到行内和行内块标签 当作文字处理,默认文字是按基线对齐   
	- 使用:
	```css
	box-sizing: border-box;
	vertical-align: middle;
	```
- 光标类型 -- cursor
	- 设置鼠标光标在元素上时显示的样式
	
	|属性值|效果|
	|:---:|:---:|
	|default|默认值,通常是箭头|
	|pointer|小手效果,提示用户可以点击|
	|text|工字形,提示用户可以选择文字|
	|move|十字光标,提示用户可以移动|
	
- 圆角边框 -- border-radius  
	- 让盒子四个叫变得圆润，增加页面细节
	- 常见取值：数字+px、百分比
	- 圆角边框原理  
		![](img/圆角边框原理.jpg)  
	- 赋值规则：从左上角开始赋值，让后顺时针赋值，没有赋值的看对角
- 溢出部分显示效果 -- overflow  
	- 指的是盒子内容部分所超出盒子范围的区域
	
	|属性值|效果|
	|:---:|:---:|
	|visible|默认值，溢出部分可见|
	|hidden|溢出部分隐藏|
	|scroll|无论是否溢出，都显示滚动条|
	|auto|无论是否溢出，自动显示或隐藏滚动条|  

- 元素本身的隐藏 -- display：none(推荐)  
	- visibility: hidden:这是一种占位隐藏，不推荐
	```css
		div .nav img{
			margin-top: 10px;
			margin-left: 30px;
			display:none ;
		}
		div .nav li a:hover img{
			display: block;
		}
	```
- 元素整体透明度 -- opacity  
	- 让某元素整体(包括内容一起变透明，比如文字，子元素
	- 属性值：0-1之间，0完全透明，1完全不透明

- 让图片等比例占盒子：盒子可能不满
	```less
	img{
		height: 100%;
		object-fit: cover;
		
	}
	```
- 字体图标优先用i标签
	```html
	<div class="title">
		<!-- 标题 -->
		<h4>酷我排行榜</h4>
		<a href="">更多<i class="iconfont icon-right"></i></a>
	</div>
	```

