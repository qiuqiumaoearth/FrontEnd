# Web API基本认知

## API作用和分类

- 作用:使用js去操作html和浏览器
- 分类:DOM(文档对象模型),BOM(浏览器对象模型)
  ![js](img/js.jpg)
- DOM(文档对象模型)

  - 用来操作网页内容的功能
  - 作用:开发网页内容特效和实现用户交互
  - 把网页当作对象处理
- DOM树

  - 将HTML文档以树状结构直观的表现出来,文档树或DOM树
  - 描述网页内容关系的名词
  - 作用:文档树直观的体现了标签与标签之间的关系
    ![DOM树](img/DOM树.jpg)
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
      >
    - 网页所有的内容都在document里面

---

# 获取DOM对象

- 根据CSS选择器来获取DOM元素

## 选择匹配第一个元素d.q

- 语法:``document.querySelector('css选择器')``
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

## 选择匹配的的多个元素d.qA

- 语法:`document.querySelectorAll('css选择器')`
- 参数:包含一个或多个有效的CSS选择器字符串
- 返回值:CSS选择器匹配的NodeList对象集合,伪数组,需要for遍历的方式依次给里面的元素做修改
- 得到的是伪数组
  - 有长度有索引号的数组
  - 但没有pop() push()等数组方法

```txt
document.querySelectorAll('ul li')
```

## 其他获取DOM元素方d.gE

```js
// 根据 id获取一个元素
document.getElementById('nav')
//根据 标签获取一类元素 获取页面 所有div
document.getElementsByTagName('div')
//根据 类名获取元素 获取页面 所有类名为w的
document.getElementsByClassName('w')
```

---

# 操作元素内容

## 对象.innerText属性

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

## 对象.innerHTML属性

- 将文本内容添加/更新到任意标签位置
- 会解析标签,多标签建议使用模板字符

---

# 操作元素属性

## 操作元素常用属性

- 通过js设置/修改标签元素属性，比如通过src换照片
- 最常见的属性比如：href，title，src等
- 语法：``对象.属性 = 值``

```html
<body>
  <img src="./素材/images/1.webp" alt="">
</body>
<script>
  //1.获取图片元素
  const img = document.querySelector('img')
  //2.修改图片对象属性
  img.src = './素材/images/2.webp'

</script>
```

## 操作元素样式属性

- 通过style属性操作CSS
  - 修改样式比较少的情况下有优势
  - 生成的是行内样式表,权重比较高

```html
<script>
  // 1,获取元素
  const box = document.querySelector('.box')
  // 2.修改样式属性,对象.style.样式属性='值',别忘了单位
  box.style.width = '500px'
  box.style.backgroundColor = 'green' //有-的,用小驼峰

</script>
```

## 操作类名(className)操作CSS

- 语法: 元素.className = 'css类名'
- 由于class是关键字，所以使用className去代替
- className是使用新值换旧值，如果需要添加一个类，需要保留之前的类名
- 多个类名操作麻烦

```html
<style>
  .box {
  width: 200px;
  height: 200px;
  background-color: pink;
  }

  .active {
  border: 5px solid red;
  }
  </style>
</head>

<body>
  <div class="box">

  </div>

  <script>
  // 1,获取元素
  const box = document.querySelector('.box')
  // 2.添加类名 class 是个关键字 我们用className
  box.className = 'box active'

  </script>
</body>
```

## 操作类名(classList)操作CSS

- 解决className容易覆盖以前的类名，我们通过classList方式追加和删除类名

  - 语法

  ```txt
  // 追加一个类
  元素.classList.add('类名')

  //删除一个类
  元素.classList.remove('类名')

  //切换一个类
  元素.classList.toggle('类名')
  ```

  ```js
  <script>
    // 1.获取元素
    const box = document.querySelector('.box')
    // 2.追加一个类名 add()类名不加点,并且是字符串
    box.classList.add('active')
    // 3.移除一个类名 remove()类名不加点,并且是字符串
    box.classList.remove('box')
    // 4.切换类名 toggle() 有还是没有,有就移除,没有就添加
    box.classList.toggle('move')

    // 可以直接连写
    document.querySelector('.box').classList.add('active')
    </script>
  ```

