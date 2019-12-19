Component({
  options: {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },
  properties: {
    indicatorDots: { // 是否显示面板指示点
      type: Boolean,
      value: false
    },
    indicatorColor: { // 指示点颜色
      type: String,
      value: 'rgba(0, 0, 0, .3)'
    },
    indicatorActiveColor: { // 当前选中的指示点颜色
      type: String,
      value: '#000000'
    },
    autoplay: { // 是否自动切换
      type: Boolean,
      value: false
    },
    current: { // 当前所在滑块的 index
      type: [Number,String],
      value: 0
    },
    interval: { // 自动切换时间间隔
      type: [Number, String],
      value: 5000
    },
    duration: { // 滑动动画时长
      type: [Number, String],
      value: 500
    },
    circular: { // 是否采用衔接滑动
      type: Boolean,
      value: false
    },
    vertical: { // 滑动方向是否为纵向
      type: Boolean,
      value: false
    },
    previousMargin: { // 前边距，可用于露出前一项的一小部分，接受 px 和 rpx 值
      type: String,
      value: '0px'
    },
    nextMargin: { // 后边距，可用于露出后一项的一小部分，接受 px 和 rpx 值
      type: String,
      value: '0px'
    },
    displayMultipleItems: { // 同时显示的滑块数量
      type: [Number, String],
      value: 1
    },
    skipHiddenItemLayout: { // 是否跳过未显示的滑块布局，设为 true 可优化复杂情况下的滑动性能，但会丢失隐藏状态滑块的布局信息
      type: Boolean,
      value: false
    },
    easingFunction: { // 指定 swiper 切换缓动动画类型 default  linear  easeInCubic  easeOutCubic  easeInOutCubic
      type: String,
      value: 'default'
    },
    isCard:{
      type: Boolean,
      value: false
    },
    imgUrls: {
      type: Array,
      value: []
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    cur:0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    bindSwiperChange(e){
      let val = e.detail;
      this.setData({
        cur: e.detail.current
      })
      this.triggerEvent('change', val)
    },
    bindSwiperTransition(e) {
      let val = e.detail;
      this.triggerEvent('transition', val)
    },
    bindSwiperAnimationFinish(e) {
      let val = e.detail;
      this.triggerEvent('animationfinish', val)
    },
    //点击图片事件
    bindImgClick(e){
      let value = e.currentTarget.dataset;
      this.triggerEvent('click', value)
    }
  }
})
