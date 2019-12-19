Component({
  options: {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },
  properties: {
    label: { // 表单label
      type: String,
      value: ''
    },
    type: { // 样式，有效值：switch, checkbox
      type: String,
      value: ''
    },
    color: { // switch 的颜色，同 css 的 color
      type: String,
      value: '#3565ee'
    },
    checked: { // 是否选中
      type: Boolean,
      value: false
    },
    disabled: { // 是否禁用
      type: Boolean,
      value: false
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
    bindSwitchChange(e){
      this.triggerEvent('change', e.detail)
    }
  }
})
