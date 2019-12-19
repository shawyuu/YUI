Component({
  options: {
    multipleSlots: true
  },
  properties: {
    thead: { //表格头部
      type: Object,
      value: {}
    },
    tbody: { //表格内容
      type: Array,
      value: []
    },
    fixColumn: { //需要固定的表格栏目属性名称
      type: String,
      value: ''
    },
    columnWidth: { //表格栏目的显示宽度
      type: Object,
      value: {}
    },
    bgColor: { //表格头部背景
      type: String,
      value: '#3565ee'
    },
    color: { //表格头部文本颜色
      type: String,
      value: '#fff'
    },
  },
  data: {
    tableHead: {}, //表格头部
    tableBody: [], //表格内容
    width: {}, //表格显示宽度
    fixTitle: '', //固定栏的表头
    fixWidthFix: 0, //固定栏的显示宽度,保存不变
    fixWidth: 0, //固定栏的显示宽度
    fixContent: [], //固定栏的显示内容
    showLong: false //固定栏的显示宽度是否变宽
  },
  ready: function() {
    let headStr = JSON.stringify(this.data.thead),
      bodyStr = JSON.stringify(this.data.tbody),
      widthStr = JSON.stringify(this.data.columnWidth);
    let tableHead = JSON.parse(headStr),
      tableBody = JSON.parse(bodyStr),
      fixColumn = this.data.fixColumn,
      width = JSON.parse(widthStr),
      fixContent = [];
    for (let key in tableHead) {
      if (key == fixColumn) {
        this.setData({
          fixTitle: tableHead[key]
        })
        delete tableHead[key];
        break;
      }
    }
    tableBody.forEach((value, index, arr) => {
      for (let key in value) {
        if (key == fixColumn) {
          fixContent.push(value[key]);
          delete value[key];
          break;
        }
      }
    })
    for (let key in width) {
      if (key == fixColumn) {
        this.setData({
          fixWidthFix: width[key],
          fixWidth: width[key]
        })
        delete width[key];
        break;
      }
    }
    this.setData({
      tableHead: tableHead,
      tableBody: tableBody,
      fixContent: fixContent,
      width: width
    })
  },
  methods: {
    //内部方法，固定栏宽度变化方法
    clickShowLong() {
      if (this.data.showLong) {
        let fixWidth = this.data.fixWidthFix;
        this.setData({
          fixWidth: fixWidth,
          showLong: false
        })
      } else {
        this.setData({
          fixWidth: 180,
          showLong: true
        })
      }
    }
  }
})