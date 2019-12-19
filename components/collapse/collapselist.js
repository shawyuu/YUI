Component({
  relations: {
    './collapse': {
      type: 'parent' // 关联的目标节点应为子节点
    }
  },
  options: {
    multipleSlots: true
    // pureDataPattern: /^_/ // 指定所有 _ 开头的数据字段为纯数据字段
  },
  properties: {
    title: { //折叠面板标题
      type: String,
      value: ''
    },
    content: { //折叠面板内容
      type: String,
      value: ''
    },
    imgUrl: { //折叠面板标题栏左侧图标
      type: String,
      value: ''
    },
    imgSize: { //折叠面板标题栏左侧图标尺寸 最好不要超过24
      type: [Number, String],
      value: 16
    },
    index: { //当前子组件的下标
      type: [Number, String],
      value: ''
    },
  },
  data: {
    showContent: false
  },
  methods: {
    changeCurrent() {
      if (this.data.showContent) {
        this.setData({
          showContent: false
        });
      } else {
        this.setData({
          showContent: true
        });
      }
    },
    changeCollapse(val) {
      this.setData({
        showContent: val
      });
    },
    bindClick(val) {
      let parent = this.getRelationNodes('./collapse');
      let idx = val.currentTarget.dataset.index;
      parent[0].changeCurrent(idx)
      this.triggerEvent('click')
    }
  }
})