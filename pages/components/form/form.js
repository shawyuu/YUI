Page({
  data: {
    radio: [
      { 'value': 0, 'name': '单选1' },
      { 'value': 1, 'name': '单选2' }
    ],
    radioList: [
      { 'value': 0, 'name': '这里是单选选项' },
      { 'value': 1, 'name': '这里是有一点长度的单选选项' },
      { 'value': 2, 'name': '这里是很长很长很长的很长很长很长的很长很长很长的单选选项' }
    ],
    checkboxList: [
      { 'value': 0, 'name': '这里是多选选项' },
      { 'value': 1, 'name': '这里是有一点长度的多选选项' },
      { 'value': 2, 'name': '这里是很长很长很长的很长很长很长的很长很长很长的多选选项' }
    ],
    actionList: ['A', 'B', 'C'],
    actionValue: '',
    index: 0,
    pickerList: [
      { 'value': 0, 'name': '选项1' },
      { 'value': 1, 'name': '选项2' },
      { 'value': 2, 'name': '选项3' }
    ],
    multiIndex: [],
    multiArray: [['第1列1', '第1列2'], ['第2列1', '第2列2', '第2列3', '第2列4']],
    multiArrayObj: [[
      { 'value': 0, 'name': '第1列选项1' },
      { 'value': 1, 'name': '第1列选项2' },
      { 'value': 2, 'name': '第1列选项3' }
    ], [
      { 'value': 0, 'name': '第2列选项1' },
      { 'value': 1, 'name': '第2列选项2' },
      { 'value': 2, 'name': '第2列选项3' }
    ]],
    timeValue: '',
    dateValue: '',
    region: ['广东省', '广州市', '海珠区'],
    regionValue: [],
    customItem: '全部'
  },
  onLoad: function (options) {

  },
  bindCheckbox(e) {
    console.log(e.detail)
  },
  radioChange(e) {
    console.log(e.detail)
  },
  bindAction() {
    let _this = this;
    wx.showActionSheet({
      itemList: _this.data.actionList,
      success(res) {
        _this.setData({
          actionValue: res.tapIndex
        })
      },
      fail(res) {
        console.log(res.errMsg)
      }
    })
  },
  //单列选择器
  pickerChange(e) {
    console.log(e.detail)
    console.log(this.data.pickerList[this.data.index].name)
    this.setData({
      index: e.detail
    })
  },
  //多列选择器
  multiPickerChange(e) {
    console.log(e.detail)
    this.setData({
      multiIndex: e.detail
    })
  },
  //列改变
  multiColumnChange(e) {
    console.log(e.detail)
    // console.log(e.detail.detail)
    // this.setData({
    //   multiIndex: e.detail
    // })
  },
  //时间选择器
  pickerTimeChange(e) {
    this.setData({
      timeValue: e.detail
    })
  },
  //时间选择器
  pickerDateChange(e) {
    this.setData({
      dateValue: e.detail
    })
  },
  //省市区选择器
  pickerRegionChange(e) {
    this.setData({
      regionValue: e.detail
    })
  },
})