# css是选择器/属性/值(层叠性，后面的覆盖前面的)

- 选择器，就是选择(匹配)html里标签
- 三种书写位置
  - 行内式：标签内，作为标签的一个属性

    ```html{}
    <div style="color: yellow; font-size: 50px; background-color: black; width: 200px;">行内css</div>
    ```

  - 内嵌式：网页head内，在style标签中，title标签下面

    ```html{}
    <style>
     p{
      color: red;
      font-size: 24px;
     }
     h1{
      /* px 像素 */
      color: aqua;
      font-size: 24px;
      background-color: red;
      width: 48px;
      height: 48px;
     }
    </style>
    ```

  - 外联式--项目：外部引入.css文件中；用link标签在网页中引入

    ```html{}

    <!-- 关系：样式表 -->
    <link rel="stylesheet" href="style.css" />
    ```

- 注释:ctrl+?

---

# 选择器

- 类选择器-把标签分类--结构 .类名（css属性名:属性值;）
  - 类名 数字、字母、下划线构成，不能以数字或中划线开头
  - 在title标签下面，下面stlyle里面创建或者link引入都可以用，只要是一类
  - 用.+分类名--快速创建

  ```html
   <head>
   <meta charset="utf-8">
   <title></title>
   <style>
    .ys{
     color: red;
    }
   </style>
  </head>
  <body>
   <div class="ys">你好</div>
  </body>
  ```

---

- id选择器：结构：#id选择器{css属性名：属性值;}

  - 是单独指定给某个元素的样式的
  - 一个网页里，id是不能重复的,相当于身份证号，只能用一次

  ```html
   <head>
   <meta charset="utf-8">
   <title></title>
     <style>
     #mu{
      background-color: aqua;
     }
    </style>
   </head>
   <body>
    <div id="mu">目录</div>
   </body>
  ```

---

- 通配符选择器： 结构：*{css属性名：属性值;}

  - 选择所有标签的选择器,变成想要的样式

  ```html
  <head>
   <meta charset="utf-8">
   <title></title>
   <style>
    *{
     color: red;
    }
   </style>
  </head>
  <body>
   <div>目录</div>
   <a href="#">链接</a>
   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
   <div>测试</div>
  </body>
  ```

- 属性选择器

```html
  <style>
    input[value] {
      color: red;
    }

    div[data-name] {
      width: 10px;
      height: 20px;
      border: 1px solid black;
    }

    div[data-name=yy] {
      background-color: yellow;
    }
  </style>
</head>

<body>
  <input type="text" value="">
  <input type="tetx">
  <div data-name="yy"></div>
  <div data-name="ww"></div>
</body>
```

---

- 字体和文本样式
  - 某个文字的样式的属性，一般以font开头
  - 一段文字整体样式，一般以text开头

---

# font 复合属性

- 取值 font：style weight size/line-height family;

|     说明     |     属性名     |                                取值                                |
| :----------: | :-------------: | :----------------------------------------------------------------: |
|   字体大小   |    font-size    |                         数字+px(像素)/单位                         |
|   字体粗细   |   font-weight   |                   normal正常/加粗bold或者400-700                   |
|   字体倾斜   |   font-style   |                       normal正常/倾斜italic                       |
|   字体系列   |   font-family   | 第一个是具体字体名,第二个是字体分类,第三个是衬线字体还是非衬线字体 |
|   文本缩进   |   text-indent   |   数字+px/数字+em(em是当前元素的字体尺寸或者父级元素的字体尺寸)   |
| 文本水平对齐 |   text-align   |                         left/center/right                         |
|   文本修饰   | text-decoration |   underline下划线/line-through删除线/overline上划线/none无装饰线   |
|     行高     |   line-height   |                            数字+px/倍数                            |

> 行高等于盒子高，单行文字就可以垂直方向居中
> 行高是上间距＋子大小＋下间距

```html
<head>
.a{
 font-family: "宋体","黑体",serif;
}
</head>
```

> 衬线字体：serif
> 无衬线字体：sans-serif
> 等宽字体：monospace

---

# 颜色

- rgb(r g b /0.3)  斜杠后面是透明度
- rgb表示颜色：0表示没有，255表示有100% ——eg:rgb(0,0,0)
- 十六进制颜色：00-红 00-绿 00-蓝（rgb）00表示没有，FF表示100%——eg:#00ff00
- rgba表示颜色；rgb相同，a表示透明度(0~1) ——eg:rgba(255,0,0,0.3)

---

# 标签居中：margin：0 auto

# 内容居中：text-align:center

- 快捷键：w50+h50   让后按tab
