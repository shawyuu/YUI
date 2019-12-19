Component({
  options: {
    multipleSlots: true
  },
  properties: {
    title: { // 导航栏标题
      type: String,
      value: ''
    },
    isCap: { //是否是胶囊图标组
      type: Boolean,
      value: false
    },
    isBack: { //是否显示返回图标
      type: Boolean,
      value: false
    },
    capIconLeft: { // 胶囊左侧图标 home,return,search
      type: String,
      value: 'home'
    },
    capIconRight: { // 胶囊右侧图标 home,return,search
      type: String,
      value: 'return'
    },
    colorTheme: { // 主题颜色风格 white,black
      type: String,
      value: 'black'
    }, 
    bgColor: { // 导航和状态栏背景颜色
      type: String,
      value: ''
    },
    bgImg: { // 导航和状态栏背景图片
      type: String,
      value: ''
    }
  },
  data: {
    custom:{}, // 微信系统胶囊对象
    screenWidth: '', //屏幕宽度
    customHeight: '', //导航栏和状态栏高度
    statusbar: '', //状态栏高度
    custombar: '', //导航栏高度
    marginWidth: '', //导航栏元素间距
    leftWidth:'',
    capWidth: '', //胶囊的宽度
    midWidth:'',//中间内容宽度
    ios:false
  },
  lifetimes: {
    attached: function () {
      let _this=this;
      wx.getSystemInfo({
        success: e => {
          if (e.system.match("iOS")) {
            _this.setData({
              ios:true
            })
          }
          let screenWidth = e.screenWidth;
          let statusbar = e.statusBarHeight;
          let custom = wx.getMenuButtonBoundingClientRect();
          let customHeight = custom.bottom + custom.top - statusbar;
          let custombar = customHeight - statusbar;
          let leftWidth = custom.left + custom.right - screenWidth;
          let marginWidth = screenWidth - custom.right;
          let midWidth = screenWidth - (custom.right - custom.left + 2 * marginWidth);
          _this.setData({
            custom: custom,
            screenWidth: e.screenWidth,
            customHeight: customHeight,
            statusbar: statusbar,
            custombar: custombar,
            leftWidth: leftWidth,
            marginWidth: marginWidth,
            capWidth: custom.right - custom.left,
            midWidth: midWidth
          })
        }
      })
    }
  },
  methods: {
    //自定义返回图标方法
    bindNavBack(){
      wx.navigateBack({
        delta:1
      })
    },
    //自定义胶囊导航左侧图标
    bindCapLeft: function () {
      this.triggerEvent('navLeft')
    },
    //自定义胶囊导航右侧图标
    bindCapRight: function () {
      this.triggerEvent('navRight')
    }
  }
})
