Component({
  relations: {
    './collapselist': {
      type: 'child' // 关联的目标节点应为子节点
    }
  },
  options: {
    multipleSlots: true
  },
  properties: {
    accordion: { // 是否开启手风琴效果
      type: Boolean,
      value: false
    },
    current: { //当前显示展开的下标
      type: [Number, String],
      value: -1
    }
  },
  data: {
    currentIndex:-1
  },
  lifetimes: {
    ready() {
      this.changeCurrent()
    }
  },
  methods: {
    changeCurrent(val) {
      let nodes = this.getRelationNodes('./collapselist');
      let index = val >= 0 ? val:this.data.current;
      if (index < 0) return;
      if (index == this.data.currentIndex){
        nodes[index].changeCurrent();
        return;
      }
      for (let i = 0; i < nodes.length; i++) {
        if (this.data.accordion) {
          if (index === i) {
            nodes[i].changeCollapse(true);
          } else {
            nodes[i].changeCollapse(false);
          }
        }else{
          if (index === i) {
            nodes[i].changeCurrent();
          } 
        }
      }
      this.setData({
        currentIndex:index
      })
    }
  }
})