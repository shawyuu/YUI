// pages/component/toast/toast.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    toastHidden:true,
    iconHidden: false,
    icon:'icon-circle_select',
    tip:'已完成'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  showToast:function(){
    this.setData({
      toastHidden:false,
      iconHidden: false,
      icon: 'icon-circle_select',
      tip: '已完成'
    })
    setTimeout(this.hiddenToast,3000)
  },
  showToast1: function () {
    this.setData({
      toastHidden: false,
      iconHidden: false,
      icon: 'icon-close',
      tip: '取消操作'
    })
    setTimeout(this.hiddenToast, 3000)
  },
  showToast2: function () {
    this.setData({
      toastHidden: false,
      iconHidden: false,
      icon: 'icon-warning_fill',
      tip: '禁止操作'
    })
    setTimeout(this.hiddenToast, 3000)
  },
  showToast3: function () {
    this.setData({
      toastHidden: false,
      iconHidden: true,
      icon: '',
      tip: '文本提示'
    })
    setTimeout(this.hiddenToast, 3000)
  },
  hiddenToast:function(){
    this.setData({
      toastHidden: true,
      iconHidden: true,
      icon: '',
      tip: ''
    })
  }
})