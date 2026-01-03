- 精灵图

  - 项目中将多张小图片，合并成一张大图片，这张大图片称为精灵图
  - 1.创建一个盒子，设置盒子尺寸和小图尺寸相同
  - 2.将精灵图设置为盒子的背景图片--(因为只要一个小区域)
  - 3.修改背景图片位置
    - 测量小图片左上角坐标，分别取负值设置给盒子的bgp：x y

    ```css
    span{
    	display: inline-block;
    	width: 30px;
    	height: 30px;
    	background-color: pink;
    	background-image: url(../../项目/小兔鲜项目/img/taobao.png);

    	/* 背景图位置属性：改变背景图的位置 */
    	/* 水平方向的位置，垂直方向的位置 */
    	/* 想要向左移动图片，位置取负数 */
    	background-position: -12px -6px;

    }
    ```
- 背景图片大小 -- bgz:宽度 高度;

  - 设置背景图片的大小

  |  取值  |                                                                 场景                                                                 |
  | :-----: | :-----------------------------------------------------------------------------------------------------------------------------------: |
  | 数字+px |                                                            简单方便，常用                                                            |
  | 百分比 |                                                    相对于当前盒子自身的宽高百分比                                                    |
  | contain | 包含，将背景图片等比例缩放，直到不会超出盒子的最大`<br>`如果图的宽或高与盒子的尺寸相同了，另一个方向停止缩放，-- 导致盒子可能有留白 |
  |  cover  |            覆盖，将背景图片等比例缩放，直到刚好填满整个盒子没有空白`<br>`保证宽或高和盒子尺寸完全相同，导致图片显示不全            |
- background连写 (background:color image repeat position/size)
- 盒子阴影 -- box-shadow

  - 给盒子添加阴影效果

  |   参数   |            作用            |
  | :------: | :------------------------: |
  | h-shadow | 必须，水平偏移量，允许负值 |
  | h-shadow | 必须，垂直偏移量，允许负值 |
  |   blur   |        可选，模糊度        |
  |  spread  |       可选，阴影扩大       |
  |  color  |       可选，阴影颜色       |
  |  inset  |  可选，将阴影改为内部阴影  |


  ```css
  .box{
  	width: 200px;
  	height: 200px;
  	background-color: pink;

  	/* 水平偏移；垂直偏移；模糊度；阴影扩大；颜色 */
  	box-shadow: 5px 10px 20px 10px green;
  }
  ```
- 过渡 -- transition

  - 让元素的样式慢慢变化，常配合hover使用

  |    参数    |            取值            |
  | :--------: | :------------------------: |
  | 过渡的属性 | all:所有能过渡的属性都过渡 |
  | 过渡的时长 |         数字+s(秒)         |


  > 1.过渡需要：默认状态和hover状态样式不同，才能有过渡效果
  > 2.transition属性给需要过渡的元素本身加
  > 3.transition属性设置在不同状态中，效果不同的
  >
  >> 给默认状态设置，鼠标移入移出都有过渡状态
  >> 给hover状态设置，鼠标移入有过渡效果，移出没有过渡效果
  >>
  >

  ```css
  .box{
  	width: 200px;
  	height: 200px;
  	background-color: pink;

  	/* 宽度200，悬停的时候宽度600，花费2秒 */
  	/* transition: width 1s, background-color 2s; */

  	/* 如果变化的属性多，直接写all，表示所有 */
  	transition: all 1s;
  }

  .box:hover{
  	width: 600px;
  	height: 600px;
  	background-color: aqua;
  }
  ```

---

# html骨架结构

- DOCTYPE文档说明
- ``<!DOCTYPE html>``文档类型声明，告诉浏览器该网页的HTML版本 > 目前HTML5版本
- 网页语言

  - ``<html lang="en">``标识网页使用的语言
  - 作用：搜索引擎归类+浏览器翻译
  - 常见语言：en英语/zh-CN简体中文
- 字符编码

  - ``<meta charset="utf-8">``标识网页使用的字符编码
  - 作用：保存和打开的字符编码需要统一设置，否则可能会出现乱码
  - 常见字符编码：
    - 1.UTF-8：万国码，国际化的字符编码，收录了全球语言的文字
    - 2.GB2312：6000+汉字
    - 3.GBK：20000+汉字
  - 注意点：开发中 统一使用UTF-8字符编码即可
    ```html
    <!-- 规定网页的字符编码 -->
        <meta charset="UTF-8">

        <!-- ie 兼容性差/edge -->
        <meta http-equiv="X-UA-Compatible" content="IE=edge">

        <!-- 宽度 = 设备宽度 移动端适配 -->
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
    ```

# SEO三大标签  
- SEO:搜索引擎优化
- 作用:让网站在搜索引擎上的排名靠前
- 提升SEO的常见方法:
	- 1.竞价排名
	- 2.将网页制作成html后缀
	- 3.标签语义化(eg: b 和 strong) -- 在合适的地方使用合适的标签  
- SEO三大标签  
	- 1.title:网页标签标题
	- 2.description:网页描述标签
	- 3.keywords:网页关键词标签  
	![](img/2.jpg)
- ico图标设置
	- 显示在标签页标题左侧的小图标,习惯使用ico格式的图标
	- ![](img/3.jpg)
	```html
	<link rel="shortcut icon" href="ico图标路径" type="image/x-icon">
	
	<!-- 浏览器标题栏图标 -->
	<link rel="shortcut icon" href="favicon.ico" type="image/x-icon">
	```
***
# 项目结构  
- 1.1 文件和目录准备  
	1. 新建项目文件夹xtx-pc-client，在VScode中打开  
		- 在实际开发中，项目文件夹不建议使用中文  
		- 所有项目相关文件都保存在xtx-pc-client 目录中  
	2. 复制 favicon.ico 到 xtx-pc-client 目录  
		- 一般习惯将ico图标放在项目根目录  
	3. 复制 images 和 uploads 目录到 xtx-pc-client 目录中  
		- images:存放网站 固定使用的图片素材，如：logo、样式修饰图片。。.等  
		- uploads:存放网站 非固定使用的图片素材，如：商品图片、宣传图片。。...等  
	4. 新建 index html 在根目录  
	5. 新建 css 文件夹保存网站的样式，并新建以下CSS文件：  
		- base.css:基础公共样式,消除默认样式的  
		- common.css:该网站中多个网页相同模块的重复样式，如：头部、底部  
		- index.css:首页样式