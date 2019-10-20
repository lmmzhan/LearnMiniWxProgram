// components/cpn-prop/cpn-prop.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    //  title: String
    title:{
       type:String,
       value:'我是默认的标题',
      observer:function(newVar,oldVar){
        console.log(newVar, oldVar)
      }

    }

  },

  externalClasses:['titleclass']

})
