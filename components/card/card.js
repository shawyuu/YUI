Component({
  options: {
    multipleSlots: true 
  },
  properties: {
    text: { //卡片描述文本
      type: String,
      value: ''
    },
    imgUrl: { //卡片图片路径
      type: String,
      value: ''
    },
    avatar: { //头像
      type: String,
      value: ''
    },
    nickname: { //用户名
      type: String,
      value: ''
    },
    info: { //补充描述信息
      type: String,
      value: ''
    },
    isRadius: { //卡片是否带圆角
      type: Boolean,
      value: false
    },
  },
  data: {
    isShow:false
  },
  methods: {
    clickMoreAction(){
      if (this.data.isShow){
        this.setData({
          isShow: false
        })
      }else{
        this.setData({
          isShow: true
        })
      }
    }
  }
})
