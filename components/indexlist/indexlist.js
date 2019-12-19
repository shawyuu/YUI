Component({
  options: {
    multipleSlots: true
  },
  properties: {
    listData: { //数据源
      type: Array,
      value: []
    },
    topHeight: { //列表到顶部的距离
      type: [Number,String],
      value: 0
    },
    animation: { //是否使用动画过渡
      type: Boolean,
      value: false
    },
    backTop: { //iOS点击顶部状态栏、安卓双击标题栏时，滚动条返回顶部，只支持竖向
      type: Boolean,
      value: false
    }
  },
  data: {
    isShow:false, // 显示隐藏当前索引
    itemIndex:0, // 索引列表的下标
    navInfo: {}, // 索引列表的属性
    listIndex:0,
    lists:[],
    scrollTop: 0 // 滚动的距离
  },
  lifetimes: {
    ready() {
      console.log(this.data.listData)
      if (this.data.listData.length > 0) {
        this.init();
      }
    }
  },
  methods: {
    /**数据初始化**/
    init(){
      let {windowHeight, windowWidth} = wx.getSystemInfoSync();
      console.log(windowHeight)
      //获取并设置索引列表的属性
      this.createSelectorQuery().select("#scrollNav").boundingClientRect((res) => {
        this.navInfo={
          len: this.data.listData.length,
          itemHeight: res.height / this.data.listData.length,
          top:res.top,
          bottom: res.top + res.height
        }
      }).exec();
      //获取整个列表的属性
      this.createSelectorQuery().select("#scrollListWrap").boundingClientRect((res) => {
        let maxScrollTop = res.height - (windowHeight - this.data.topHeight);
        //获取每个节点的信息
        this.createSelectorQuery().selectAll(".scroll-view-list").boundingClientRect((res) => {
          // console.log(res)
          this.lists = res.map((item, index) => {
            let top = item.top - this.data.topHeight;
            let scrollTop = top >= maxScrollTop ? maxScrollTop : top;
            return {
              scrollTop: top,
              scrollIndex: index,
              top: top,
              bottom: item.bottom
            }
          });
        }).exec();
      }).exec();
    },
    //设值
    setValue(index){
      if (index == this.data.itemIndex) return;
      let { scrollTop, scrollIndex } = this.lists[index];
      this.setData({
        itemIndex: index,
        isShow: true,
        scrollTop: scrollTop,
        listIndex: scrollIndex
      });
    },
    //获取当前索引值
    getCurrentItem(pageY) {
      let info = this.navInfo;
      if (pageY < info.top) {
        return 0
      } else if (pageY >= info.bottom) {
        return info.len - 1
      } else {
        return Math.floor((pageY - info.top) / info.itemHeight)
      }
    },
    /**页面滚动**/
    scroll(e){
      // console.log(e)
    },
    /**触摸开始**/
    touchStart(e) {
      let touch = e.changedTouches[0];
      if (!touch) return;
      let itemIndex = this.getCurrentItem(touch.pageY);
      this.setValue(itemIndex);
    },
    /**触摸移动**/
    touchMove(e) {
      let touch = e.changedTouches[0];
      if (!touch) return;
      let itemIndex = this.getCurrentItem(touch.pageY);
      this.setValue(itemIndex);
    },
    /**触摸结束**/
    touchEnd(e) {
      let endTouch = e.changedTouches[0].pageY;
      setTimeout(() => {
        this.setData({
          isShow: false
        });
      }, 200);
    },
    itemClick(e){
      let data = e.currentTarget.dataset;
      this.triggerEvent('click', data);
    }
  }
})