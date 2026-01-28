/**
 * 目标1：渲染图书列表
 *  1.1 获取数据
 *  1.2 渲染数据
 */

const creator = '老李'
//封装- 获取并渲染图书馆列表函数
function getBooksList() {
  //1.获取数据
  axios({
    url: 'http://hmajax.itheima.net/api/books',
    params: {
      creator

    }
  }).then(result => {
    // console.log(result);
    const bookList = result.data.data
    console.log(bookList);
    // {id: 793010, bookname: 'ASDhj', author: 'SADASDASD', publisher: 'ASDASDASD'}

    document.querySelector('.list').innerHTML = bookList.reduce((a, item, index) => a + `<tr>
          <td>${index + 1}</td>
          <td>${item.bookname}</td>
          <td>${item.author}</td>
          <td>${item.publisher}</td>
          <td data-id = '${item.id}'>
            <span class="del">删除</span>
            <span class="edit">编辑</span>
          </td>
        </tr>`, '')

  })

}

getBooksList()

//创建弹框对象
const addModalDom = document.querySelector('.add-modal')
const addModal = new bootstrap.Modal(addModalDom, {
  backdrop: 'static',
  keyboard: false
})

// 保存按钮 -> 点击 -> 隐藏弹框
document.querySelector('.add-btn').addEventListener('click', () => {
  const addForm = document.querySelector('.add-form')
  const bookObj = serialize(addForm, { hash: true, emty: true })
  // console.log(bookObj);
  //{bookname: '1111', author: '1111', publisher: '1111'}
  //提交到服务器
  axios({
    url: 'http://hmajax.itheima.net/api/books',
    method: 'POST',
    data: {
      ...bookObj,
      creator
    }
  }).then(() => {
    // console.log(result);
    getBooksList()
    //重置表单
    addForm.reset()

    //隐藏表单
    addModal.hide()

  })
})

//删除元素 -> 点击事件
document.querySelector('.list').addEventListener('click', e => {
  // console.log(e.target);
  if (e.target.classList.contains('del')) {
    const theId = e.target.parentNode.dataset.id
    console.log(theId);
    //调用删除接口
    axios({
      url: `http://hmajax.itheima.net/api/books/${theId}`,
      method: 'DELETE',

    }).then(() => {
      getBooksList()

    })
  }
})

// 编辑弹框 -> 显示和隐藏
const editDom = document.querySelector('.edit-modal')
const editModal = new bootstrap.Modal(editDom)

//点击显示弹框
document.querySelector('.list').addEventListener('click', e => {
  if (e.target.classList.contains('edit')) {
    // console.log('编辑');
    const theId = e.target.parentNode.dataset.id
    // console.log(theId);
    axios({
      url: `http://hmajax.itheima.net/api/books/${theId}`,
      // method: 'PATCH',

    }).then(result => {
      const bookObj = result.data.data
      //{id: 793274, bookname: '《红楼梦》', author: '曹雪芹', publisher: '人民文学出版社'}

      //数据反写
      console.log(bookObj);
      const keys = Object.keys(bookObj)
      console.log(keys); //['id','bookname']
      keys.forEach(key => {
        document.querySelector(`.edit-form .${key}`).value = bookObj[key]
      });
    })
    editModal.show()
  }
})

//修改按钮,隐藏弹框
document.querySelector('.edit-btn').addEventListener('click', () => {
  const editForm = document.querySelector('.edit-form')
  const { id, bookname, author, publisher } = serialize(editForm, { hash: true, emty: true })
  // console.log(bookObj);
  axios({
    url: `http://hmajax.itheima.net/api/books/${id}`,
    method: 'PUT',
    data: {
      bookname,
      author,
      publisher,
      creator
    }
  }).then(() => {
    getBooksList()
    editModal.hide()
  })


})