Page({
  data: {
    hotList: ['热门1', '热门2', '热门3', '热门4', '热门5', '热门6', '热门7']
  },
  onLoad: function (options) {

  },
  bindSearch(e){
    console.log(e.detail)
  },
  bindClear() {
    console.log('清除搜索框操作')
  }
})