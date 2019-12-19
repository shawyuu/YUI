Component({
  relations: {
    './tabspanel': {
      type: 'child'
    },
  },
  options: {
    multipleSlots: true
  },
  properties: {
    tabs: { //选项卡导航栏
      type: Array,
      value: []
    },
    swipeable: { //允许滑动切换
      type: Boolean,
      value: false
    },
    bgColor: { //导航栏背景颜色
      type: String,
      value: '#fff'
    },
    color: { //导航栏文本颜色
      type: String,
      value: '#333'
    },
    currentColor: { //当前激活的颜色
      type: String,
      value: '#3565ee'
    },
    index: { //当前激活的导航栏
      type: [String, Number],
      value: 0
    }
  },
  data: {
    current: 0,
    panelArr: []
  },
  lifetimes: {
    attached: function() {
      this.setData({
        current: this.data.index
      })
    },
    ready() {
      this.initTabs();
    }
  },
  methods: {
    //初始化
    initTabs() {
      let panels = this.getRelationNodes('./tabspanel');
      if (panels.length == 0) return;
      let panelArr = panels.map((item, index) => {
        return {
          index: index,
          key: item.data.key
        };
      });
      this.setData({
        panelArr: panelArr
      });
    },
    tabClick(e) {
      let cur = parseInt(e.currentTarget.id);
      this.handIxport(cur);
    },
    tabScroll(e) {
      let cur = e.detail.current;
      this.handIxport(cur);
    },
    handIxport(cur){
      if (cur != this.data.current) {
        this.setData({
          current: cur
        })
        this.triggerEvent("change", cur);
      } else {
        return
      }
    }
  }
})