
Page({
  data: {
    dialogHidden:true,
    titleHidden: false,
    cancelHidden: false,
    msg:"弹窗内容，告知当前状态、信息和解决办法，描述文字尽量控制在三行内",
    confirmText:"确定",
    cancelText:"取消",
    title:"提示"
  },
  onLoad: function (options) {

  },
  showDialog:function(){
    this.setData({
      titleHidden: false,
      cancelHidden: false,
      dialogHidden:false
    })
  },
  showDialog2: function () {
    this.setData({
      titleHidden: false,
      cancelHidden: true,
      dialogHidden: false
    })
  },
  showDialog3: function () {
    this.setData({
      titleHidden: true,
      cancelHidden: true,
      dialogHidden: false
    })
  },
  cancelHandle: function () {
    this.setData({
      dialogHidden: true
    })
  },
  comfirmHandle: function () {
    this.setData({
      dialogHidden: true
    })
  }

})