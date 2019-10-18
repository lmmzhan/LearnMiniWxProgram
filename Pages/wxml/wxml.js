// Pages/wxml/wxml.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    message: '军人运动会开幕',
    contnet: '霸气外露，习大大出席开幕会',
    age: 30,
    nowTime: new Date().toLocaleString(),
    selsetedFlag: false
  },
  
  /**
   * 时间实时的显示
   */
  onLoad(){
    setInterval(()=>{
     
      this.setData({
        nowTime: new Date().toLocaleString()
      })

    },1000)
  },

  selectSwitch() {
    console.log('点击了。。。')
    this.setData({
      selsetedFlag: !this.data.selsetedFlag
    })
  }


})