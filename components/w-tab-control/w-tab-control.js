// components/w-tab-control/w-tab-control.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {


    titles: {
      type: Array,
      value: []
    }

  },

  /**
   * 组件的初始数据
   */
  data: {

    currentIndex: 0

  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleTabClick(event) {
      console.log('点击了', event)
      //1、取出 index
      const index = event.currentTarget.dataset.itemindex
      console.log('....index', index)
      //2、修改currentIndex
      this.setData({
          currentIndex: index
      })
      //3、通知页面内部的点击事件
      this.triggerEvent("itemClick",{index,title:this.properties.titles[index]},{})
    }
  },

})