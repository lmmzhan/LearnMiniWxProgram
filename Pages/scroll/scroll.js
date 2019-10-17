// Pages/scroll/scroll.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  eventscroll(event) {
    console.log(event)
  },

  handleRight(event){
    console.log('滚动到底部/右边时触发' ,event)
  }
})