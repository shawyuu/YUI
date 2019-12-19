Component({
  properties: {
    disabled: { //是否禁用
      type: Boolean,
      value: false
    },
    size: { //按钮的大小 default(默认大小) mini(小尺寸)
      type: String,
      value: 'default'
    },
    bgColor: { //按钮的背景颜色
      type: String,
      value: '#fff'
    },
    color: { //按钮文本颜色
      type: String,
      value: '#333'
    },
    radius: { //按钮圆角值
      type: [Number, String],
      value: 5
    },
    plain: { //按钮是否镂空，背景色透明
      type: Boolean,
      value: false
    },
    loading: { //名称前是否带 loading 图标
      type: Boolean,
      value: false
    },
    formType: { //用于 form 组件，点击分别会触发 form 组件的 submit/reset 事件 submit(提交表单) reset(重置表单)
      type: String,
      value: ''
    },
    openType: { //微信开放能力
      type: String,
      value: ''
    },
    hoverClass: { //指定按钮按下去的样式类。当 hover-class="none" 时，没有点击态效果
      type: String,
      value: 'button-hover'
    },
    hoverStopPropagation: { //指定是否阻止本节点的祖先节点出现点击态
      type: Boolean,
      value: false
    },
    appParameter: { //打开 APP 时，向 APP 传递的参数，open-type=launchApp时有效
      type: String,
      value: ''
    },
    text: { //按钮文本描述
      type: String,
      value: '按钮'
    }
  },
  data: {

  },
  methods: {
    //用户点击该按钮时，会返回获取到的用户信息，回调的detail数据与wx.getUserInfo返回的一致，open-type="getUserInfo"时有效
    getUserinfo(e) {
      let value = e.detail;
      this.triggerEvent('getuserinfo', value)
    },
    //客服消息回调，open-type="contact"时有效
    getContact(e) {
      this.triggerEvent('contact', e)
    },
    //获取用户手机号回调，open-type=getPhoneNumber时有效
    getPhoneNumber(e) {
      this.triggerEvent('getphonenumber', e)
    },
    //当使用开放能力时，发生错误的回调，open-type=launchApp时有效
    getError(e) {
      this.triggerEvent('error', e)
    },
    //在打开授权设置页后回调，open-type=openSetting时有效
    getOpenSetting(e) {
      this.triggerEvent('opensetting', e)
    },
    //打开 APP 成功的回调，open-type=launchApp时有效
    getLaunchApp(e) {
      this.triggerEvent('launchapp', e)
    }
  }
})