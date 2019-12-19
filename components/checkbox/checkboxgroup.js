Component({
  options: {
    multipleSlots: true 
  },
  relations: {
    './checkbox': {
      type: 'child'
    }
  },
  properties: {
    
  },
  data: {
  },
  methods: {
    checkboxChange(){
      let nodes = this.getRelationNodes('./checkbox');
      if (nodes.length <= 0) return;
      let values = [];
      for (let i = 0; i < nodes.length;i++){
        let data = nodes[i].data;
        values.push(data.value);
        if (!data.isCheck && !data.disabled) {
          values.pop(data.value)
        }
      }      
      this.setData({
        values: values
      })
      this.triggerEvent('change',values)
    }
  }
})