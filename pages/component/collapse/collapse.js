
Page({
  data: {
    collapse:[
      { title: '我是折叠面板1', content:"且听风吟，静待花开"},
      { title: '我是折叠面板2', content: "人生总有不期而遇的温暖，和生生不息的希望,人生总有不期而遇的温暖，和生生不息的希望,人生总有不期而遇的温暖，和生生不息的希望" },
      { title: '我是折叠面板3', content: "且听风吟，静待花开" },
      { title: '我是折叠面板4', content: "人生总有不期而遇的温暖，和生生不息的希望" }
    ],
    current: -1
  },
  onLoad:function(options){
  },
  bindCollapse:function(e){
    let current = e.currentTarget.dataset.id;
    if (current == this.data.current){
      this.setData({
        current: -1
      })
    }else{
      this.setData({
        current: current
      })
    }
  }
})