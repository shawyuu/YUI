Component({
  relations: {
    './waterfall': {
      type: 'parent'
    },
    linked: function () {
      this.bindClick()
    },
  },
  options: {
    multipleSlots: true
  },
  properties: {
    key: { //卡片描述文本
      type: String,
      value: ''
    },
    text: { //卡片描述文本
      type: String,
      value: ''
    },
    img: { //图片
      type: String,
      value: ''
    },
    header: { //头像
      type: String,
      value: '/img/default.png'
    },
    info: { //信息
      type: String,
      value: ''
    },
    isRadius: { //卡片是否带圆角
      type: Boolean,
      value: true
    },
  },
  data: {
    isShow: false,
    height:''
  },
  lifetimes: {
    ready() {
      // this.initData();
    }
  },
  methods: {
    bindClick(val) {
      let parent = this.getRelationNodes('./waterfall');
      parent[0].changeCurrent(id)
    }
  }
})
