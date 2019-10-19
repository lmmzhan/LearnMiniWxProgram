// Pages/touch/touch.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  handleBtnClick(){
     console.log('事件的点击处理。。。')
  },

  handlTouchstart(){
    console.log('handlTouchmove......开始')
  },
  handleTouchmove(){
    console.log('handleTouchmove......移动')
  },
  handleTouchend() {
    console.log('handleTouchend......结束')
  },

  handleTag() {
    console.log('handleTag......点离开')
  },

  handleLongpress() {
    console.log('handleLongpress......长按')
  },

  handleEventClick(event){
    console.log('点击了',event)
  },
  handleEventInner(event) {
    console.log('里面点击了', event)
  },
  handleEventOuter(event) {
    console.log('外面点击了', event)
  }


})