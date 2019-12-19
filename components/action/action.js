Component({
  options: {
    multipleSlots: true 
  },
  properties: {
    label: { // 表单label
      type: String,
      value: ''
    },
    value: { // 值
      type: String,
      value: ''
    },
    placeholder: { // 占位符
      type: String,
      value: ''
    },
    showArrow: { //是否展示箭头
      type: Boolean,
      value: false
    }
  },
  data: {
    
  },
  methods: {
    bindClick(e) {
      let value = e.currentTarget.dataset.value
      this.triggerEvent('click', value)
    }
  }
})
