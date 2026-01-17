- CSS三大特性
	- 1.继承性
	- 2.层叠性
	- 3.优先级  
***
# 优先级/特定性
- 优先级一样的，后面的覆盖前面的
- 越专一越优先，越靠后，越优先
- 优先级高的选择器样式会覆盖优先级低选择器样式
- 优先级，!important > 行内样式 > ID > 类/属性/伪类>元素(标签)/伪元素 > 继承 
- 继承< 通配符选择器 *<标签选择器 p，div<类选择器 class <id选择器  #+id<行内样式 < ！important  
	- 行内式：标签内，作为标签的一个属性
		```html{}
		<div style="color: yellow; font-size: 50px; background-color: black; width: 200px;">行内css</div>
		```
> html标签，也叫html元素(专门在html里叫标签多，css和js里说元素多)  
> 标签更多的说的是<div></div>  而元素还包含属性内容等  
- 特定性是针对属性矛盾的时候 
- 特定性可以查看调试里面specificity(0,0,0) 三个数的大小，前面的数越大，优先级越高  
> 目前可以理解为第一个是ID，第二个是类/属性/伪类，第三个是元素(标签)/伪元素
***
# 盒子模型
- 盒子模型就是一个html元素盒子有哪些部分构成
- 内容区域content
	- 默认就是之前学的w100px+h100px+bgc
- css3的盒子模型:整个的大小,上面的基础加上box-sizing:border-box 就行
- 内边距区域padding
	- 4个值是上 右 下 左
	- 三个值 上 左右 下
	- 两个值 上下 左右
- 边框区域border
	- 属性名,border:10px solid red(分别是粗细,样式,颜色)
	- border-style : 实线solid 虚线dashed 点线dotted
- 外边距区域margin  
	![](css03盒子模型_files/1.jpg)  
	- 合并现象:因为margin是不属于盒子的，margin是共用的,所以共有的margin默认会合并 
		- 4种情况，兄弟合并，父与首子合并，父与末子合并，空元素合并  
			> 兄弟合并的解决办法就是外边距改为内边距  
			> 父子合并就给父亲加个css属性 display:flow-root  
			> 空元素合并就是注意别用空元素写外边距
	- 塌陷现象:互相嵌套的块级元素,子元素的margin-top会作用在父元素上,导致父元素一起往下移  
		- 解决方法:  
			> 给父元素设置display:flow-root→块级格式化缩写BFC  
			> 给父元素设置overflow:hidden  
			> 给父亲元素设置border-top或者padding-top(分隔父子元素的margin-top)  
			> 转换成行内块元素 display:inline-block
	- 最终两者最终距离为margin的最大值
- 很多标签都会有默认的margin和padding  
	> body p ul
	> *{margin:0;padding:0}  
	> 标签居中：margin：0 auto;
***
- 前端页面设计: 从外到内,先宽高后背景,放内容,调内容位置,文字调节
***
