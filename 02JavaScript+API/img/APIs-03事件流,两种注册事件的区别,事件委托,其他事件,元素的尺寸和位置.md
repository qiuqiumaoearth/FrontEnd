# 复习css伪类:check

```html
  <style>
    /* 选择被勾选的复选框 */
    .ck:checked {
      width: 20px;
      height: 20px;
    }
  </style>
</head>

<body>
  <input type="checkbox" class="ck">
  <input type="checkbox" class="ck">
  <input type="checkbox" class="ck">
  <input type="checkbox" class="ck">
  <input type="checkbox" class="ck">
</body>
```

---

# 事件流

- 事件流与两个阶段说明

  - 事件流:事件完整执行过程中的流动路径
  - 捕获阶段是从父到子,冒泡阶段是从子到父
    ![](img/事件流.png)
- 事件捕获

  - 从DOM的根元素开始去执行对应的事件(从外到里)
  - addEventListener的第三个参数传入true代表捕获阶段触发,若传入false代表冒泡阶段触发,默认就是false
  - 若是用L0事件(`事件源.on事件=function(){}`)监听,则只有冒泡阶段没有捕获

  ```js
  DOM.addEventListener(事件类型,事件处理函数,是否使用捕获机制)
  ```

  ```html
  <body>
    <div class="boxa">
      <div class="boxb"></div>
    </div>
    <script>
      const a = document.querySelector('.boxa')
      const b = document.querySelector('.boxb')

      a.addEventListener('click', function () {
        console.log('大盒子');
      }, true)
      b.addEventListener('click', function () {
        console.log('小盒子');
      }, true)
      //先出来大盒子,再出来小盒子,也就是先出父元素,再出子元素
    </script>
  </body>
  ```

- 事件冒泡

  - 概念:当一个元素的事件被触发时,同样的事件将会在该元素的所有祖先元素中依次被触发,这一过程被称为事件冒泡
  - 当一个元素触发事件后,依次向上调用所有父级元素的同名事件(同名事件,就是相同的事件类型,比如全是click)
  - 事件冒泡是默认存在的
  - L2事件监听第三个参数是false,或则默认都是冒泡
  - 从子到父
- 阻止冒泡

  - 把事件限制在当前元素内，要阻止冒泡，需要拿到事情对象(eg:e,event)
  - 语法:`事件对象.stopPropagation()`
  - 是一种方法
  - 此方法可以阻断事情流通传播,冒泡阶段和捕获阶段都有用

  ```js
  <script>
    const a = document.querySelector('.boxa')
    const b = document.querySelector('.boxb')

    a.addEventListener('click', function () {
      console.log('大盒子');
    })
    b.addEventListener('click', function (e) {
      console.log('小盒子');
      //阻止流动传播
      e.stopPropagation() //此时点击小盒子,只会打印小盒子
    })
  </script>
  ```

- 阻止默认行为

  ```html
  <body>
    <!-- form action = 是将表单提交到哪里 -->
    <form action="http://www.itcast.cn">
      <input type="submit" name="" id="" value="免费注册">
    </form>
    <a href="http://www.baidu.com">百度</a>
    <script>
      const form = document.querySelector('form')
      form.addEventListener('submit', function (e) {
        //阻止默认行为:提交
        e.preventDefault()
      })

      const a = document.querySelector('a')
      a.addEventListener('click', function (e) {
        e.preventDefault()
      })
    </script>
  </body>
  ```

- 解绑事件

  - on事件方式:直接使用null覆盖就可以实现(L0事件)

  ```html
  <body>
    <button>按钮</button>
    <script>
      const btn = document.querySelector('button')
      btn.onclick = function () {
        alert('点击了')
      }
      btn.onclick = void 0
    </script>
  </body>
  ```

  - addEventListener事件解绑(L2事件)

  ```html
    <script>
    const btn = document.querySelector('button')
    function fn() {
      alert('点击了')
    }
    btn.addEventListener('click', fn)
    //解绑事件
    btn.removeEventListener('click', fn)
  </script>
  ```

