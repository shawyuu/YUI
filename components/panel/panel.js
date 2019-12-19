Component({
  options: {
    multipleSlots: true
  },
  properties: {
    url: { // 跳转链接
      type: String,
      value: ''
    },
    imgUrl: { // 图片链接
      type: String,
      value: ''
    },
    imgWidth: { // 图片宽度
      type: [Number, String],
      value: 48
    },
    imgHeight: { // 图片高度
      type: [Number, String],
      value: 48
    },
    imgRadius: { // 图片圆角
      type: [Number, String],
      value: 5
    },
    title: { // 面板标题
      type: String,
      value: ''
    },
    desc: { // 面板说明
      type: String,
      value: ''
    },
    action: { // 是否显示操作插槽
      type: Boolean,
      value: false
    }
  },
  data: {

  },
  methods: {
    bindClick: function () {
      this.triggerEvent('click')
    }
  }
})
