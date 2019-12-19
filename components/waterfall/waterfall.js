Component({
  relations: {
    './waterfallitem': {
      type: 'child'
    },
    linked: function () {
      this.initGrids()
    }
  },
  options: {
    multipleSlots: true
  },
  properties: {
    list: { //瀑布流
      type: Array,
      value: []
    }
  },
  data: {
    waterfallList:[],
    leftList: [], //左侧集合
    rightList: [], //右侧集合
  },
  lifetimes: {
    ready() {
      this.initGrids()
    },
    observers: {
      'waterfallList': function () {
      this.initGrids()
      }
    }
  },
  methods: {
    initGrids() {
      let nodes = this.getRelationNodes('./waterfallitem');
      if (nodes.length == 0) return;
      let waterfallList = nodes.map((item, index) => {
        console.log(item.data)
        return {
          index: index,
          key: item.data.key
        };
      });
      this.setData({
        waterfallList: waterfallList
      });
    }
  }
})