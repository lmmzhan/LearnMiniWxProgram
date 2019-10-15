// Pages/home/home.js

const app = getApp()
console.log(app.globalData.name)
console.log(app.globalData.age)

Page({

  //................2、初始化数据。。。。。。。。。。。。。。。。。
  data: {
    name: 'xiao北',
    age: 18,
    list: [],
    counter: 0

  },
  handleBtnClick() {
    // 1.错误做法，页面不会刷新
    //  this.data.counter+=1
    // console.log(this.data.counter)
    // 2.this.setDat()
    this.setData({
      counter: this.data.counter += 1
    })
  },
  handleSubtraction() {

    this.setData({
      counter: this.data.counter -= 1
    })

  },

  //  页面被加载出来
  onLoad() {
    console.log('onLoad')

    wx.request({
      url: 'http://123.207.32.32:8000/recommend',
      success: (res) => {
        console.log('wolaole:')
        console.log(res)
        const data = res.data.data.list;
        this.setData({
          // list: data
        })


      }
    })
  },

  //  页面显示出来
  onShow() {
    console.log('onShow')
  },
  // 页面  初次  渲染出来(执行一次)
  onReady() {
    console.log('onReady')
  },
  //页面隐藏起来时
  onHide() {
    console.log('onHide')
  },
  //页面跳转的时候，（自己被销毁的时候，执行）
  onUnload() {
    console.log('onUnload')
  },



  //...............3、监听wxml中相关的一些事件..............
  // 获取授权信息
  handleGetUserInfo(enent) {
    console.log(enent)
  },

  //.........其他事件。。。。。。。。。
  // 监听页面滚动
  onPageScroll(obj) {
    // console.log(obj)
  },

  onReachBottom() {
    console.log('页面滚动到了底部。。。')
  },
  onPullDownRefresh() {
    console.log("下拉刷新了")
  }


})