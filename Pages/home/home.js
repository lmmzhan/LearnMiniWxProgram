// Pages/home/home.js

const app = getApp()
console.log(app.globalData.name)
console.log(app.globalData.age)

Page({

  data: {
    name: 'xiao北',
    age: 18,
    students: [{
        id: 100,
        name: '武松',
        age: 30
      },
      {
        id: 110,
        name: '林冲',
        age: 29
      },
      {
        id: 120,
        name: '鲁智深',
        age: 32
      },
      {
        id: 130,
        name: '花荣',
        age: 18
      }
    ],
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

// 获取授权信息
  handleGetUserInfo(enent) {
    console.log(enent)
  }

})