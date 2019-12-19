Component({
  properties: {
    title: { // 对话框标题
      type: String,
      value: '提示'
    },
    text: { // 对话框内容
      type: String,
      value: ''
    },
    cancelText: { // 左侧按钮文本
      type: String,
      value: '取消'
    },
    cancelColor: { // 左侧按钮文本颜色
      type: String,
      value: ''
    },
    comfirmText: { // 右侧按钮文本
      type: String,
      value: '确定'
    },
    comfirmColor: { // 右侧按钮文本颜色
      type: String,
      value: ''
    },
    align: { // 中间文本对齐方式
      type: String,
      value: 'left'
    },
  },
  options: {
    multipleSlots: true
  },
  data: {
    showDialog: true
  },
  methods: {
    //防止遮罩穿透
    catchTouch: function() {
      return;
    },
    //对话框取消操作
    cancelEvent: function() {
      this.setData({
        showDialog: false
      })
    },
    comfirmEvent: function() {
      this.setData({
        showDialog: false
      })
      this.triggerEvent('comfirm')
    }
  }
})