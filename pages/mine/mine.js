//mine.js
//获取应用实例
Page({
  data: {
    imgUrls: [
      '../../images/mine/mine-pearl-culture.jpg',
      '../../images/mine/mine-pearl-shop.jpg'
    ],
    interval: 3000,
    duration: 1000,
    currentTab: 0,
    winWidth: 0,
    winHeight: 0,
    scrollLeft: 0
  },
  phoneCall: function (e) {
    wx.makePhoneCall({
      phoneNumber: e.currentTarget.dataset.replyPhone,
      success: function () {
        console.log("成功拨打电话")
      }
    })
  },
  joinUs: function() {
    wx.showModal({
      title: '加入我们',
      content: '在这里，我们给你提供性价比最高的珍珠饰品，赶紧扫描下方二维码加入我们，客服妹妹欢迎来撩~',
      success: function (res) {
        if (res.confirm) {
        } else if (res.cancel) {
        }
      }
    })
  },
  viewMore: function() {
    wx.showModal({
      title: '更多.. ..',
      content: '查看更多商品请关注微信朋友圈，不定期上新奥~',
      success: function (res) {
        if (res.confirm) {
        } else if (res.cancel) {
        }
      }
    })
  }
})