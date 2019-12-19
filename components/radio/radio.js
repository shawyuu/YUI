Component({
  relations: {
    './radiogroup': {
      type: 'parent'
    }
  },
  options: {
    multipleSlots: true 
  },
  properties: {
    text: { // radio选项文本
      type: String,
      value: ''
    },
    value: { // radio 标识
      type: [Number, String],
      value: ''
    },
    color: { // 图标颜色
      type: String,
      value: ''
    },
    checked: { // 是否选中
      type: Boolean,
      value: false
    },
    disabled: { // 是否禁用
      type: Boolean,
      value: false
    },
    showBorder: { // 是否显示分割线条
      type: Boolean,
      value: false
    }
  },
  data: {
    type:'inline',
    isCheck: false
  },
  lifetimes: {
    ready() {
      this.initData()
    }
  },
  methods: {
    //数据初始化
    initData() {
      let parent = this.getRelationNodes('./radiogroup')
      this.setData({
        type: parent[0].data.type,
        isCheck: this.data.checked
      })
    },
    //单选点击触发事件
    radioClick(e) {
      let parent = this.getRelationNodes('./radiogroup')
      let value = e.currentTarget.dataset.value;
      parent[0].radioGroupChange(value)
    },
    //选中未选中判断
    radioChangeCurrent(isCheck) {
      if (isCheck) {
        this.setData({
          isCheck: true
        })
      } else {
        this.setData({
          isCheck: false
        })
      }
    }
  }
})
