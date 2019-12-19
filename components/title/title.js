Component({
  properties: {
    title: { //标题名称
      type: String,
      value: ''
    },
    titleColor: { //标题颜色
      type: String,
      value: '#333'
    },
    titleSize: { //标题字体大小
      type: [String, Number],
      value: '14'
    },
    text: { //右侧文本
      type: String,
      value: ''
    },
    textColor: { //右侧文本颜色
      type: String,
      value: '#999'
    },
    textSize: { //右侧文本字体大小
      type: [String, Number],
      value: '13'
    },
    imgUrl: { //图标/图片路径
      type: String,
      value: ''
    },
    imgSize: { //图标尺寸
      type: [String, Number],
      value: '20'
    }
  },
  data: {

  },
  methods: {
    bindAction: function () {
      this.triggerEvent('action')
    }
  }
})
