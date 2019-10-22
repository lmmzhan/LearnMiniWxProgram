// Pages/shottoast/showtoast.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  handleShowToast(){
    wx.showToast({
      title: '我是标题',
      duration :3000,
      icon:'loading',
      mask:true,   //遮挡，自动取消
      success:function(res){
        console.log('展示成功',res)
      },
      fail: function () {
        console.log('展示弹框失败')
      },
      complete: function () {
        console.log('完成函数的调用')
      },
    })

  },

  handleShowModal(){
    wx.showModal({
      title: '温馨提示',
      content: '个低嘴不甜，长得难看还没钱',
      cancelText: '退出',
      success:function(res){
        console.log(res)
        if(res.cancel){
          console.log('用户点击了取消')
        }
        if(res.confirm){
          console.log('用户点击了确定')
        }
      }
    })

  },


  handleShowLoading(){
    wx.showLoading({
      title: '加载中你',
      mask:true
    })
     
     //利用定时器，延时消失
     setTimeout(()=>{
       wx.hideLoading()
     },2000)

  },

  handleShowActionSheet(){
    wx.showActionSheet({
      itemList: ['相册','相机'],
      itemColor:'red',
      success:function(res){
        console.log('点击了',res)
      }

    })

  }




})