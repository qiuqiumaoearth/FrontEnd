# const 优先(数组和对象)

- const语义化更好
- react框架,基本const
- let:基本数据类型,变化赋值的用
- const:引用数据类型,地址不变可以,数组和对象

---

# Web API基本认知

- API作用和分类

  - 作用:使用js去操作html和浏览器
  - 分类:DOM(文档对象模型),BOM(浏览器对象模型)
    ![](img/js.jpg)
- DOM(文档对象模型)

  - 用来操作网页内容的功能
  - 作用:开发网页内容特效和实现用户交互
  - 把网页当作对象处理
- DOM树

  - 将HTML文档以树状结构直观的表现出来,文档树或DOM树
  - 描述网页内容关系的名词
  - 作用:文档树直观的体现了标签与标签之间的关系
    ![](img/DOM树.jpg)
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

  1. 选择匹配第一个元素
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

  1. 选择匹配的的多个元素
     - 语法:``document.querySelectorAll('css选择器')``
     - 参数:包含一个或多个有效的CSS选择器字符串
     - 返回值:CSS选择器匹配的NodeList对象集合,伪数组,需要for遍历的方式依次给里面的元素做修改
     - 得到的是伪数组
       - 有长度有索引号的数组
       - 但没有pop() push()等数组方法

  ```
  document.querySelectorAll('ul li')
  ```

- 其他获取DOM元素方法

  ```javascript
  // 根据 id获取一个元素
  document.getElementById('nav')
  //根据 标签获取一类元素 获取页面 所有div
  document.getElementsByTagName('div')
  //根据 类名获取元素 获取页面 所有类名为w的
  document.getElementsByClassName('w')
  ```

---

# 操作元素内容

- 对象.innerText属性

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

- 对象.innerHTML属性

  - 将文本内容添加/更新到任意标签位置
  - 会解析标签,多标签建议使用模板字符

---

# 操作元素属性

- 操作元素常用属性

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

- 操作元素样式属性

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

  - 操作类名(className)操作CSS

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

  - 通过classList操作类控制CSS
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

  ```html
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

- 操作表单元素属性

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

- 自定义属性  
  - 标准属性:标签自带的属性:class id title ,可以直接使用点语法操作的:disable checked selected  
  - 自定义属性:  
    - 在html5中:data-自定义属性  
    - 在标签上一律以data-开头  
    - 在DOM对象上一律以dataset对象方式获取  
    - dataset 获取全部的自定义属性,如果要里面的其中一个,就.名字

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

- 使用场景  
  - 网页中:需要每隔一段时间需要自动执行一段代码
  - eg:网页中的倒计时  
- 开启定时器
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

- 关闭定时器

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
