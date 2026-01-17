# 运行在浏览器的js分这么几部分

1. 是js本身的逻辑语法和数据结构等
2. 和文档(html、css)交互，控制网页变化
3. 和浏览器交互控制浏览器行为
4. 是和后端交换数据

# JS简介 -- MDN文档

- JavaScript -- 是一种运行在客户端(浏览器)的编程语言,实现人机交互
- js是类型比较宽泛的语言
- html和css -- 是一种标记语言
- js的组成
  - js的语言基础:ECMAScript
    - 变量,分支语句,循环,对象
  - Web APIs:
    - DOM 操作文档：对页面元素移动、大小、添加删除等操作
    - BOM 操作浏览器：页面弹窗、检测窗口宽度、存储数据到浏览器

# js书写位置

- 内部js
  - 在html里面，用script标签，`</body>`上面
  - 写在下面的body，来控制上面的元素
  - 拓展：alert("你好")页面弹出警告对话框

    ```html
    <body>
    <!-- 内部js -->


    <script>
     // 页面弹出警示框
     alert("你好")

    </script>
    </body>
    ```

- 外部js
  - 引入 script标签 + src属性

    ```html
    <body>

    <!-- 外部js -->
    <script src="02js书写位置-外部.js"></script>
    </body>
    ```

- 内联/行内js
  - 代码写在标签内部
  - js的字符串尽量用单引号
  - 这样就可以双引号里放单引号了

    ```html
    <body>
     <button onclick="alert('nihao')" >点击</button>
    </body>
    ```

- js规则，两句话换行，可以不加分号；如果两句话之间不加分号并且不换行就不行
- html和css一句话后面一定要加分号

# js输入输出语法

- 执行顺序
  - 按HTML文档流执行js代码
  - alert()和prompt(),会跳过页面渲染先被执行
- 字面量 - literal(类比python的数据类型)
  - 1000是数字字面量
  - 'heima'是字符串字面量
  - []数组字面量
  - {}对象字面量

1. 输出语法

   - document.write('你好')
     - 这是向文档输出/向body内输出内容
     - 如果输出的内容写的是标签，也会被解析成网页元素
   - alert('xx')
     - 页面弹出警告对话框
     - alert('')是省略方式，全写是window.alert()
     - 所以这个是在window (窗口)中输出
   - console.log('对不对')
     - 控制台输出语法，程序员调试使用
     - 控制台指的是f12里的console面板

   ```html
   <script>
    // 1.文档输出内容
    document.write('你好')
    document.write('<h1>标题</h1>')


    ```javascript
    // 两种输出
    // document.write(`姓名：${uname}`)
    // document.write('姓名'+uname)
    ```

    // 2.控制台打印输出给程序员
    // clog + tap
    console.log('对不对')

    // 3.输入语句
    prompt('请输入你的年龄')
   </script>

   ```
2. 输入语句

   - prompt('请输入你的年龄')
     - 显示一个对话框，对话框中包含一条文字信息，用来提示用户输入文字
     - 所以这个是在window (窗口)中输出

# 变量

- 变量是什么

  - 是计算机中用来存储数据的容器，是一个用来装东西的盒子
- 变量的基本使用 -- 提倡一行只声明一个变量

  - 1.声明变量(创建变量)：声明关键词+变量名(标识)
    - 语法：let 变量名
  - 2.变量赋值：赋值号:"="

  ```html
  <script>
   // 1.声明一个年龄变量
   let age

   // 2.给变量赋值
   age = 18

   // 3.输出age变量
   alert(age)

   //4.声明的同时直接赋值，变量初始化
   let age = 18

  </script>
  ```

  - 3.更新变量

  ```html
  <script>
   // 更新变量
   let age = 18

   age = 19
   console.log(age)

  </script>
  ```

  - 4.声明多个变量，中间用逗号隔开

  ```html
  <script>

   let age = 18, uname = 'pink'

   console.log(age, uname)

  </script>
  ```

  ```javascript
  // 加分号
  // ;[num1,num2] = [num2,num1]
  ```

- 变量的本质

  - 内存：计算机中存储数据的地方，相当于一个空间
  - 变量本质：是程序在内存中申请一块用来存放数据的小空间
- 变量命名规则与规范

  - 规则
    - 不能用关键词 let
    - 不能数字开头
    - 严格区分大小写
  - 规范
    - 起名有意义
    - 遵循小驼峰命名法
      - 第一个单词首字母小写，后面每个单词首字母大写：userName
    - 普通变量和函数小驼峰，函数动词加名词
