// components/cpn-style/cpn-style.js
Component({

  options: {
    // isolated 默认  互不影响
    // apply-shared  表示页面wxss样式会影响到自定义组件，但是自定义组件不会影响到页面
    // shared 表示页面wxss样式将影响到自定义组件，自定义组件wxss中指定的样式也会影响页面和其他设置了
    styleIsolation: "apply-shared"
  },

  /**
   * 组件的初始数据
   */
  data: {
     "title":"我是组件，我来和主页一起摇摆",
      "content": "三个袁本初绑一块也比不上我一个曹操"
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
