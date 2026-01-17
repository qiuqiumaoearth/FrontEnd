# 平面转换(2D转换)-transform  
- 如果又要居中又要缩放,这两个值放在一起
- 为元素添加动态效果,一般与过渡transition配合使用
- 改变盒子在平面内的形态(位移,旋转,缩放,倾斜)

- 平移 -- transform:translate(x轴移动距离;y轴移动距离)
	- 取值:px/百分比(参照盒子自身尺寸计算结果)/正负均可
	- translate()只写一个值,表示沿着X轴移动
	- 单独设置X或Y轴移动距离:translateX()或translateY()
	```css
	<style>
		.father{
			width: 500px;
			height: 300px;
			/* background-color: black; */
			margin: 100px auto;
			border: 1px solid #000;
			
		}
		
		.son{
			width: 200px;
			height: 100px;
			background-color: pink;
			
			/* 儿子要设置transition */
			/* 画面过渡 */
			transition: all 0.5s;
		}
		
		/* 鼠标放入到父盒子,son改变位置 */
		.father:hover .son{
			/* transform: translate(200px,100px); */
			
			/* 百分比:参照盒子自身尺寸计算 */
			transform: translate(50%,100%);
		}
		
		
	</style>
	```
- 旋转 -- transform:rotate(旋转角度)
	- 角度单位:deg
	- 取正,顺时针旋转;取负,逆时针旋转
	- 改变转换原点(加在图片自身上)
		- 默认情况下,转换原点是盒子中心点
		- 属性:transform-origin:水平原点位置 垂直圆点位置;
		- 取值:方位名词(left,top,right,bottom,center)/像素单位/百分比
- 缩放 -- transform:scale(缩放倍数)/transform:scale(X轴缩放倍数,Y轴缩放倍数)
- 倾斜 -- transform:skew(倾斜角度deg)
***
# 背景图background-image
- 渐变
	- 渐变是多个颜色是逐渐变化的效果,一般用于设置盒子背景
	- 颜色透明:transparent
	- 线性渐变 -- linear-gradient
		- 渐变方向:to 方位名词/角度度数
		- 终点位置:百分比/像素px
		```html
		<style>
			.box{
				margin: 100px auto;
				width: 50px;
				height: 200px;
				/* background-color: pink; */
				transition: all 1s;
				/* background-image: linear-gradient(red yellow); */
				background-image: linear-gradient(red, yellow, blue);
				
				/*  渐变方向,颜色1 终点位置,颜色2 终点位置 */
				background-image: linear-gradient(red 10px, yellow 20px, blue 30px);
			}
		</style>
		```

	- 径向渐变
		- 给按钮添加高光效果
		- 径向渐变 -- radial-gradient
			- 半径at 圆心,
			- 颜色1 终点位置,
			- 颜色2 终点位置