- 数组

  - 数组(array):一种将一组数据存储在单个变量名下的方式
  - 声明语法:let 数组名 = [数据1,数据2,....,数据3]
    - let arr = []
  - 索引从0开始
  - 数组可以存储任意类型的数据
  - 数据的编号也叫索引或下标

  ```html
  <script>
   let arr =[]

   arr[0] = 1
   arr[1] = 9

   // document.write(arr[1])
   console.log(arr)
  </script>
  ```

  ```html
  <script>
   let week = ['星期一','星期二','星期三','星期四','星期五','星期六','星期日']
   console.log(week[6]);
   console.log(week.length);
  </script>
  ```

# var,let,const的区别

- var
  - 在较旧的js里面(所谓的旧，就是es2015之前),使用关键字var来声明变量
  - 可以使用 再声明 (不合理)
  - var声明过的变量可以重复声明(不合理)
  - 比如变量提升,全局变量,没有块级作用域
- const
  - 在js里，这个常量不能简单的理解为不可变
  - 常量不允许重新赋值,声明的时候必须赋值(初始化)

# 常量 - const

- 当某个量不会被重新赋值，就可以用const声明
- 常量不允许重新赋值,声明的时候必须赋值(初始化)

```html
<script>
 const PI = 3.14

 console.log(PI);

</script>
```

# 数据类型

- 强数据类型的语言:c,java (int num = 10;)
- 弱数据类型的语言:js (只有当我们赋值了,才知道是什么数据类型)
- 控制台的输出后面就跟着数据类型
- 基本数据类型

  - number 数字型:整数,小数,正负数

    - 算数运算符(加,减,乘,除,取余(求模))
    - NaN 计算错误,是粘性的(任何对NaN的操作都会返回NaN)
  - string 字符串型

    - 通过单引号，双引号，或反引号()包裹发的数据,js推荐使用单引号
    - 字符串拼接(+)

    ```html
    <script>
     let str = 'pink'
     let str1 = 'pink'
     let str2 = `中文`
     console.log(str2);

    </script>
    ```

    - 模板字符串(反引号)

    ```html
    <script>
     let age = 18

     document.write(`我今年${age}岁了`)

    </script>
    ```

  - boolean 布尔型

    - 有两个固定的值true(真),false(假)
  - undefined 未定义型

    - 只声明变量,不赋值的情况下,变量的默认值为undefined
    - 判断一个值不能if（xxx==undefined）,要xxx==void 0,核心原因：undefined 可被篡改，void 0 是 “纯净” 的 undefined
    - undefined 是 JS 中的原始值，但它本质是全局对象（window/global）的一个属性，而非语言层面的关键字 —— 这意味着在非严格模式下，它可以被人为修改，导致判断失效。
    - void 0 的本质：永远返回 “原始、不可篡改” 的 undefined,void 是 JS 的运算符，它的作用是：执行后面的表达式，然后无条件返回原始的 undefined（和任何变量 / 属性无关）

    ```html
    <script>
     function checkUndefined() {
       // 局部作用域覆盖 undefined
       var undefined = 123;
       var a;
       console.log(a == undefined); // false
       console.log(a == void 0);   // true
     }
     checkUndefined();

    </script>
    ```

  - null 空类型

    - js里面null仅仅代表"空","无"或者"值未知"的特殊值
    - null作为尚未创建的对象
    - null一般都是先复值,将来是json时候用的
  - null和undefined的区别

    - undefined 表示没有赋值
    - null表示赋值了,但是内容为空
- 检测数据类型

  - 通过typeof关键字检测数据类型
  - 作为运算符:typeof x
  - 函数形式: typeof(x)

  ```html
  <script>
   let num = 10
   console.log(typeof num)

  </script>
  ```

- 类型转换

  - 使用表单,prompt获取过来的数据默认是字符串类型的,此时就不能直接简单进行加法运算
  - 隐式转换
    - +号作为正号解析可以转换成数字型
    - 任何数据和字符出去按相加的结果都是字符串

  - 显式转换 
	- Number
		- 转换成数字类型
		- 如果字符串里面有非数字,转换失败NaN
		- NaN也是number类型的数据,代表非数字
	- parseint(数据) -- 只保留整数,只切整数,不四舍五入
	- parseFloat(数据) -- 可以保留小数
	```html
	 <body>
		<script>
			let str = '123'
			console.log(Number(str));
			console.log(typeof Number(str));
	 
			console.log(Number('pink'))
	 
		</script>
	 </body>
	 
	 ```


- 引用数据类型

  - obgject 对象
  - function 函数
  - array 数组
