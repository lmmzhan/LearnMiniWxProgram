const TOKEN = 'token'

App({

  /**
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   */
  onLaunch: function() {

    // 缓存中获取token
    const token = wx.getStorageSync(TOKEN)
    //有token,并要去判断是否过期
    if (token && token.length != 0) {
      this.checkToken()
    } else {
      this.myLogin()
    }
  },

  /**
   * 当小程序启动，或从后台进入前台显示，会触发 onShow
   */
  onShow: function(options) {

    // 1、判断小程序的进入场景
    console.log(options)

    switch (options.scene) {
      case 1001:

        break;
      case 1005:

        break;
    }

    // 2、获取用户的信息，并且获取后，将信息传递给服务器
    wx.getUserInfo({
      success: function(res) {
        // console.log(res)
      }
    })

  },

  /**
   * 当小程序从前台进入后台，会触发 onHide
   */
  onHide: function() {

  },

  /**
   * 当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
   */
  onError: function(msg) {

  },

  globalData: {
    name: 'xiaobei',
    age: 18,
    token: ''
  },

  // 检测token 是否过期
  checkToken(token) {
    console.log('执行了检测token操作')
    wx.request({
      url: 'http://123.207.32.32:3000/auth',
      method: 'post',
      header: {
        token
      },
      success: (res) => {
        console.log('检测的结果成功：', res)
        if (!res.data.errCode) {
          this.globalData.token = token
        }else{
          this.myLogin
        }
        
      },
      fail: function(err) {
        console.log('检测的结果失败：', rerr)
      }





    })

  },

  myLogin() {
    console.log('执行登录操作')
    wx.login({
      success: (res) => {
        //1、获取到code
        const code = res.code
        console.log('获取的code', code)
        //2、将code 发送给我们的服务器
        wx.request({
          url: 'http://123.207.32.32:3000/login',
          method: 'post',
          data: {
            code
          },
          success: (res) => {

            console.log('接口返回的数据：', res)

            //1、取出token
            const token = res.data.token;
            //2、将token 保存在globalData中
            this.globalData.token = token;
            console.log('保存的数据：', this.globalData.token)
            //3、进行本地的存储
            //       同步（这行代码执行完，再执行下一行代码）  wx.setStorageSync

            wx.setStorageSync(TOKEN, token)

          }
        })


      }
    })


  }




})