## 操作表单元素属性

- 获取:DOM对象.属性名
- 设置:DOM对象.属性名 = 新值
- 属性:(只接受布尔值的)checked,disabled

```html
  <body>
    <input type="text" name="" id="" value="电脑">

    <script>
      // 1.获取元素
      const input = document.querySelector('input');
      // 2.修改value属性
      input.value = '手机';
    </script>
  </body>
```

```html
<body>
    <input type="checkbox" name="" id="" value="nihao">
    <button>按钮</button>
    <script>
      const input = document.querySelector('input');
      input.checked = true;
  
      const button = document.querySelector('button');
      button.disabled = false; //默认是false,不禁用
    </script>
</body>
```

## 标准属性

- 标签自带的属性:class id title
- 可以直接使用点语法操作的:disable checked selected

## 自定义属性

- 在html5中:data-自定义属性
- 在标签上一律以data-开头
- 在DOM对象上一律以dataset对象方式获取
- dataset 获取全部的自定义属性,如果要里面的其中一个,就.名字
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

  ```html
  <body>
    <div class="box" data-id="123">盒子</div>

    <script>
      const div = document.querySelector('div');
      console.log(div.dataset.id); // 获取自定义属性的值
      div.dataset.id = '456'; // 修改自定义属性的值
    </script>
  </body>
  ```

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
    <input type="text" value="" data-id="0" data-name="andy">
    <input type="tetx">
    <div data-name="yy"></div>
    <div data-name="ww"></div>
    <script>
      const inp = document.querySelector('input[value]')

      //自定义属性里面所有的
      console.log(inp.dataset);  //DOMStringMap {id: '0', name: 'andy'}

      //选择某一个自定义属性,同时后面可以加=,给这个id属性赋值
      console.log(inp.dataset.id);


    </script>
  </body>
  ```

---

# 定时器-间歇函数

## 使用场景

- 网页中:需要每隔一段时间需要自动执行一段代码
- eg:网页中的倒计时

## 开启定时器

- 作用:每隔一段时间调用这个函数
- 间隔时间单位是毫秒
- 函数名不需要加括号
- 定时器返回的是一个id数字

  ```txt
  setInterval(函数,间隔时间)
  ```

  ```html
  <body>
    <script>
    // 方法一
    setInterval(function () {
      document.write('nihao<br>');
    }, 1000);

    //方法二
    function writeHello() {
      console.log('nihao');
    }
    setInterval(writeHello, 1000);
    </script>
  </body>
  ```

## 关闭定时器

```txt
  let 变量名 = setInterval(函数,间隔时间)
  clearInterval(变量名) //实际上变量名返回的是id,用唯一id来关闭
```

```js
  function writeHello() {
      console.log('nihao');
    }
    let a = setInterval(writeHello, 1000);
    // 停止间歇函数
    clearInterval(a);
```

---

# 事件监听(绑定)

## 事件

- 事件在编程时系统内部发生的动作或者发生的事情
- 比如用户在网页上单击一个按钮

## 事件监听

- 让程序检测是否有事情产生,一旦有事件触发,就立即调用一个函数做出响应,也成为绑定事件或者注册事件
- 比如:鼠标经过显示下拉菜单,点击可以播放轮播图
- 语法:

```txt
元素对象.addEventListener('事件类型','要执行的函数')
```

- 事件监听三要素

  - 事件源:那个dom元素被事件触发了,要获取dom元素
  - 事件类型:用什么方式触发,比如鼠标单击click,鼠标经过mouseover等
  - 事件调用的函数:要做什么事

  ```html
  <body>
    <button>按钮</button>
    <script>
      const btn = document.querySelector('button')
      //修改元素样式

      btn.addEventListener('click', function () {
        alert('点击了')

      })
    </script>
  </body>
  ```

## 事件监听版本(L0和L2)

### DOM L0

- L0事件监听,则只有冒泡阶段没有捕获
- 事件源.on事件=function(){}

### DOM L2

- 事件源.addEventListener(事件,事件处理函数)
  -区别:on方式会被覆盖,addEventListener方式可绑定多次,拥有事件更多特性,推荐使用

```html
  <body>
    <button onclick="alert('11')">按钮</button> //行内js
    <script>
        const btn = document.querySelector('button')
        btn.onclick = function () {
            alert('22')  
        }  //会覆盖
    // 这两种本质是一样的
      </script>
  </body>
