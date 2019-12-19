// components/textarea/textarea.js
Component({
  options: {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },
  properties: {
    label: { // 表单label
      type: String,
      value: ''
    },
    value: { // 输入框的内容
      type: String,
      value: ''
    },
    placeholder: { // 输入框为空时占位符
      type: String,
      value: ''
    },
    maxlength: { // 最大输入长度，设置为 -1 的时候不限制最大长度
      type: [String, Number],
      value: 140
    },
    disabled: { // 是否禁用
      type: Boolean,
      value: false
    },

  },

  /**
   * 组件的初始数据
   */
  data: {
    valueLength:0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    //失去焦点
    bindTextareaBlur(e) {
      let val = e.detail;
      this.triggerEvent('blur', val)
    },
    //获得焦点
    bindTextareaFocus(e) {
      let val = e.detail;
      this.triggerEvent('focus', val)
    },
    //键盘输入时触发
    bindTextareaInput(e){
      let val = e.detail;
      this.setData({
        valueLength: val.value.length
      })
      this.triggerEvent('input', val)
    }
  }
})
