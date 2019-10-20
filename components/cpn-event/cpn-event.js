// components/cpn-event/cpn-event.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  methods:{
    handleIncrement() {
      // this.triggerEvent("increment",{},{})
      this.triggerEvent("increment", {name:'xiaobei',age:18},{})
    }
  }

  


})
