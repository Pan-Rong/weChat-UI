// pages/base/base.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },
  articleDemo: function(){
    wx.navigateTo({
      url: './article/article'
    })
  },
  badgeDemo: function () {
    wx.navigateTo({
      url: './badge/badge'
    })
  },
  flexDemo: function () {
    wx.navigateTo({
      url: './flex/flex'
    })
  },
  footerDemo: function () {
    wx.navigateTo({
      url: './footer/footer'
    })
  },
  galleryDemo: function () {
    wx.navigateTo({
      url: './gallery/gallery'
    })
  },
  gridDemo: function () {
    wx.navigateTo({
      url: './grid/grid'
    })
  },
  iconsDemo: function () {
    wx.navigateTo({
      url: './icons/icons'
    })
  },
  loadmoreDemo: function () {
    wx.navigateTo({
      url: './loadmore/loadmore'
    })
  },
  panelDemo: function () {
    wx.navigateTo({
      url: './panel/panel'
    })
  },
  previewDemo: function () {
    wx.navigateTo({
      url: './preview/preview'
    })
  },
  progressDemo: function () {
    wx.navigateTo({
      url: './progress/progress'
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})