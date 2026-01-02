# html是标签/属性/值  
- 列表标签
	* 无序列表 —— ul>li {$}*6
	* 有序列表 —— ol>li {$}*6
	* 自定义列表 —— dl>dt{标题}+dd{$}*6  
>list-style是来指定列前面那个点的样式的,是个复合属性,分别指定点的类型位置或者自定义
***
- 表格标签  table>tr*6>td{$}*6
 
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
	```html{}
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
***
- textarea 文本域标签
	- cols：文本可见宽度
	- rows：文本可见行数
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
	


	
