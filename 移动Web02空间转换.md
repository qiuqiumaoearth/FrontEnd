# 空间转换(3D转换)-transform
- 空间:z轴位置与视线方向相同  
![](img/空间.png)  
- 平移:transform:translate3d(x,y,z);
	- transform:translateX();
	- transform:translateY();
	- transform:translateZ();
- 视距 -- perspective
	- 指定观察者与Z=0平面的距离,为元素添加透视效果
	- 透视效果:近大远小,近实远虚
	- 添加给直接父级(取值范围800-1200)
- 空间旋转
	- transform:rotateZ(值)
		- 和平面旋转的样子差不多
	- transform:rotateX(值)
		- 沿着X轴旋转
	- transform:rotateY(值)
		- 沿着Y轴旋转
	- rotate3d(x,y,z,角度度数) :用来设置自定义旋转轴的位置及旋转角度  
		- x,y,z取值为0-1之间的数字
- 左手法则 -- 根据旋转方向确定取值正负
	- 左手握住旋转轴,拇指指向正值方向,其他四个手指弯曲方向为旋转正值方向
- 立体呈现 -- transform-style(给父元素设置,控制子元素)
	- 设置元素的子元素是位于3D空间还是平面中
	- 属性值:flat:子级处于平面中/preserve-3d:子级处于3D空间
	- 步骤:1.父元素添加,transform-style:preserve-3D;2.子级定位;3.调整子盒子的位置(位移或旋转)
- 案例-3D导航
![](img/案例-3D导航.png)  
- 缩放 -- scale
	- transform:scale3d(x,y,z)
***
# 动画 -- animation
- 多组动画
	```html
	<style>
		.box{
			position: relative;
			margin: 100px auto;
			width: 140px;
			height: 140px;
			/* background-color: pink; */
			overflow: hidden;
			
			/* border: 1px solid black; */
			
			background-image: url(../../img/donghuatu.png);
			animation:
			 run 1s steps(12) infinite,
			 move 5s forwards
			 ;
			
		}
		
		/* 当动画的开始状态样式跟盒子默认样式相同,可以省略动画开始状态 */
		@keyframes run {
			/* from{background-position: 0 0;} */
			to{background-position: -1680px 0;}
		}
		
		@keyframes move {
			/* 0%{transform: translate(0);} */
			100%{transform: translate(800px);}
		}
		
	</style>
	```

- animation:动画名称 动画时长 速度曲线 延迟时间 重复次数 动画方向 执行完毕时状态;
	|属性|作用|取值|
	|:---:|:---:|:---:|
	|animation-name|动画名称||
	|animation-duration|动画时长||
	|animation-delay|延迟时间||
	|animation-fill-mode|动画执行完毕时状态|forwards:最后一帧状态<br>backwards:第一帧动画|
	|animation-timing-function|速度曲线|steps(数字):逐帧动画+精灵图|
	|animation-iteration-count|重复次数|infinite为无限循环|
	|animation-direction|动画执行方向|alternate为反向|
	|animation-play-state|暂停动画|paused为暂停,通常配合:hover使用|
	- 速度曲线 :linear匀速运动 /steps:分步动画  将动画分为5步  配合精灵图使用,实现精灵动画
	> 动画名称和动画时长必须赋值  
	> 取值不分延后顺序  
	> 如果有两个时间值,第一个时间表示动画时长,第二个时间表示延迟时间
	```css
	.box{
		width: 200px;
		height: 100px;
		background-color: pink;
		/* animation: one 1s; */
		
		/* animation:动画名称 动画时长 速度曲线 延迟时间 重复次数 动画方向 执行完毕时状态; */
		/* linear匀速运动 */
		/* animation: one 2s linear; */
		
		/* steps:分步动画  将动画分为5步  配合精灵图使用,实现精灵动画*/
		/* animation: one 5s steps(5); */
		
		/* 如果有两个时间值,第一个时间表示动画时长,第二个时间表示延迟时间 */
		/* animation: one 2s 2s; */
		
		/* 重复次数,infinite:无限循环 */
		/* animation: one 2s 3; */
		/* animation: one 2s infinite; */
		
		/* 运动方向, alternate反向*/
		/* animation: one 2s infinite alternate; */
		
		/*  执行完毕时状态; forwards结束状态;backwards开始状态(默认)*/
		/* animation: one 2s forwards; */
		
		
	}
	```

	
- 过渡transform:实现两个状态之间的变化过程
- 动画:实现多个状态之间变化过程,动画过程可控(重复播放,最终画面,是否暂停)
- 定义动画
	```html
	<style>
		div{
			width: 100px;
			height: 100px;
			background-color: pink;
			
			/* 动画时间 5s ; infinite 重复 ; alternate 来来回回*/
			animation: change 5s infinite alternate;
		}
		
		/* @keyframes 动画名称*/
		/* 百分比:表示的意思是动画时长的百分比 */
		@keyframes change {
			0% {
				transform: translate(0);
			}
			
			50%{
				transform: rotate(180deg);
			}
			
			100% {
				transform: translate(600px);
			}
			
			
		}
		
	</style>
	```
- 无缝动画原理:复制开头图片到结尾位置(图片累加宽度=区域宽度)
	- eg:走马灯效果
