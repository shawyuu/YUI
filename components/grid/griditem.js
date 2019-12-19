Component({
  relations: {
    './grid': {
      type: 'parent'
    }
  },
  options: {
    multipleSlots: true
  },
  properties: {
    key: { //挂载名称
      type: String,
      value: ''
    },
    url: { //跳转链接
      type: String,
      value: ''
    },
    imgUrl: { //图标路径
      type: String,
      value: ''
    },
    imgSize: { //图片/图标尺寸
      type: [String, Number],
      value: '24'
    },
    text: { //文本
      type: String,
      value: ''
    },
    textColor: { //文本颜色
      type: String,
      value: ''
    },
    textSize: { //文本字体大小
      type: [String, Number],
      value: 14
    }
  },
  data: {
  },
  methods: {
    clickGrid(e) {
      let index = e.currentTarget.dataset.index;
      if (e.currentTarget.dataset.url) {
        wx.navigateTo({
          url: e.currentTarget.dataset.url
        })
      }
      this.triggerEvent('click', index)
    }
  }
})
