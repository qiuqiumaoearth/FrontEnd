# for循环
- for 循环语法
	```
	for(变量起始值;终止条件;变量变化量){
		//循环体
	}
	```
- 退出循环
	- continue 退出本次循环
	- break 退出整个for循环
- 循环嵌套
	```
	for(外部声明记录循环次数的变量;循环条件;变化值){
		for(内部声明记录循环次数的变量;循环条件;变化值){
			
			循环体
			
		}
	}
	```  
***
# 数组
- 声明语法
	```
	let 数组名 = [数据1,数据2,数据3,...,数据n]
	let arr = new Array(数据1,数据2,..,数据n)
	```  
- 遍历数组
	```
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

