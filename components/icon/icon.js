Component({
  options: {
    multipleSlots: true 
  },
  properties: {
    type: { //图标名称
      type: String,
      value: ''
    },
    color: { //图标颜色
      type: String,
      value: '#333333'
    },
    size: { //图标尺寸
      type: [Number, String],
      value: '16'
    },
    lineHeight: { //图标行高
      type: [Number, String],
      value: '1.6'
    },
  },
  data: {

  },
  methods: {
    onClick(){
      this.triggerEvent('click')
    }
  }
})
