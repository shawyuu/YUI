let arr = ['标题栏1', '标题栏2', '标题栏3', '标题栏4', '标题栏5', '标题栏6', '标题栏7', '标题栏8', '标题栏9', '标题栏10']
Page({
  data: {
    tabs: ['选项一', '选项二', '选项三'],
    list:[]
  },
  onLoad: function (options) {
    this.setData({
      list: arr
    })
  },
  onPullDownRefresh: function () {
    // 显示顶部刷新图标
    wx.showNavigationBarLoading();
    this.setData({
      list: arr
    })
    // 隐藏导航栏加载框
    wx.hideNavigationBarLoading();
    // 停止下拉动作
    wx.stopPullDownRefresh();
  },
  onReachBottom: function () {
    console.log(111)
    let list = this.data.list;
    arr.forEach(item => {
      list.push(item);
    })
    this.setData({
      list: list
    })
  },
})