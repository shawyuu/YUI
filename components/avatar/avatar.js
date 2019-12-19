// components/avatar/avatar.js
Component({
  properties: {
    src: { //头像图片路径
      type: String,
      value: ''
    },
    shape: { //头像形状
      type: [String,Number],
      value: 4
    },
    size: { //头像尺寸
      type: [String, Number],
      value: 48
    },
    bgColor: { //头像背景颜色
      type: String,
      value: ''
    },
    text: { //文本头像文本,优先级低于src,有图片头像时无效
      type: String,
      value: ''
    },
    textSize: { //文本字体大小
      type: [String, Number],
      value: 16
    },
    tagBg: { //头像标签背景
      type: String,
      value: ''
    },
    tagText: { //头像标签文本
      type: String,
      value: ''
    },
    avatarArr: { //头像组
      type: Array,
      value: []
    },
    isSlot: { //是否挂载插槽
      type: Boolean,
      value: false
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },
  lifetimes: {
    attached: function () {
     
    }
  },
  /**
   * 组件的方法列表
   */
  methods: {
    bindClick: function () {
      this.triggerEvent('click')
    }
  }
})
