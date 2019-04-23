Page({
  data: {
    trees: [{
        title: "第一章、树形结构标题",
        tree: [{
            title: "第一节、树形结构小标题",
            tree: [{
                title: "第一小节、树形结构三级标题"
              },
              {
                title: "第二小节、树形结构三级标题"
              },
              {
                title: "第三小节、树形结构三级标题"
              },
              {
                title: "第四小节、树形结构三级标题"
              }
            ]
          },
          {
            title: "第二节、树形结构小标题",
            tree: [{
                title: "第一小节、树形结构三级标题"
              },
              {
                title: "第二小节、树形结构三级标题"
              },
              {
                title: "第三小节、树形结构三级标题"
              },
              {
                title: "第四小节、树形结构三级标题"
              }
            ]
          },
          {
            title: "第三节、树形结构小标题",
            tree: [{
                title: "第一小节、树形结构三级标题"
              },
              {
                title: "第二小节、树形结构三级标题"
              },
              {
                title: "第三小节、树形结构三级标题"
              },
              {
                title: "第四小节、树形结构三级标题"
              }
            ]
          }
        ]
      },
      {
        title: "第二章、树形结构标题，很长很长的树形结构大标题",
        tree: [{
            title: "第一节、树形结构小标题，很长很长的小标题",
            tree: [{
                title: "第一小节、树形结构三级标题"
              },
              {
                title: "第二小节、树形结构的三级长标题，很长很长的标题"
              },
              {
                title: "第三小节、树形结构三级标题"
              },
              {
                title: "第四小节、树形结构三级标题"
              }
            ]
          },
          {
            title: "第二节、树形结构小标题",
            tree: [{
                title: "第一小节、树形结构三级标题"
              },
              {
                title: "第二小节、树形结构三级标题"
              },
              {
                title: "第三小节、树形结构三级标题"
              },
              {
                title: "第四小节、树形结构三级标题"
              }
            ]
          },
          {
            title: "第三节、树形结构小标题",
            tree: [{
                title: "第一小节、树形结构三级标题"
              },
              {
                title: "第二小节、树形结构三级标题"
              },
              {
                title: "第三小节、树形结构三级标题"
              },
              {
                title: "第四小节、树形结构三级标题"
              }
            ]
          }
        ]
      }
    ],
    current: [-1, -1, -1],
    local:[-1,-1]
  },
  bindTreeOne: function(e) {
    let node = e.currentTarget.dataset.node;
    if (node == this.data.current[0]) {
      this.setData({
        'current[0]': -1,
        'current[1]': -1
      })
    } else {
      this.setData({
        'current[0]': node,
        'current[1]': -1
      })
    }
  },
  bindTreeTwo: function (e) {
    let node = e.currentTarget.dataset.node;
    if (node == this.data.current[1]) {
      this.setData({
        'current[1]': -1
      })
    } else {
      this.setData({
        'current[1]': node
      })
    }
  },
  bindChange: function (e) {
    let localnode1 = e.currentTarget.dataset.localnode1;
    let localnode2 = e.currentTarget.dataset.localnode2;
    let node = e.currentTarget.dataset.node;
    this.setData({
      'local[0]': localnode1,
      'local[1]': localnode2,
      'current[2]': node
    })
  }
})