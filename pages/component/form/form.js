// pages/component/form/form.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    radios: [
      { name: '单选操作', value: '0' },
      { name: '单选操作', value: '1' }
    ],
    checkboxs: [
      { name: '多选操作', value: '0', checked: true },
      { name: '多选操作', value: '1' },
      { name: '多选操作', value: '2' }
    ],
    time: "10:00",
    date: "2016-01-01",
  },
  radioChange: function (e) {
    let radios = this.data.radios;
    for (let i = 0, len = radios.length; i < len; ++i) {
      radios[i].checked = radios[i].value == e.detail.value;
    }
    this.setData({
      radios: radios
    });
  },
  checkboxChange: function (e) {
    let checkboxs = this.data.checkboxs, values = e.detail.value;
    for (let i = 0, lenI = checkboxs.length; i < lenI; ++i) {
      checkboxs[i].checked = false;
      for (let j = 0, lenJ = values.length; j < lenJ; ++j) {
        if (checkboxs[i].value == values[j]) {
          checkboxs[i].checked = true;
          break;
        }
      }
    }
    this.setData({
      checkboxs: checkboxs
    });
  },
  bindDateChange: function (e) {
    this.setData({
      date: e.detail.value
    })
  },
  bindTimeChange: function (e) {
    this.setData({
      time: e.detail.value
    })
  },
})