```

### 两种注册事件的区别

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

# 事件类型

## 鼠标事件

- 鼠标点击输入框，获得焦点，开始输入，输入事件，输入完毕鼠标点外面，失去焦点
- 鼠标事件:鼠标触发

  - click:鼠标点击
  - mouseenter:鼠标经过
  - mouseleave:鼠标离开
  - 鼠标经过事件的区别
    - mouseover 和 mouseout 会有冒泡效果
    - mouseenter 和 mouseleave 没有冒泡效果

  ```html
  <body>
    <div class="box"></div>
      <script>
      const div = document.querySelector('div')
      div.addEventListener('mouseenter', function () {
          console.log('nihao')
      })
    </script>
  </body>
  ```

## 表单事件:表单获得光标

- focus:获得焦点
- blur:失去焦点
- input:用户输入事件
- change:当输入框改变内容的时候触发

## 键盘事件:键盘触发

- keydown:键盘按下触发

```html
<body>
  <input type="text" name="" id="">
  <script>
      let inp = document.querySelector('input')
      inp.addEventListener('keydown', function (e) {
          // let f = e
          console.log(e) //判断输入的是那个键
      })

      inp.addEventListener('input', function () {
        console.log(inp.value)  //打印输入框中的内容
    })
  </script>
</body>
```

- keyup:键盘抬起触发
  ------------------

# 获取事件对象e

- 使用场景:按下回车键可以发布新闻
- 语法:在事件绑定的回调函数的第一个参数就是事件对象(event,ev,e)
- 常用的部分属性
  - type:获取当前的事件类型
  - clientX/clientY:获取光标相对于浏览器可见窗口左上角位置
  - offsetX/offsetY:获取光标相对于当前DOM元素左上角的位置
  - key:用户按下的键盘键的值,现在不提倡使用keyCode

```txt
元素.addEventListener('click',function(e){
  console.log(e) // 返回按了那个键
})

```

```html
<body>
  <input type="text">
  <script>
      const inp = document.querySelector('input')
      inp.addEventListener('keyup', function (e) {
          // console.log(e.key)
          if (e.key === 'Enter') {
              console.log('我按下了回车键')
          }
      })
  </script>
</body>
```

```js
<script>
    const str = '     ink   '
    console.log(str.trim())
    //去除字符串左右两边的空格
</script>
```

---

# 环境对象

- 环境对象:指的是函数内部特殊的变量this,它代表着当前函数运行时所处的环境
- 谁调用,this指向谁

```html
<body>
  <button>按钮</button>
  <script>
    //每个函数里面都有this环境对象,普通函数里面this指向的时window
    function fn() {
      console.log(this)
    }
    window.fn()

    const btn = document.querySelector('button')
    btn.addEventListener('click', function () {
      console.log(this)  //打印的是当前选中的button标签 :<button>按钮</button>
    })
  </script>
</body>
```

```js
const btn = document.querySelector('button')
btn.addEventListener('click', function () {
  // console.log(this)  //打印的是当前选中的button标签 :<button>按钮</button>
  // btn.style.color = 'red'
  this.style.color = 'red' //现在可以这样写
})
```

---

# 回调函数

- 如果将函数A作为参数传递给函数B时,我们称函数A为回调函数

```js
<body>
  <button>按钮</button>
  <script>
    function fn() {
      console.log('我是回调函数.....')
    }

    //fn作为参数传递给了setInterval,fn就是回调函数
    setInterval(fn, 1000)

    const btn = document.querySelector('button')
    btn.addEventListener('click', function () {
      console.log('我也是回调函数.....')
    })

  </script>
