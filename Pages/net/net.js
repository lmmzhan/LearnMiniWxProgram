// Pages/net/net.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

    // 1、发送最简单的get请求
    // wx.request({
    //   url: "http://123.207.32.32:8000/recommend", 
    //   success:function(res){
    //     console.log('接口获取的数据',res)
    //   }

    // }),

    // 2、get请求，但是携带参数

    // wx.request({
    //   url: "http://123.207.32.32:8000/home/data",
    //   data: {
    //     type: 'sell',
    //     page: 1
    //   },
    //   success:function(res){
    //     console.log('接口成功',res)
    //   },
    //   fail:function(res){
    //     console.log('接口失败',res)
    //   }
    // })

    // 3、post请求，并且携带参数

    wx.request({
      url: "http://httpbin.org/post",
      method: 'post',
      data: {
        type: 'codewhy',
        age: 18
      },
      success: function(res) {
        console.log(res)

      }
    })

  }

})