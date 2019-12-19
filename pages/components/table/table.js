// pages/components/table/table.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    thead: {
      order: '序号',
      nickName: '昵称',
      age: '年龄',
      tell: '电话',
      address: '住址',
      qq: 'qq',
      msg: '详细信息'
    },
    width: {
      order: 40,
      nickName: 96,
      age: 40,
      tell: 100,
      address: 100,
      qq: 100,
      msg: 100
    },
    tbody: [{
      order: '1',
      nickName: '张三三',
      age: '32',
      tell: '13600000000',
      address: '广州市天河区',
      qq: '222222222',
      msg: '这里是很长的详细信息'
    },
    {
      order: '2',
      nickName: '李四',
      age: '19',
      tell: '13600000000',
      address: '广东省广州市天河区体育西路体育中心',
      qq: '88888888',
      msg: '这里是很长的详细信息'
    },
    {
      order: '3',
      nickName: '王五',
      age: '36',
      tell: '13600000000',
      address: '荔湾区',
      qq: '123456789',
      msg: '这里是很长的详细信息'
    },
    {
      order: '3',
      nickName: 'shaw',
      age: '28',
      tell: '18520202020',
      address: '广东省广州市天河区天河路',
      qq: '758815944',
      msg: '这里是很长的详细信息'
    },
    {
      order: '3',
      nickName: '欧阳阳阳',
      age: '25',
      tell: '18699999999',
      address: '广东省广州市海珠区',
      qq: '123456789',
      msg: '这里是很长的详细信息'
    },
    {
      order: '3',
      nickName: '赵六',
      age: '36',
      tell: '13598844646',
      address: '广州市越秀区',
      qq: '123456789',
      msg: '这里是很长的详细信息'
    }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})