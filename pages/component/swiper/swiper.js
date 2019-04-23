// pages/component/swiper/swiper.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    current:0
  },
  cardSwiper(e) {
    this.setData({
      current: e.detail.current
    })
  }
})