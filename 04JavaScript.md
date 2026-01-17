# 运行在浏览器的js分这么几部分

1. 是js本身的逻辑语法和数据结构等
2. 和文档(html、css)交互，控制网页变化
3. 和浏览器交互控制浏览器行为
4. 是和后端交换数据

---

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

---

# js书写位置

## 内部js

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

## 外部js

- 引入 script标签 + src属性

  ```html
  <body>

  <!-- 外部js -->
  <script src="02js书写位置-外部.js"></script>
  </body>
  ```

## 内联/行内js

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

---

# js输入输出语法

## 执行顺序

- 按HTML文档流执行js代码
- alert()和prompt(),会跳过页面渲染先被执行

## 字面量 - literal

- (类比python的数据类型)
- 1000是数字字面量
- 'heima'是字符串字面量
- []数组字面量
- {}对象字面量

## 输出语法

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

## 输入语句

- prompt('请输入你的年龄')
  - 显示一个对话框，对话框中包含一条文字信息，用来提示用户输入文字
  - 所以这个是在window (窗口)中输出

```js
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

---

# 变量

- 变量是什么
  - 是计算机中用来存储数据的容器，是一个用来装东西的盒子

## 变量的基本使用

- 提倡一行只声明一个变量
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

## 变量命名规则与规范

- 规则
  - 不能用关键词 let
  - 不能数字开头
  - 严格区分大小写
- 规范
  - 起名有意义
  - 遵循小驼峰命名法
    - 第一个单词首字母小写，后面每个单词首字母大写：userName
  - 普通变量和函数小驼峰，函数动词加名词

# 数组

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

## const 优先(数组和对象)

- const语义化更好
- react框架,基本const
- let:基本数据类型,变化赋值的用
- const:引用数据类型,地址不变可以,数组和对象

# 数据类型(基本5个和引用3个)

- 强数据类型的语言:c,java (int num = 10;)
- 弱数据类型的语言:js (只有当我们赋值了,才知道是什么数据类型)
- 控制台的输出后面就跟着数据类型

## 基本数据类型

-数字,字符,布尔,undefined,null空类型

### number 数字型

- 整数,小数,正负数
- 算数运算符(加,减,乘,除,取余(求模))
- NaN 计算错误,是粘性的(任何对NaN的操作都会返回NaN)

### string 字符串型

- 通过单引号，双引号，或反引号()包裹发的数据,js推荐使用单引号
- 转字符串
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

- padStart 和padEnd

  - `padStart(targetLength, padChar)`：在字符串**开头（左侧）** 填充指定字符，直到字符串总长度达到 `targetLength`；如果原字符串长度已经≥目标长度，直接返回原字符串。
  - `padEnd(targetLength, padChar)`：在字符串**结尾（右侧）** 填充指定字符，直到字符串总长度达到 `targetLength`；同理，原字符串长度足够时不做任何修改。

  ```html
  字符串.padStart(目标长度[, 填充字符]);
  字符串.padEnd(目标长度[, 填充字符]);
  ```

### boolean 布尔型

- 有两个固定的值true(真),false(假)

### undefined 未定义型

- 只声明变量,不赋值的情况下,变量的默认值为undefined
- 判断一个值不能if（xxx==undefined）,要xxx\==void 0,核心原因：undefined 可被篡改，void 0 是 “纯净” 的 undefined
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

### null 空类型

- js里面null仅仅代表"空","无"或者"值未知"的特殊值
- null作为尚未创建的对象
- null一般都是先复值,将来是json时候用的

### null和undefined的区别

- undefined 表示没有赋值
- null表示赋值了,但是内容为空

### 检测数据类型

- 通过typeof关键字检测数据类型
- 作为运算符:typeof x
- 函数形式: typeof(x)

```html
<script>
  let num = 10
  console.log(typeof num)

