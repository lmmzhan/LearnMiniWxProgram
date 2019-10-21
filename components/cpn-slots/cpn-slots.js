// components/cpn-slots/cpn-slots.js
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

  /**
   * 组件的方法列表
   */
  methods: {

  },
  options:{
    multipleSlots:true
  },

// 监听所在页面的生命周期
  pageLifetimes:{
     
     show(){
       console.log('页面显示出来')
     },
     hide(){
       console.log('页面隐藏出来')
     },

    resize() {
      console.log('尺寸发生改变')
    }

  },

//监听组件本身的生命周期
  lifetimes:{

    created(){
      console.log('组件被创建出来')
    },

    attached(){
      console.log('组件被添加到页面')
    },

    ready(){
      console.log('组件被渲染出来')
    },

    moved(){
      console.log('组件被移到另一个节点')
    },

    dettached() {
      console.log('组件被移除掉')
    }

  }


})
