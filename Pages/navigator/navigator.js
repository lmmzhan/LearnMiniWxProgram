// Pages/navigator/navigator.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title:'我看青山多妩媚'
  },
  handleGoPage(){
    wx.navigateTo({
      url: '/Pages/showtoast/showtoast',
    })

    // wx.redirectTo({
    //   url: '',
    // })

  }
})