</body>
```

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

## 事件流与两个阶段说明

- 事件流:事件完整执行过程中的流动路径
- 捕获阶段是从父到子,冒泡阶段是从子到父
  ![事件流](img/事件流.png)

## 事件捕获

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

## 事件冒泡

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

## 阻止默认行为e.pD()

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

## 解绑事件

### on事件方式=void 0

- 直接使用null覆盖就可以实现(L0事件)

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

### aEL事件方式:rEL(事件,函数)

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

---

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

|                属性                | 作用                                      | 说明                                                           |
| :--------------------------------: | :---------------------------------------- | :------------------------------------------------------------- |
|   `scrollLeft`和 `scrollTop`   | 被卷去的头部和左侧值                      | 配合页面滚动 `scroll`来用,可读写                             |
| `clientWidth`和 `clientHeight` | 获得元素宽度和高度                        | 不包含 `border`,`margin`,滚动条用于js获取元素大小,只读属性 |
| `offsetWidth`和 `offsetHeight` | 获得元素宽度和高度                        | 包含 `border`,`margin`,滚动条用于js获取元素大小,只读属性   |
|   `offsetLeft`和 `offsetTop`   | 获取元素距离自己定位的父级元素的左,上距离 | 获取元素位置的时候使用,只读属性                                |

## 页面加载事件

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

## 页面滚动事件scroll

- 事件名:scroll
- 监听整个页面滚动

### 获取位置sLeft和sTop

- scrollLeft和scrollTop(属性)
- 获取被卷去的大小
- 获取元素内容往左,往上滚出去看不到的距离
- 这两个值是可读写的
- 获取页面的向下滚动高度 `document.documentElement.scrollTop`

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

## 滚动到指定的坐标sT

```js
//页面滚动到y轴1000像素的位置
window.scrollTo(0,1000)
```

## 页面尺寸事件

- 会在窗口尺寸改变的时候触发事件

### 获取宽(cW+CH)不包含

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

## 元素的尺寸与位置

### 获取宽高(ofW+ofW)包含

- 获取元素的自身宽高,包含元素自身设置的宽高:padding,border
- `offsetWidth`和 `offsetHeight`
- 获取出来的是数值,数字型
- 获取的是可视宽高,如果盒子是隐藏的,获取的结果是0

### 获取位置(ofL和ofT)

- 获取元素距离自己定位父级元素的左,上距离(有点类似于postion的父绝子相)
- `offsetLeft`和 `offsetTop`是只读属性

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

- `element.getBoundingClientRect()`
- 返回元素的大小及其相对于视口的位置

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

# 日期对象Date()

- 让网页显示时间

## 实例化new

- 在代码中发现了 `new`关键字时,一般将这个操作称为实例化

  ```html
  <body>
    <script>
      //实例化
      //1.得到当前时间
      const date = new Date()
      console.log(date); //返回值:Sat Jan 17 2026 20:13:25 GMT+0800 (中国标准时间)
      //2.指定时间
      const date1 = new Date('2022-5-1 08:30:00')
      console.log(date1);//Sun May 01 2022 08:30:00 GMT+0800 (中国标准时间)
    </script>
  </body>
  ```

## 日期对象方法

| 方法          | 作用             | 说明               |
| :------------ | :--------------- | :----------------- |
| getFullYear() | 获得年份         | 获取四位年份       |
| getMonth()    | 获得月份         | 取值0-11           |
| getDate()     | 获得月份的每一天 | 不同月份取值也不同 |
| getDay()      | 获取星期         | 取值为0-6          |
| getHours()    | 获取小时         | 取值为0-23         |
| getMinutes()  | 获取分钟         | 取值为0-59         |
| getSeconds()  | 获取秒           | 取值为0-59         |

- `date.tolocaleString() //返回2026/1/17  20:11:28`
- `date.tolocaleDateString() //返回2026/1/17`
- `date.tolocaleTimeString() //返回20:11:28`

```javascript
  <script>
    //1.获取日期对象
    const date = new Date()
    //使用里面的方法
    console.log(date.getFullYear()); //2026
    console.log(date.getMonth() + 1); //1
    console.log(date.getDate()); //17
    console.log(date.getDay()); //6
  </script>
```

