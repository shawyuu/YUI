Component({
  relations: {
    './tabs': {
      type: 'parent'
    }
  },
  options: {
    multipleSlots: true
  },
  properties: {
    key: { //挂载名称
      type: [Number, String],
      value: ''
    }
  },
  data: {

  },
  methods: {

  }
})
