# html是标签/属性/值  

- 列表标签
  - 无序列表 —— ul>li {$}*6
  - 有序列表 —— ol>li {$}*6
  - 自定义列表 —— dl>dt{标题}+dd{$}*6  

>list-style是来指定列前面那个点的样式的,是个复合属性,分别指定点的类型位置或者自定义
***

- 表格标签  table>tr*6>td{$}*6
  - tr>th{$}*5+tr*5>td{$}*5
  - table 整体
  - tr 行
  - td 单元格  
- th 和td 一个层级 因为单元格标签和单元格都是在行里面
- table>tr=caption>th=td

|table属性名|效果|  
|:-----:|:-----:|  
|border|边框宽度|  
|width|表格宽度|  
|height|表格高度|  

- 表格大标题标签 —— caption
- 表头单元格标签 —— th
- 结构标签（语义标签）  

|标签名|名称|  
|:-----:|:-----:|  
|thead|表格头部|  
|tbody|表格主体|  
|tfoot|表格底部|
  
```html{}
<table border="1" width="500" height="50">
```

- 合并单元格  （被合并的删掉，留的写属性名）

|td属性名|效果|  
|:--------:|:--------:|  
|rowspan|行合并，留上面|  
|clospan|列合并，留左边|  

- 表单标签-input  
  - 属性：type

 |type属性值|说明|  
 |:-----:|:-----:|  
 |text|文本框，输入单行文本|
 |password|输入密码|
 |radio|单选框|
 |checkbox|多选框|
 |file|文件选择，上传文件|
 |submit|提交按钮|
 |reset|重置按钮|
 |button|普通按钮，结合js添加功能|  
 |date|直接生成日期下拉菜单|

- 属性：value：给按钮赋值文字
- type的常用属性：  
  - placeholder 占位符，提示用户输入内容的文本

  ```html{}
  <input type="  " placeholder="输入用户名"><br/>
  ```

  - name 分组，相同name属性值的单选框为一组，一组中同时只能有一个被选中

  ```html
  <!-- 单元框 -->
  <input type="radio" name="性别" > 男 <input type="radio" name="性别" > 女
  ```

  - checked 默认选中

  ```html{}
  <input type="radio" name="性别" checked> 男
  ```

  - button 按钮  
    - button是旧版本按钮，  
    - input:button是新版按钮  

   ```html{}
   <!-- 旧版本 -->
   <button type="submit">提交</button>
   <!-- 新版本 -->
   <input type="submit" />
   ```  

***

- 下拉菜单
  - select标签：下拉菜单整体
  - option标签：下拉菜单的每一项 (selected ：默认选中 )

 ```html
 <!-- value是提交值 对应数据库内的id，><里是给输入的人看的值 -->
 <label for="">所在城市：<select name="" id="">
  <option value="1">北京</option>
  <option value="2">上海</option>
  <option value="3">深圳</option>
  <option value="4">广州</option>
  <option value="5">福建</option>
  <option value="6" selected>济南</option>
 </select></label>
 ```  

 ```html
 <!-- 自动下拉匹配 -->
    <input type="search" list="phones" />
    <datalist id="phones">
        <option value="小米11">
        <option value="小米10S">
        <option value="小米笔记本">
        <option value="小米手机">
        <option value="黑鲨4">
        <option value="空调">
    </datalist>

 ```

***

- textarea 文本域标签  
  - name 属性  
    - 作用：这是表单控件的核心属性之一，用于标识这个文本域的名称。当表单(`<form>`)提交数据时，服务器端会通过这个 name 值来获取用户在文本域中输入的内容.  
    - 特点：如果没有 name 属性，这个文本域的内容在表单提交时不会被发送到服务器。名称可以自定义（如 content、message），通常与业务逻辑对应（比如留言框可以命名为 message）。
    - 示例：`<textarea name="user_feedback"></textarea>`，提交后服务器可通过 user_feedback 拿到用户输入的反馈内容。
  - id 属性
    - 作用：用于唯一标识页面中的这个文本域元素，是 HTML 元素的通用属性，并非 `<textarea>`独有。
    - 常见用途：
    1. 配合 CSS 选择器精准样式化该文本域（如 `#feedback { width: 300px; }`）。
    2. 配合 `JavaScript` 获取 / 操作这个元素（如 `document.getElementById("feedback")`）。
    3. 配合 `<label>`标签实现 “点击标签聚焦文本域” 的无障碍功能（`<label for="feedback">`留言：`</label><textarea id="feedback"></textarea>`）。
    - 特点：同一个页面中 id 必须唯一，不能重复。
  - cols 属性
    - 作用：设置文本域的可见宽度，单位是 “字符数”（不是像素），定义了文本域一行能显示的字符数量。  
    - 示例：cols="30" 表示这个文本域默认一行能显示约 30 个字符（不同字体 / 字号会略有差异）。
    - 注意：这是初始宽度，可以被 CSS 的 width 属性覆盖（优先级更高）。
  - rows 属性
    - 作用：设置文本域的可见行数，定义了文本域默认显示的行数（高度）。
    - 示例：rows="10" 表示这个文本域默认显示 10 行的高度，超出的内容会出现滚动条。
    - 注意：同样是初始高度，可被 CSS 的 height 属性覆盖。
  - `<textarea>` 还有几个高频属性：
    - placeholder：提示文本（如 `<textarea placeholder="请输入留言内容"></textarea>`）
    - readonly：只读（无法编辑，值可提交）。
    - disabled：禁用（无法编辑，值也不会被提交）。
    - required：表单提交时必填。

```html
<form action="/submit" method="post">
  <label for="user_msg">你的留言：</label>
  <!-- 带完整属性的textarea -->
  <textarea 
    name="user_message"  <!-- 提交时的字段名 -->
    id="user_msg"        <!-- 唯一标识，配合label -->
    cols="30"            <!-- 宽度：30个字符 -->
    rows="10"            <!-- 高度：10行 -->
    placeholder="请输入你的留言，最多500字"
    required             <!-- 必填 -->
  ></textarea>
  <button type="submit">提交</button>
</form>
```

- 文本占位：lorem + tab键  
- label标签

 ```html
 <!-- label标签 -->
 <input type="radio" name = 'sex' id="1"/><label for="1">男</label>
 <label ><input type="radio" name = 'sex'  />女</label>
 ```  

- 无语义标签：div（单行）和span（一行）是通用布局标签  
- 结构语义标签：

 |标签名|语义|  
 |:-----:|:-----:|
 |header|网页头部|  
 |nav|网页导航|  
 |footer|网页底部|  
 |aside|网页侧边栏|  
 |section|网页区块|  
 |article|网页文章|  

>表格那个是相对于表格而言的，所以表格那个是表格语义化标签，不作为布局语义化标签  

- 空格的字符实体：&nbsp+;（牛逼sp-space空格
  - nbsp只能写在html里，不能写在css里