</script>
```

### 类型转换

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

## 引用数据类型

### obgject 对象

- 对象(object) :js里面的一种数据类型
  - 数组是有序的数据集合,对象是无序的数据集合
  - 可以详细描述某个事物

#### 对象的使用

- 对象声明语法

  - (优先级),[数组],{对象}

  ```js
  let 对象名 = {
    属性名:属性值,
    方法名:函数
  }

  let 对象名 = new Object()
  ```

- 对象有属性和方法组成

  - js里，一切皆对象
  - 属性:信息或叫特征(名词):手机尺寸,颜色
  - 方法:功能或叫行为(动词):手机打电话,发短信

  ```html
  <script>
    let pink = {
      uname:'pink',
      age:18,
      gender:'女'
    }
    console.log(pink);
  </script>
  ```

- 对象的使用

  ```html
  <script>
    let obj = {
      goods:'小米',
      'goods-name':'小米10 青春版',
      num:10012,
      weight:'0.55kg',
      address:'中国大陆'

    }
    // 增
    obj.peice = '1999元'

    // 查
    console.log(obj.name);
    console.log(obj['goods-name']);

    //  改
    obj.address = '中国台湾'

    // 删
    delete obj.num

    console.log(obj);
  </script>
  ```

  - 对象中的方法:
    - 在对象里面叫方法,在外面叫函数

  ```html
  <script>
    let obj = {
      name:'刘德华',
      //方法
      song:function  () {
        console.log('冰雨');
      },
      action(){
        console.log('跳舞')
      }

    }
    // 方法调用 对象名.方法名
    obj.song()
    obj.action()

    // document.write() 
  </script>
  ```

- 遍历对象

  - for of 遍历
    - Object.values(obj)：遍历属性名
    - Object.keys(obj)：遍历属性名
    - Object.entries(obj)：遍历键值对
  - for in 遍历
    - console.log(key); // 属性名 'name' 'age'
    - console.log(obj[key]); //输出属性值 obj[k]

  ```html
  <script>
    // for in 不推荐遍历数组
    let arr =['pink','green','blue']
    for(let k in arr){
      console.log(k); // 数组的下标 索引号 但是是字符串'0'
      console.log(arr[k]);
    }


    // // for in 用来遍历对象
    let obj = {
      name:'nihao',
      age :18,
      gender :'男',

    }

    for (let key in obj) {
      console.log(key); // 属性名 'name' 'age'
      console.log(obj[key]); //输出属性值 obj[k]
    }


    //输出对象属性值
    for (let s of Object.values(obj)) {
      console.log(s);
    }

    //输出对象属性名
    for (let s of Object.keys(obj)) {
      console.log(s);
    }

    // 遍历键值对
    for (let s of Object.entries(obj)) {
      console.log(s);
    }

  </script>
  ```

#### 内置对象math

- Math对象是js提供的一个"数学"对象

  - radom:生成0-1之间的随机数(包含0不包含1)//random是伪随机

  ```javascript
  function getRandom(N,M){
    return Math.floor(Math.random()*(M-N)+1)+N;
  }
  console.log(getRandom(2,6));
  ```

  - cell:向上取整
  - floor:向下取整
  - max:找最大值
  - min:找最小值
  - pow:幂运算
  - abs:绝对值
  - round:四舍五入

### function 函数

- 函数function，是被设计为执行特定任务的代码块

  - 这个操作叫＂封包，引用叫＂调包，封包可以直接复用，比如重复的或者功能相同的可以提出来
  - 封成全场景使用叫组件
- 函数使用

  - 函数的声明语法

    - function 函数名(){
      函数体
      }
  - 函数命名规范

    - 常用动词(变量:常用名词)

    | 动词 |         含义         |
    | :--: | :------------------: |
    | can | 判断是否执行某个动作 |
    | has |  判断是否含有某个值  |
    |  is  |   判断是否为某个值   |
    | get |      获取某个值      |
    | set |      设置某个值      |
    | load |     加载某些数据     |

  - 函数调用语法

    > //函数调用,这些函数体内的代码逻辑会被执行
    > 函数名()
    >
- 函数传参

  - 声明语法

  ```js
  function 函数体(参数列表){
    函数体
  }
  ```

  - 声明函数小括号里面:形式参数
  - 调用函数小括号里面:实际参数

  ```html
  <script>
    function getSum (start,end) {
      // start,end 形参 形式上的参数
      let sum = 0
      for (var i = start; i <= end; i++) {
        sum += i
      }
      console.log(sum);
    }

    getSum(2,10)
    // 2,10 实参-实际上的参数
    getSum(1,100)
  </script>
  ```

  - 参数默认值(使程序更严谨)
    - 这个默认值只会在缺少实参参数传递时才会被执行,所有有参数会优先执行传递过来的实参,否则默认为undefined

  > end=end||默认值
  > if end === void 0 || end=0
  > if（xxx==void 0）
  > undefined不一定是undefined，但是void一定是undefine!!!!
  >

  ```js
  function getSum(num1 = 0 , num2 = 0){

  }
  ```

- 函数返回值

```js
return 数据
```

```html
<script>
  function fu () {
    return 20
  }
  // 相当于执行了fu()调用者   fu() =20
  console.log(fu())
