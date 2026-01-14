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
    事件源.on事件=function(){}

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

  - DOM L2
    事件源.addEventListener(事件,事件处理函数)
    -区别:on方式会被覆盖,addEventListener方式可绑定多次,拥有事件更多特性,推荐使用
- 事件类型
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
