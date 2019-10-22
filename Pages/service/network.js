export default function request(options) {

  return new Promise((resolve, reject) => {
    wx.request({
      url: options.url,
      method: options.method || 'get',
      data: options.data || {},
      // success: function(res) {
      //   // console.log(res)
      //   resolve(res)
      // },
      // fail: function(res) {
      //   // console.log(res)
      //   reject(res)
      // }
      success: resolve,
      fail: reject
    })
  })

  // wx.request({
  //   url: options.url,
  //   method: options.method||'get',
  //   data: options.data || {},
  //   success: function(res) {
  //     console.log(res)
  //   },
  //   fail: function(res) {
  //     console.log(res)
  //   }
  // })

}