</script>
```

- 函数细节补充

  - 两个相同的函数,后面的会覆盖前面的函数
  - 在js中实参个数和形参个数可以不一致
    - 如果形参过多,会自动填上undefined
    - 如果实参过多,那么多余的实参会被忽略
  - 函数一旦碰到return就不会再往下执行了,函数结束用return
  - 作用域
  - 全局作用域 → 全局变量
  - 局部作用域 → 局部变量(比如函数里面)
  - 函数级作用域是局部作用域，局部作用域不一定是函数级作用域
  - 函数里面不声明，直接写，就会挂在全局作用域(强烈不允许)
  - 变量的访问原则(就近原则)
  - 在能够访问到的情况下,先局部,局部没有再找全局

  ```html
    <script>
    function f1 () {
      let num = 123
      function f2(){
        console.log(num)
      }
      f2()
    }
    let num = 456
    f1() //123

  </script>
  ```

#### 匿名函数

- 函数表达式
  - 和具名函数不同 function fn(){}:函数表达式,必须先声明函数表达式,后调用
  - 函数内部声明的具名函数默认仅在该函数的局部作用域内可用，外部直接调用会提示 “未定义”；
  - 若需外部使用，需将内部函数赋值给外部变量（且必须先执行外部函数完成赋值）；
  - 核心原因是 JavaScript 的作用域隔离机制，避免局部标识符污染全局作用域。

```txt
语法:
let fn = function(){
  //函数体
}
调用:
fn() //函数名
```

#### 立即执行函数()()

- 不需要调用,立即执行
- 后面必须加个分号;

```txt
//方法1
(function(形参){ 
  代码块
})(实参);

//方法2
(function(){console.log(11)}());
```

---

### array 数组

- 声明语法

  ```js
    let 数组名 = [数据1,数据2,数据3,...,数据n]
    let arr = new Array(数据1,数据2,..,数据n)
  ```

- 遍历数组

  ```js
  for (let i = 0; i< 数组名.length;i++){
    数组名[i]
  }
  ```

- 数组求和

  ```html
  <script>

  let n = [2,6,1,7,4]
  s = 0
  for (var i = 0; i < n.length; i++) {
    s += n[i]
  }
  document.write(s) 

  //数组求和第二种办法
  console.log(n.reduce((a,b)=>a+b));

  </script>
  ```

- 数组最大值：Math.max(...数组名)
- 数组最小值：Math.min(...数组名)
- 操作数组(增,删,改,查)

  - 作用，参数，参数如果是回调函数，回调函数的参数，返回值，是否改变原数组
  - 数组添加新的元素(尾:push;头:unshift)
  - arr.push(新增的内容) -- 将一个或者多个元素添加在数组末尾,并返回该数组的新长度

    ```html
      <script>
        let arr = [1,2,3,4,5]

        console.log(arr.push(90,100));//返回的是7;新数组的长度
        console.log(arr);//返回的是新数组,[1,2,3,4,5,90,100]
      </script>
    ```

  - arr.unshift(新增的内容) -- 将一个或者多个元素添加在数组开头,并返回该数组的新长度
  - 删除数组中的数据

    - arr.pop() -- 从数组中删除最后一个元素,并返回该元素(无参数)

    ```html
      <script>
        let a = ['yellow','pink','blue']
        console.log(a.pop()); //返回blue
        console.log(a) //数组['yellow','pink']
      </script>
    ```

  - arr.shift() -- 从数组中删除第一个元素,并返回该元素(无参数)
  - arr.splice(start,deleteCount) -- (两个参数)

    - start起始位置:指定修改的开始位置(从0计数)
    - deleteCount表示要移除的数组元素的个数,可选的,如果省略则默认从指定的起始位置删除到最后
    - 返回被删除的元素
- 数组排序

  - arr.sort() 默认是升序排

  ```html
  <script>
    let arr = [2,1,7,5,8]
    // 1.升序排列
    arr.sort(function(a,b){
      return a-b
    })
    console.log('升序排列'+ arr); //升序排列1,2,5,7,8

    // 2.降序排列
    arr.sort(function(a,b){
      return b-a
    })
    console.log('降序排列'+arr); //降序排列8,7,5,2,1

  </script>
  ```

---

# 逻辑中断

- 逻辑运算符里的短路

  - 短路：只存在于&&和||中，当满足一定条件会让右边代码不执行
  - &&用在左侧执行成功的情况下执行右侧
  - ||用在左侧不成功的情况下执行右侧

  | 符号 |          短路条件          |           选取           |
  | :--: | :------------------------: | :-----------------------: |
  |  &&  | 左边为false就短路,一假则假 | 如果两边都是真,选取左边的 |
  | \|\| | 左边为true就短路,一真则真 | 如果两边都是真,选取右边的 |

```html
<script>
  function fn(x,y){
    x = x || 0
    y = y || 0
    console.log(x+y)
  
  }
  fn(1,2)
  fn()
  
