Component({
  options: {
    multipleSlots: true
  },
  properties: {
    text: { // 页脚文本
      type: String,
      value: ''
    },
    url: { // 页脚跳转链接
      type: String,
      value: ''
    },
    bgColor: { // 页脚背景颜色
      type: String,
      value: 'none'
    },
    color: { // 页脚字体文本颜色
      type: String,
      value: '#999'
    },
    size: { // 页脚文本字体尺寸
      type: [Number, String],
      value: 13
    },
    isFix: { // 页脚是否固定在底部
      type: Boolean,
      value: false
    }
  },
  data: {
    fix: false //判断是否采用固定布局
  },
  ready() {
    if (this.data.isFix) {
      this.checkFixed();
    }
  },
  methods: {
    //检查是否需要固定布局
    checkFixed() {
      let {windowHeight} = wx.getSystemInfoSync();
      this.createSelectorQuery().select("#footer").boundingClientRect((res) => {
        let top = res.top;
        let height = windowHeight - res.height;
        if (top < height) {
          this.setData({
            fix: true
          })
        }
      }).exec();
    },
    bindClick: function() {
      this.triggerEvent('click')
    }
  }
})