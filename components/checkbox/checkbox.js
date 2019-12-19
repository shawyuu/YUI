Component({
  relations: {
    './checkboxgroup': {
      type: 'parent'
    }
  },
  options: {
    multipleSlots: true 
  },
  properties: {
    text: { // checkbox选项文本
      type: String,
      value: ''
    },
    value: { // checkbox标识
      type: [Number, String],
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
    },
    color: { // checkbox的颜色
      type: String,
      value: ''
    }
  },
  data: {
    isCheck:false
  },
  lifetimes: {
    ready() {
      this.initData()
    }
  },
  methods: {
    initData(){
      this.setData({
        isCheck: this.data.checked
      })
    },
    checkboxClick(e) {
      let parent = this.getRelationNodes('./checkboxgroup')
      let value = e.currentTarget.dataset.value;
      if (this.data.isCheck){
        this.setData({
          isCheck: false
        })
      }else{
        this.setData({
          isCheck: true
        })
      }
      parent[0].checkboxChange()
    }
  }
})
