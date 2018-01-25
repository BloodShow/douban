//index.js
//获取应用实例
const app = getApp();

var API_URL = "https://custom.yangyue.com.cn/test/huangguangyuan/test/douban.txt";

Page({
  data: {
    title:"加载中",
    movies:[]
  },
  onLoad:function(){
    var _this = this;
    wx.showToast({
      title: '加载中...',
      icon:"loading",
      duration:10000
    });
    wx.request({
      url: API_URL,
      data: {},
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        console.log(res.data);
        wx.hideToast();
        var data = res.data;
        _this.setData({
          title:data.title,
          movies: data.subjects
        });
      }
    })
  }
  
})
