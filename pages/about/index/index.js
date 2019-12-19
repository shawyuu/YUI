Page({
  data: {

  },
  onLoad: function (options) {

  },
  copyGitUrl(){
    wx.setClipboardData({
      data: 'data',
      success(res) {
        wx.getClipboardData({
          success(res) {
            wx.showToast({
              title: '复制成功',
              icon:'none'
            })
          }
        })
      }
    })
  }
})