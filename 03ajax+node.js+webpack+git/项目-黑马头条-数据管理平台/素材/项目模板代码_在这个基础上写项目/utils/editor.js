// 富文本编辑器
// 创建编辑器函数，创建工具栏函数
const { createEditor, createToolbar } = window.wangEditor

const editorConfig = {
  //占位符,提示文字
  placeholder: '发布文章内容...',

  //编辑器变化时的回调函数
  onChange(editor) {
    const html = editor.getHtml()
    console.log('editor content', html)
    // 也可以同步到 <textarea>
    //为了后续快速收集整个表单内容做铺垫
    document.querySelector('.publish-content').value = html
  },
}

//文本快速编辑
const editor = createEditor({
  //创建位置
  selector: '#editor-container',

  //默认内容
  html: '<p><br></p>',
  config: editorConfig,
  mode: 'default', // or 'simple'
})

//工具栏配置对象
const toolbarConfig = {}

//创建工具栏
const toolbar = createToolbar({
  editor,
  selector: '#toolbar-container',
  config: toolbarConfig,
  mode: 'default', // or 'simple'
})