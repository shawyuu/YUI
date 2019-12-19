Component({
  properties: {
    color: { //标签颜色
      type: String,
      value: '#ccc'
    },
    value: { //标签名称
      type: String,
      value: ''
    },
    size: { //标签尺寸，small，normal，large
      type: String,
      value: 'normal'
    },
    isPlain: { //是否是镂空标签
      type: Boolean,
      value: false
    },
    isRound: { //是否是圆角标签
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
