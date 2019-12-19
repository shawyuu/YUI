Component({
  relations: {
    './radio': {
      type: 'child'
    }
  },
  options: {
    multipleSlots: true
  },
  properties: {
    type: { // 单选框类型inline/block
      type: String,
      value: 'inline'
    },
    label: { // 表单label,只在type=inline时有效
      type: String,
      value: ''
    },
  },
  data: {

  },
  methods: {
    radioGroupChange(value) {
      let nodes = this.getRelationNodes('./radio');
      if (nodes.length <= 0) return;
      for (let i = 0; i < nodes.length; i++) {
        let data = nodes[i].data;
        if (value == i) {
          nodes[i].radioChangeCurrent(true);
        }else{
          nodes[i].radioChangeCurrent(false);
        }
      }
      this.triggerEvent('change', value)
    }
  }
})