- 鼠标经过事件的区别

  - mouseover 和 mouseout 会有冒泡效果
  - mouseenter 和 mouseleave 没有冒泡效果

  ---

# 两种注册事件的区别

- 传统on注册
  - 同一个对象,后面注册的事件会覆盖前面注册(同一个事件)
  - 直接使用null覆盖就可以实现事件的解绑
  - 都是冒泡阶段执行的
- 事件监听注册
  - 语法:`addEventListener(事件类型,事情处理函数,是否使用捕获)`
  - 后面注册的事件不会覆盖前面注册的事件(同一个事件)
  - 可以通过第三个参数去确定是在冒泡阶段或者捕获阶段执行
  - 必须使用 `removeEventListener(事件类型,事情处理函数,获取捕获或则冒泡阶段)`
  - 匿名函数无法被解绑

  ---

# 事件委托

- 优点:减少注册次数,可以提高程序性能
- 原理:事件委托是利用事件冒泡的特点

  - 给父元素注册事件,当我们触发子元素的时候,就会冒泡到父元素身上,从而触发父元素的事件

  ```html
  <body>
  <ul>
    <li>第1个孩子</li>
    <li>第2个孩子</li>
    <li>第3个孩子</li>
    <li>第4个孩子</li>
    <li>第5个孩子</li>
    <li>第6个孩子</li>
    <p>不要变色</p>
  </ul>
  <script>
    //点击每个小li,当前li文字变成红色
    //按照委托的方式
    //1.获取父级
    const ul = document.querySelector('ul')
    ul.addEventListener('click', function (e) {
      // alert(11) //孩子元素因为冒泡,所有点击随便一个孩子都会弹出
      // e.target//我们点击的对象
      // e.target.style.color = 'red' //此时ul里面的每一个孩子都变色

      //只要点击li才有效果
      if (e.target.tagName === 'LI') {
        e.target.style.color = 'red'
      }
    })

    </script>
  </body>
  ```

---

# 其他事件

|属性|作用|说明|
|:---:|:---|:---|
|`scrollLeft`和`scrollTop`|被卷去的头部和左侧值|配合页面滚动`scroll`来用,可读写|
|`clientWidth`和`clientHeight`|获得元素宽度和高度|不包含`border`,`margin`,滚动条用于js获取元素大小,只读属性|
|`offsetWidth`和`offsetHeight`|获得元素宽度和高度|包含`border`,`margin`,滚动条用于js获取元素大小,只读属性|
|`offsetLeft`和`offsetTop`|获取元素距离自己定位的父级元素的左,上距离|获取元素位置的时候使用,只读属性|

- 页面加载事件

  - 加载外部资源(如:图片,外联css和js等),加载完毕时触发的事件
  - 事件名:`load` (所谓的事件名:比如 `click`,`mouseenter`)
    - 可以给其他标签加
    - 监听页面所有资源加载完毕
    - 给window添加load事件
    - 给图片添加load事件,等待图片加载完毕,再去执行function里面的代码
  - 事件名:`DOMcontentLoaded`
    - 只给document加
    - 当初始的HTML文档被完全加载和解析完成之后,`DOMcontentLoaded`事件被触发,而无需等待样式表,图片完全加载

  ```js
  //页面加载事件
  window.addEventListener('load',function(){
    //执行操作
  })
  ```

  ```html
    <script>
    // 等页面资源加载完毕,就回去执行回调函数
    window.addEventListener('load', function () {

      const btn = document.querySelector('button')
      btn.addEventListener('click', function () {
        alert('11')
      })

    })

    </script>
  </head>

  <body>
    <button>按钮</button>
  </body>
  ```

