Component({
  options: {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },
  properties: {
    label: { // 表单label
      type: String,
      value: ''
    },
    value: { // input的初始内容
      type: String,
      value: ''
    },
    type: { // input 的类型
      type: String,
      value: 'text'
    },
    password: { // 是否是密码类型
      type: Boolean,
      value: false
    },
    placeholder: { // 输入框为空时占位符
      type: String,
      value: ''
    },
    confirmType: { // 设置键盘右下角按钮的文字，仅在type='text'时生效
      type: String,
      value: 'done'
    },
    maxlength: { // 最大输入长度，设置为 -1 的时候不限制最大长度
      type: [String,Number],
      value: 140
    },
    disabled: { // 是否禁用
      type: Boolean,
      value: false
    },
    inputSlot: { // 使用插槽挂载原生input或其他
      type: Boolean,
      value: false
    },
    text:{ // 按钮文本
      type: String,
      value: ''
    },
    textColor: { // 按钮文本颜色
      type: String,
      value: ''
    },
    icon: { // icon类型 success,warn,clear
      type: String,
      value: ''
    },
    src: { // 图片验证码
      type: String,
      value: ''
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
  },

  /**
   * 组件的方法列表
   */
  methods: {
    //失去焦点
    bindBlur(e){
      let val = e.detail;
      this.triggerEvent('blur', val)
    },
    //获得焦点
    bindFocus(e){
      let val = e.detail;
      this.triggerEvent('focus', val)
    },
    //点击完成按钮时触发
    bindConfirm(e) {
      let val = e.detail;
      this.triggerEvent('confirm', val)
    },
    //键盘输入时触发
    bindInput(e){
      let val = e.detail;
      this.triggerEvent('input', val)
    },
    //点击按钮时触发
    bindBtn() {
      this.triggerEvent('btn')
    },
    //点击图片验证码时触发
    bindImgcode(){
      this.triggerEvent('imgcode')
    }
  }
})
