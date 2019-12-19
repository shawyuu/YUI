Component({
  options: {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },
  properties: {
    label: { // 表单label
      type: String,
      value: ''
    },
    mode: { // 类型
      type: String,
      value: 'selector'
    },
    disabled: { //是否禁用
      type: Boolean,
      value: false
    },
    range: { // mode 为 selector 或 multiSelector 时，range 有效
      type: Array,
      value: []
    },
    rangeKey: { //当 range 是一个 Object Array 时，通过 range-key 来指定 Object 中 key 的值作为选择器显示内容
      type: String,
      value: ''
    },
    value: { 
      //selector 或 multiSelector表示选择了range中的第几个（下标从0开始）
      //time表示时间，格式为"hh:mm"
      //date表示日期，格式为"YYYY-MM-DD"
      //region表示选中的省市区，默认选中每一列的第一个值
      type: [Array,String,Number],
      value: ''
    },
    placeholder: { // 为空时占位符
      type: String,
      value: '请选择内容'
    },
    showArrow: { //是否展示箭头
      type: Boolean,
      value: true
    },
    text: { // 用于显示选中后的文本，也可以作为默认值使用，当mode为selector/multiSelector/region时有效
      type: String,
      value: ''
    },
    start: { // mode为time时表示时间有效时间的开始 字符串格式为"hh:mm"  mode为date时表示时间有效日期的开始 字符串格式为"YYYY-MM-DD"
      type: String,
      value: ''
    },
    end: { // mode为time时表示时间有效时间的开始 字符串格式为"hh:mm"  mode为date时表示时间有效日期的结束 字符串格式为"YYYY-MM-DD"
      type: String,
      value: ''
    },
    fields: { // 有效值 year,month,day，表示选择器的粒度
      type: String,
      value: 'day'
    },
    customItem: { // 可为每一列的顶部添加一个自定义的项
      type: String,
      value: ''
    }
  },
  /**
   * 组件的初始数据
   */
  data: {
    multiSelect:false,
    regionSelect:false
  },
  /**
   * 组件的方法列表
   */
  methods: {
    //取消选择
    bindPickerCancel() {
      this.triggerEvent('cancel')
    },
    //确认选择
    bindPickerChange(e) {
      let eventDetail = e.detail.value;
      if (this.data.mode == 'multiSelector'){
        this.setData({
          multiSelect: true
        })
      } else if (this.data.mode == 'region'){
        this.setData({
          regionSelect: true
        })
      }
      this.triggerEvent('change', eventDetail)
    },
    //多列选择列改变时触发
    bindPickerColumnChange(e) {
      let eventDetail = e.detail;
      this.triggerEvent('column', eventDetail)
    }
  }
})