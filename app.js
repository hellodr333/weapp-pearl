//app.js
App({
  onload: function() {
    wx.getSystemInfo({
      success: res => {
        this.setData({
          winWidth: res.windowWidth,
          winHeight: res.windowHeight
        });
      }
    })
  }
})