- 页面滚动事件

  - 事件名:scroll
  - 监听整个页面滚动
  - 获取位置scrollLeft和scrollTop(属性)
    - 获取被卷去的大小
    - 获取元素内容往左,往上滚出去看不到的距离
      -这两个值是可读写的

  ```js
  //页面加载事件
  window.addEventListener('scroll',function(){
    //执行操作
  })
  ```

  ```html
  <body>
    <div>
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
    Incidunt debitis quas amet facilis quisquam repudiandaeex. 
    Impedit, nemo. Saepe, adipisci quae? 
    Tempora sit aliquid eveniet porro delectus sequi molestiae non?
    </div>

  <script>
    //页面滚动事件
    const div = document.querySelector('div')
    window.addEventListener('scroll', function () {
      //当滑动页面的时候，控制台就会打印(我滚了!)
      // console.log('我滚了！');
      //找body的话是document.body
      //找html的话是document.documentElement
      // console.log(document.documentElement.scrollTop); //不带单位的数字型

      //给i赋值,获取当前页面向下滚动的高度
      const i = document.documentElement.scrollTop
      //当向下滚动100px的时候,显示div
      // if (i >= 100) {
      //   div.style.display = 'block'
      // } else {
      //   div.style.display = 'none'
      // }

      //可以变成简单三元赋值
      div.style.display = i >= 100 ? 'block' : 'none'

    })

    // div.addEventListener('scroll', function () {
    //   // console.log(111);
    //   console.log(div.scrollTop);
    // })
  </script>
  </body>
  ```

  - 滚动到指定的坐标

  ```js
  //页面滚动到y轴1000像素的位置
  window.scrollTo(0,1000)
  ```

- 页面尺寸事件
  - 会在窗口尺寸改变的时候触发事件
  - 获取宽高
    - 获取元素的可见部分宽高(不包含边框,margin,滚动条等,包含padding)
    - `clientWidth`,`clientHeight`

  ```js
     window.addEventListener('resize',function(){
      //执行的代码
      })
    ```

  ```js
    //检测屏幕宽度:clientWidth
    window.addEventListener('resize',function(){
      let w = document.documentElement.clientWidth
      concole.log(w)
      })
    ```
  
  ```html
  <body>
  <div class="tx">1234567</div>

  <script>
    const tx = document.querySelector('.tx')
    console.log(tx.clientWidth); //包含padding值,不包含boeder值

    //resize 浏览器窗口大小发生变化的时候触发的事件
    window.addEventListener('resize', function () {
      console.log(1);
    })

    </script>
  </body>
    ```

---

- 自定义属性

  ```html
    <body>
      <div data-id='0'>你好</div>
      <script>
        const div = document.querySelector('div')
        console.log(div.dataset.id)

      </script>
    </body>
  ```

---

# 元素的尺寸与位置

- 获取宽高
  - 获取元素的自身宽高,包含元素自身设置的宽高:padding,border
  - `offsetWidth`和`offsetHeight`
  - 获取出来的是数值,数字型
  - 获取的是可视宽高,如果盒子是隐藏的,获取的结果是0
- 获取位置:
  - 获取元素距离自己定位父级元素的左,上距离(有点类似于postion的父绝子相)
  - `offsetLeft`和`offsetTop`是只读属性

  ```html
  <body>
    <div class="box">
      <p>你好</p>
    </div>
    <script>
      const box = document.querySelector('.box')
      const p = document.querySelector('p')

      // console.log(box.offsetLeft); 
      console.log(p.offsetLeft);  //父级有position:relative,那么就是相对于父亲的

    </script>
  </body>
  ```

  - `element.getBoundingClientRect()`返回元素的大小及其相对于视口的位置

  ```html
  <body>
  <div class="box"></div>
  <script>
    const box = document.querySelector('.box')
    console.log(box.getBoundingClientRect());
    //     {
    //     "x": 107.98828125,
    //     "y": 100,
    //     "width": 200,
    //     "height": 200,
    //     "top": 100,
    //     "right": 307.98828125,
    //     "bottom": 300,
    //     "left": 107.98828125
    // }

    </script>
  </body>
  ```
  