</script>
```

- 转换为Boolean型
- 显示转换
  - boolean(内容):空,0,undefined,null,false,NaN转换为布尔值后都是false,其余为true
- 隐式转换
  - 有字符串的加法 ""+1,结果是"1"
  - 减法- (像大多数数学运算一样)只能用于数字,它会使空字符串""转换成0
  - null经过数字转换之后会变成0
  - undefined经过数字转换之后会变成NaN

# 运算符

## 赋值运算符

- =  将等号右边的值赋值给左边

  ```html
    <script>
    let num = 1
    // num = num +1 

    num += 1
    console.log(num);

  </script> 
  ```

## 一元运算符

- 经常用于计数来使用
- 自增
  - 符号：++
  - 作用：让变量的值 +1
- 自减
  - 符号：--
  - 作用：让变量的值 -1

```html
<script>
  // 前置自增：先自加再使用
  let i = 1
  console.log(`前置自增${++i +2}`); //结果是4
  // 注意:i是2
  // i 是先自加1,变成2之后,再和后面的2相加

  // 后置自增：先使用再自增
  let a = 1
  console.log(`后置自增${a++ +2}`); //结果是3
  // 注意:a是1
  // 先和2相加,先运算输出完毕后,i再自加 
  
</script>
```

## 比较运算符

- ``> | < | >= | <=``
- == 左右两边值是否相等,先转化类型再比较
- !== 左右两边是否不完全相等
- 比较结果为Boolean 类型,即只会得到true 或 false
- === 左右两边是否类型和值都相等(强烈推荐使用)

```html
<script>
  console.log([1,2]=='1,2'); // true
  console.log({}=={}); //false 因为这是两个地址不一样
  console.log([]==[]);//false 因为这是两个地址不一样
</script>
```

## 逻辑运算符

| 符号 |  名称  | 日常读法 |              特点              |
| :--: | :----: | :------: | :-----------------------------: |
|  &&  | 逻辑与 |   并且   |  符号两边都是true,结果才为true  |
| \|\| | 逻辑或 |   或者   | 符号两边有一个true,结果就是true |
|  !  | 逻辑非 |   取反   |     true变false,false变true     |

## 运算符优先级

| 优先级 |   运算符   |     顺序     |
| :----: | :--------: | :-----------: |
|   1   |   小括号   |      ()      |
|   2   | 一元运算符 |    ++ -- !    |
|   3   | 算数运算符 | 先* / % 后+ - |
|   4   | 关系运算符 |   > >= < <=   |
|   5   | 相等运算符 | == != === !== |
|   6   | 逻辑运算符 |  先&& 后\|\|  |
|   7   | 赋值运算符 |       =       |
|   8   | 逗号运算符 |       ,       |

---

# 程序三大流程控制语句

- 表达式:因为表达式可被求值,所有它可以写在赋值语句的右侧
  - num = 3 + 4
- 语句:语句不一定有值,比如alert(),for 和break等语句不能被用于赋值
  - alert() 弹出对话框
  - console.log() 控制台打印输出
- py是用缩进来区分代码块,js用大括号区分代码块

## 顺序结构

## 分支结构

### if分支语句

- 单分支if语句

  - 括号内的条件为true时,进入大括号里执行代码
  - 小括号内的结果如果不是布尔类型,会发生隐式转换为布尔型

  ```js
    if (条件){
      满足条件要执行的代码
    }
  ```

- 双分支if语句

  ```js
    if (条件){
    满足条件要执行的代码
    }else{
      不满足条件执行的代码
    }
  ```

- 多分支if语句

  ```js
    if (条件1){
      代码1
    }else if(条件2){
      代码2
    }else if(条件3){
      代码3
    }else{
      代码n
    }
  ```

### 三元运算符

- 语法:
  > 条件?满足条件执行的代码:不满足条件执行的代码
  >

```html
<script>
let a = + prompt('第一个数字:')
let b = + prompt('第二个数字:')

