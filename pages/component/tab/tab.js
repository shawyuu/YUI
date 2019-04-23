var sliderWidth = 96; // 需要设置slider的宽度，用于计算中间位置

Page({
  data: {
    tabs: ["tab1", "tab2", "tab3"],
    activeIndex: 0,
    sliderOffset: 0,
    sliderLeft: 0,

    current: 0,
    scrollLeft: 0
  },
  onLoad: function () {
    var that = this;
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          sliderLeft: (res.windowWidth / that.data.tabs.length - sliderWidth) / 2,
          sliderOffset: res.windowWidth / that.data.tabs.length * that.data.activeIndex
        });
      }
    });
  },
  tabClick: function (e) {
    console.log(e)
    this.setData({
      sliderOffset: e.currentTarget.offsetLeft,
      activeIndex: e.currentTarget.id
    });
  },

  scrollNav(e) {
    let cur = e.currentTarget.dataset.id;
    if (cur != this.data.current){
      this.setData({
        current: e.currentTarget.dataset.id,
        scrollLeft: (e.currentTarget.dataset.id - 1) * 60
      })
    }else{
      return
    }
  },

  scrollTab(e) {
    let cur = e.detail.current;
    let scroll = this.data.scrollLeft;
    if (cur > this.data.current) {
      scroll = scroll + 60;
    } else if (cur < this.data.current) {
      scroll = scroll - 60;
    }else{
      return
    }
    this.setData({
      current: cur,
      scrollLeft: scroll
    });
  }
});