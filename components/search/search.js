// components/search/search.js
Component({
  properties: {
    placeholder: { //占位文字
      type: String,
      value: ''
    },
    hotList: { //热门搜索数据
      type: Array,
      value: []
    },
    color: { //搜索或取消文字颜色
      type: String,
      value: ''
    },
  },
  data: {
    inputText:'取消',
    inputVal:'',
    isSearch:false,
    historyList:[]
  },
  //生命周期
  lifetimes: {
    created: function () {
    },
    attached: function () {
    }
  },
  methods: {
    //获取输入框焦点
    bindFocus() {
      let historyList = wx.getStorageSync("history");
      if (historyList && historyList.length > 0){
        this.setData({
          historyList: historyList
        })
      }
      if (this.data.inputVal){
        this.setData({
          inputText: '搜索'
        })
      }
      this.setData({
        isSearch: true
      })
    },
    //清除输入框
    clearInput(){
      this.setData({
        inputVal: '',
        inputText: '取消'
      })
      this.triggerEvent('clear')
    },
    //输入框输入内容
    bindInputKeyword(e) {
      if (e.detail.value) {
        this.setData({
          inputText: '搜索',
          inputVal: e.detail.value
        })
      } else {
        this.setData({
          inputText: '取消'
        })
      }
    },
    //搜索
    bindKeywordSearch(e){
      let keyword = e.currentTarget.dataset.keyword || this.data.inputVal;
      if (keyword){
        this.setData({
          isSearch: false,
          inputVal: keyword
        })
        let historyList = wx.getStorageSync("history") || [];
        //去除重复的历史搜索记录
        for (let i = 0; i < historyList.length;i++){
          if (historyList[i] == keyword){
            historyList.splice(i, 1);
            break;
          }
        }
        //只保存5条历史搜索记录
        if (historyList.length >= 5){
          historyList.splice(-1,1);
        }
        historyList.unshift(keyword);
        wx.setStorageSync("history", historyList);
      } else {
        this.setData({
          isSearch: false
        })
      }
      this.triggerEvent('search', keyword)
    },
    bindHotSearch(e){
      let keyword = e.currentTarget.dataset.keyword;
      this.setData({
        isSearch: false,
        inputVal: keyword
      })
      this.triggerEvent('search', keyword)
    }
  }
})
