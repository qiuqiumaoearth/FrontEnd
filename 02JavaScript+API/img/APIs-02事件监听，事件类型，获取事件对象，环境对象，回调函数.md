# 事件监听(绑定)

- 事件

  - 事件在编程时系统内部发生的动作或者发生的事情
  - 比如用户在网页上单击一个按钮
- 事件监听

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

  - 事件监听版本
    - DOM L0
      - L0事件监听,则只有冒泡阶段没有捕获
      事件源.on事件=function(){}
    - DOM L2
      事件源.addEventListener(事件,事件处理函数)
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

  ---

# 事件类型

- 鼠标点击输入框，获得焦点，开始输入，输入事件，输入完毕鼠标点外面，失去焦点
- 鼠标事件:鼠标触发

  - click:鼠标点击
  - mouseenter:鼠标经过
  - mouseleave:鼠标离开

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

- 表单事件:表单获得光标

  - focus:获得焦点
  - blur:失去焦点
  - input:用户输入事件
  - change:当输入框改变内容的时候触发
- 键盘事件:键盘触发

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

  ---

# 获取事件对象

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
