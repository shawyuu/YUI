let arr = [{
  'img': '/img/img1.jpg',
  'header': '/img/default.png',
  'info': '张三',
  'text': '知音，能有一两个已经很好了，实在不必太多。朋友之乐，贵在那份踏实的信赖。'
},
{
  'img': '/img/img2.jpg',
  'header': '/img/default.png',
  'info': 'Shaw',
  'text': '知音，能有一两个已经很好了，实在不必太多。朋友之乐，贵在那份踏实的信赖。'
},
{
  'img': '/img/banner1.jpg',
  'header': '/img/default.png',
  'info': 'MOU',
  'text': '知音，能有一两个已经很好了，实在不必太多。朋友之乐，贵在那份踏实的信赖。'
},
{
  'img': '/img/banner2.jpg',
  'header': '/img/default.png',
  'info': '某某',
  'text': '知音，能有一两个已经很好了，实在不必太多。朋友之乐，贵在那份踏实的信赖。'
},
{
  'img': '/img/banner3.jpg',
  'header': '/img/default.png',
  'info': '张三',
  'text': '知音，能有一两个已经很好了，实在不必太多。朋友之乐，贵在那份踏实的信赖。'
},
{
  'img': '/img/default.png',
  'header': '/img/default.png',
  'info': '张三',
  'text': '知音，能有一两个已经很好了，实在不必太多。朋友之乐，贵在那份踏实的信赖。'
}
]
Page({
  data: {
    list: []
  },
  onLoad: function(options) {
    this.setData({
      list: arr
    })
  },
  onReachBottom: function () {
    console.log(111)
    let list = this.data.list;
    arr.forEach(item=>{
      list.push(item);
    })
    
    console.log(list)
    this.setData({
      list: list
    })
  },
})