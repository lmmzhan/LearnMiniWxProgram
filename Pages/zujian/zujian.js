// Pages/zujian/zujian.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title:"天下大势",
    mycount:0
  },

  myIncrement(event){
    console.log('是否回调过来了',event)
    this.setData({
      mycount: this.data.mycount + 1
    })

  }

})