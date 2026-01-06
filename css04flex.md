# 结构伪类选择器  
- 作用: 根据元素在html中的结构位置查找元素(任何标签都可以添加伪类)  

	|选择器|说明|  
	|:---:|:---:|
	|E:first-child{}|匹配父元素中第一个子元素,并且是E元素|  
	|E:last-child{}|匹配父元素中最后一个子元素,并且是E元素|  
	|E:nth-child(n){}|匹配父元素中第n个子元素,并且是E元素|  
	|E:bth-last-child(n){}|匹配父元素中倒数第n个子元素,并且是E元素|  
	|E:hover{}|选中鼠标悬停在元素上的状态，设置样式|  
	
	> 通过n可以组成常见公式 even偶数,odd奇数

***
# 伪元素  
-  能够使用伪元素在网页中创建内容 → 一般页面中的非主体内容可以使用伪元素
-  区别: 元素:html设置的标签|伪元素:由css模拟出的标签效果  
-  伪元素就是用css给这个元素加个孩子

	|伪元素|作用|
	|:---:|:---:|
	|::before|在父元素内容的最前添加一个伪元素|
	|::after|在父元素内容的最后添加一个伪元素|  
	|::first-letter|定位到第一个字|
	|::first-line|定位到第一行字(所谓的第一行,是根据视图大小来说的第一行)|
	
	> 注意:  
	> 必须设置content属性才能生效  
	> 伪元素默认是行内元素
- 修改伪元素里面的值，让它任意
	- 让html 加一个hot标签，同时css伪元素content里面```content: attr(hot)```;
	```html
	 <span class="tu" hot="18.2w" ><img src="assets/song02.jpeg" alt=""></span>
	 ```
	 
	 ```css
	 &::after{
	  	content: attr(hot);
	 }
	 ```
	 



***
# 标准流  
- 1.块级元素独占一行 → 垂直布局
- 2.行内元素/行内亏啊元素一行显示多个 → 水平布局



***
# flex  
## 在父元素上
- flex是一种一维布局（安排盒子如何排列）方式，它可以通过给父元素加一些属性，而控制父元素里面的一个或多个直接子元素如何排列（子元素自身也有属性来定义本身行为)    
- 第1步：变flex → 父盒子设置display: flex;
	```html
	<style>
	    .container{
	        display: flex;
	    }
	</style>
	```  
- flex-direction -- 决定主轴的方向  

	|值|效果|
	|:---:|:---:|
	|row（默认值）|主轴为水平向右，起点在左端。|
	|row-reverse|主轴为水平向左，起点在右端。 |
	|column|主轴为垂直向下，起点在上沿。 |
	|column-reverse|主轴为垂直向上，起点在下沿 |

- flex-wrap -- 确定是否换行（列）  
	- nowrap（默认）：不换行/列。
	- wrap：换行/列，第一行/列在上方/左方（按交叉轴方向换行）。
	- wrap-reverse：换行/列，第一行/列在下方/右方（按交叉轴方向反向换行）。  
- justify-content -- 改变盒子在主轴上的排列方式

	下面假设主轴为从左到右:在父元素上写
	|值|效果|
	|:---:|:---:|
	|flex-start（默认值）|左对齐|
	|flex-end|右对齐 |
	|center|居中 |
	|space-between|两端对齐，项目之间的间隔都相等 |  
	|space-around|每个项目两侧的间隔相等。所以，项目之间的间隔比项目与边框的间隔大一倍|
	|space-evenly|所有间距（元素间、两端）完全相等|

- align-items或align-content -- 交叉轴的对齐方式  

	下面假设交叉轴从上到下：在父元素上写
	|值|效果|
	|:---:|:---:|
	|flex-start|交叉轴的起点对齐|
	|flex-end|交叉轴的终点对齐 |
	|center|交叉轴的中点对齐 |
	|baseline|项目的第一行文字的基线对齐|
	|space-between|两端对齐，项目之间的间隔都相等 |  
	|space-around|每个项目两侧的间隔相等。所以，项目之间的间隔比项目与边框的间隔大一倍|
	|space-evenly|所有间距（元素间、两端）完全相等|
	|stretch（默认值）|如果项目未设置高度（若主轴为纵向，此处为宽度）或设为auto，将占满整个容器的高度（若主轴为纵向，此处为宽度）|

- 在使用flex的前提下
	- 父元素写gap就是设置子元素空隙的
	- 容器 {
	  gap: <row-gap> <column-gap>; 
	}
	- 只作用于子元素之间，不会在容器的边缘（第一个子项前 / 最后一个子项后）额外加间距；


## 在子元素上
> 以下6个属性设置在项目（子元素）上。  
> order  
> flex-grow  
> flex-shrink  
> flex-basis  
> flex  
> align-self
- 在某个子元素上设置属性，单独控制某个子元素的个性排列行为
- order属性
	- order属性定义项目的排列顺序。数值越小，排列越靠前，默认为0。
	```css
		#item3 {
			order: 1;
		}
		#item2 {
			order: 2;
		}
		#item1 {
			order: 3;
		}
	```
- flex-grow属性
	- flex-grow属性定义项目的放大比例，默认为0，即如果存在剩余空间，也不放大。
	- 如果所有项目的flex-grow属性都为1，则它们将等分剩余空间（如果有的话）。如果一个项目的flex-grow属性为2，其他项目都为1，则前者占据的剩余空间将比其他项多一倍。

- flex-shrink属性  
	- flex-shrink属性定义了项目的缩小比例，默认为1，即如果空间不足，该项目将缩小。
	- 如果所有项目的flex-shrink属性都为1，当空间不足时，都将等比例缩小。如果一个项目的flex-shrink属性为0，其他项目都为1，则空间不足时，前者不缩小。
	- 负值对该属性无效。
	![](img/flex-shrink.jpg)  

- flex-basis属性
	- flex-basis属性定义了在分配多余空间之前，项目占据的主轴空间（main size）。浏览器根据这个属性，计算主轴是否有多余空间。它的默认值为auto，即项目的本来大小。
	- 它可以设为跟width或height属性一样的值（比如350px），则项目将占据固定空间。  

- flex
	- flex属性是flex-grow, flex-shrink 和 flex-basis的简写，默认值为0 1 auto。后两个属性可选。
	- 该属性有两个快捷值：auto (1 1 auto) 和 none (0 0 auto)。
	- 建议优先使用这个属性，而不是单独写三个分离的属性，因为浏览器会推算相关值。

- align-self属性
	- align-self属性允许单个项目有与其他项目不一样的对齐方式，可覆盖align-items属性。默认值为auto，表示继承父元素的align-items属性，如果没有父元素，则等同于stretch。
	- stretch（默认值）|如果项目未设置高度（若主轴为纵向，此处为宽度）或设为auto，将占满整个容器的高度（若主轴为纵向，此处为宽度）
