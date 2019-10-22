// Pages/shottoast/showtoast.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  handleShowToast() {
    wx.showToast({
      title: '我是标题',
      duration: 3000,
      icon: 'loading',
      mask: true, //遮挡，自动取消
      success: function(res) {
        console.log('展示成功', res)
      },
      fail: function() {
        console.log('展示弹框失败')
      },
      complete: function() {
        console.log('完成函数的调用')
      },
    })

  },

  handleShowModal() {
    wx.showModal({
      title: '温馨提示',
      content: '个低嘴不甜，长得难看还没钱',
      cancelText: '退出',
      success: function(res) {
        console.log(res)
        if (res.cancel) {
          console.log('用户点击了取消')
        }
        if (res.confirm) {
          console.log('用户点击了确定')
        }
      }
    })

  },


  handleShowLoading() {
    wx.showLoading({
      title: '加载中你',
      mask: true
    })

    //利用定时器，延时消失
    setTimeout(() => {
      wx.hideLoading()
    }, 2000)
  },

  handleShowActionSheet() {
    wx.showActionSheet({
      itemList: ['相册', '相机'],
      itemColor: 'red',
      success: function(res) {
        console.log('点击了', res)
      }

    })
  },

// 分享的代码
  onShareAppMessage(options) {
    return {
      title: '你好，我来分享',
      imageUrl: '/Pages/assets/home/add.png'
      // imageUrl: 'https://gss3.bdstatic.com/-Po3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike80%2C5%2C5%2C80%2C26/sign=1ba7eb8df7f2b211f0238d1cabe90e5d/fd039245d688d43f8c0b1c0c711ed21b0ff43ba9.jpg'
    }
  }

})