Page({

  data: {

  },
  onLoad: function (options) {

  },
  bindHome(){
    wx.reLaunch({
      url: '/pages/index/index',
    })
  },
  bindBack() {
    wx.navigateBack({
      delta: 1
    })
  }
})