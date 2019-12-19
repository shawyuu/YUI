Component({
  relations: {
    './griditem': {
      type: 'child'
    },
  },
  options: {
    multipleSlots: true
  },
  properties: {
    width: { //九宫格单格所占屏幕宽度比例
      type: [String, Number],
      value: ''
    }
  },
  data: {
    gridItems: []
  },
  lifetimes: {
    ready() {
      this.initGrids()
    }
  },
  methods: {
    initGrids() {
      let items = this.getRelationNodes('./griditem');
      if (items.length == 0) return;
      let gridItems = items.map((item, index) => {
        return {
          index: index,
          key: item.data.key
        };
      });
      this.setData({
        gridItems: gridItems
      });
    }
  }
})