```javascript
<body>
  <div class="box"></div>
  <script>
    //将当前时间以YYYY-MM-DD HH:mm形式显示在页面
    const div = document.querySelector('div')
    function getMyDate() {

      const date = new Date()
      let year = date.getFullYear()
      let month = (date.getMonth() + 1).toString().padStart(2, '0')
      let day = (date.getDate() + 1).toString().padStart(2, '0')
      let hours = (date.getHours() + 1).toString().padStart(2, '0')
      let minutes = (date.getMinutes() + 1).toString().padStart(2, '0')
      let seconds = (date.getSeconds() + 1).toString().padStart(2, '0')
      return `今天是:${year}年-${month}月-${day}日 ${hours}:${minutes}:${seconds}`
    }

    div.innerHTML = getMyDate()

    //定时器一秒一变
    setInterval(function () {
      div.innerHTML = getMyDate()
    }, 1000)
  </script>
</body>
```

## 时间戳

- 是指从1970年01月01日00时00分00秒起至现在的毫秒数,是一种特殊的计量方式
- 1000ms 就是一分钟

### 获取时间戳

- 使用get Time()方法
  - 可以返回指定的时间戳

```javascript
const date = new Date()
    console.log(date.getTime());
```

- 简写 +new Date()
  - 可以返回指定的时间戳

```javascript
 console.log(+new Date());
 console.log(+new Date('2022-4-1 18:30:00')); //返回当前的时间

```

```js
<body>
  <script>
    const end = +new Date('2026-01-30 08:30:00'); // 记录结束时间

    //定时器
    // setInterval(function(){}) 的另一种直接 =>
    setInterval(() => {
      const now = +new Date();
      const duration = end - now; // 计算耗时
      const seconds = Math.floor((duration / 1000) % 60);
      const minutes = Math.floor((duration / (1000 * 60)) % 60);
      const hours = Math.floor((duration / (1000 * 60 * 60)) % 24);
      const days = Math.floor(duration / (1000 * 60 * 60 * 24));
      document.body.innerHTML = `距离2026年1月30日08:30:00还有${days}天${hours}小时${minutes}分钟${seconds}秒`;
    }, 1000);

  </script>
</body>
```

- 使用 Date.now()

```javascript
console.log(Date.now());
```

---

# 节点操作

## DOM节点

- DOM树里面每一个内容都称之为节点

### 节点类型

- 元素节点
  - 所有的标签 比如body,div
  - html是根节点

- 属性节点
  - 所有的属性 比如href

- 文本节点
  - 所有的文本

## 查找节点

### 父节点查找

- 子元素..parentNode
- 返回最近一级的父节点,找不到就返回为null

```html
 <script>
    const baby = document.querySelector('.baby');
    const dad = document.querySelector('.dad');
    console.log(baby);  //返回dom对象 <div class="baby">222</div>
    console.log(baby.parentNode); //返回父节点 <div class="dad">11 <div class="baby">222</div></div>

  </script>
```

### 子节点查找

- childNodes
  - 获得所有子节点,包括文本节点(空格,换行),注释节点等等
- 父元素.children
  - 仅获得所有元素节点
  - 返回的还是一个伪数组
  - 遍历

```html
  <script>
    const ul = document.querySelector('ul')
    const lis = ul.children
    console.log(lis); // HTMLCollection(8) [li, li, li, li, li, li, li, li]
    console.log(ul.childNodes); // NodeList(15) [text, li, text, li, text, li, text, li, text, li, text, li, text, li, text]
  </script>
```

### 兄弟关系查找

- 下一个兄弟节点:`li2.previousElementSibling`
- 上一个兄弟节点:`i2.nextElementSibling`

```html
  <script>
    const li2 = document.querySelector('li:nth-child(2)')
    console.log(li2.previousElementSibling); // 上一个兄弟元素  1
    console.log(li2.nextElementSibling); // 下一个兄弟元素  3
  </script>
```

## 增加节点

- 创建一个新节点
- 把创建的新的节点放入到指定的元素内部
