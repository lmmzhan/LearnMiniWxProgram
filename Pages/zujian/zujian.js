// Pages/zujian/zujian.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title:"天下大势",
    mycount:0
  },

// 05自定义事件传递数据
  myIncrement(event){
    console.log('是否回调过来了',event)
    this.setData({
      mycount: this.data.mycount + 1
    })

  },
  //  06 自定义事件传递数据
  handleClick(event){
    console.log('传递过来了数据',event)
  },

  // 07 获取组件对象，修改组件

  handleIncNum(){
  
  // 获取组件
    const my_cpn = this.selectComponent('.sel-class')
    //通过setData修改组件中的数据（不合理）
    // my_cpn.setData({
    //   counter: my_cpn.data.counter + 10
    // })

    my_cpn.setChangeCounter(10)

   
  }


})