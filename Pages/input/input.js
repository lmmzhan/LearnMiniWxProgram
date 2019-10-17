// Pages/input/input.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  handleInput(event){
    console.log('键盘输入时触发:',event)

  },

   handlefocus(event) {
     console.log('输入框聚焦时触发:', event)
  },

   handleBlur(event) {
     console.log('输入框失去焦点时触发:', event)
  }

  

})