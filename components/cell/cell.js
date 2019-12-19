Component({
  properties: {
    url: { //单元格跳转链接
      type: String,
      value: ''
    },
    title: { //单元格标题
      type: String,
      value: ''
    },
    titleColor: {  //单元格标题颜色
      type: String,
      value: ''
    },
    leftImg: { //单元格左侧图片路径
      type: String,
      value: ''
    },
    leftSize: { //单元格左侧图片尺寸
      type: [String, Number],
      value: '18'
    },
    rightImg: { //单元格右侧图片路径
      type: String,
      value: ''
    },
    rightSize: { //单元格右侧图片尺寸
      type: [String, Number],
      value: '18'
    },
    valueColor: {  //单元格右侧说明文字颜色
      type: String,
      value: ''
    },
    value: { //单元格右侧说明文字
      type: String,
      value: ''
    },
    showArrow: { //是否展示箭头
      type: Boolean,
      value: false
    }
  },
  options: {
    multipleSlots: true
  },
  methods: {
    bindClick: function () {
      this.triggerEvent('click')
    }
  }
})