alert(a>b?a:b);
console.log(Math.max(a,b)) 

</script>
```

### switch语句

- 找到跟小括号里数据全等(===)的case值,并执行里面对应的代码
- 若没有全等(===,值和类型都相等)则执行default里的代码

```js
switch(数据){
  case 值1:
  代码1
  break
  case 值2:
  代码2
  break
  default:
  代码n
  break
}
```

- switch case 语句一般用于等值判断,不适合区间判断
- switch case 一般需要配合break关键字使用,没有break会造成case穿透

## 循环结构:while

- 循环三要素

  1. 变量起始值
  2. 终止条件(没有终止条件,循环会一直执行,造成死循环)
  3. 变量变化量(用自增或者自减)

  ```js
  while(循环条件){
    要重复执行的代码(循环体)
  }
  ```

- break：推出循环
- continue：结束本次循环，继续下次循环

```js
  <script>
    let i = 1
    while (i<=5){
      // if (i === 3){
      //  i++
      //  continue //结束本次循环
      // }
      if (i === 3){
        i++
        break //结束循环
      }
  
      console.log(`这是第${i}个包子`);
      i++
    }
  </script>
```

## 循环结构or循环

- for 循环语法

  ```js
  for(变量起始值;终止条件;变量变化量){
    //循环体
  }
  ```

- 退出循环

  - continue 退出本次循环
  - break 退出整个for循环
- 循环嵌套

  ```js
  for(外部声明记录循环次数的变量;循环条件;变化值){
    for(内部声明记录循环次数的变量;循环条件;变化值){

      循环体

    }
  }
  ```

---

---

# 术语解释

|     术语     |                      解释                      |                    举例                    |
| :----------: | :---------------------------------------------: | :----------------------------------------: |
|    关键字    |             在js中有特殊意义的词汇             | let,var,function,if,else,switch,case,break |
|    保留字    | 在目前js中没有意义,但未来可能会有特殊意义的词汇 |            int,short,long,char            |
| 标识(标识符) |            变量名,函数名的另一种叫法            |                     无                     |
|    表达式    |          能产生代码,一般配合运算符出现          |                10+3,age>=18                |
|     语句     |                一段可执行的代码                |                 if()for()                 |

---

# 基本数据类型(值类型和引用类型)

## 值类型

- 简单数据类型/基本数据类型
- 在存储时变量中存储的是值本身
- 存放在栈里面
- string,number,boolean,undefined,null

## 引用类型

- 复杂数据类型
- 在存储时变量中存储的仅仅时地址(引用)
- 通过new关键字创建的对象(系统对象,自定义对象),如Object,Array,Date等
- 引用类型变量(栈空间)里存放的是地址,真正的对象实例存放在堆空间

```html
  <script>
  let obj1 = {
    age:18
  }
  let obj2 = obj1
  
  //修改属性
  obj2.age = 20
  console.log(obj1.age); // 显示20  
</script>
```

![引用数据类型](img/引用数据类型.jpg)

## 为什么 {} === {} 是 false？

- 第一个 {}：JavaScript 会在堆内存中新建一块空间，存储这个空对象，然后返回指向该空间的地址。
- 第二个 {}：JavaScript 会在堆内存中再新建另一块空间，存储另一个空对象，然后返回指向这块新空间的地址。
- === 比较的是两个地址：这两个地址指向堆内存中不同的位置，因此返回 false。
