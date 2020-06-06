// pages/mine/mine.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    msg: 'this is mine page',
    list: [
      {
        id: 1,
        text:'this is id -- 1'
      },
      {
        id: 2,
        text:'this is id -- 2'
      },
      {
        id: 3,
        text:'this is id -- 3'
      },
      {
        id: 4,
        text:'this is id -- 4'
      },
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log('onLoad')

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log('onReady')
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log('onShow')
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    console.log('onHide')
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    console.log('页面卸载')
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    console.log('下拉刷新')

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    console.log('到达底部')

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  goBack(){
    wx.navigateBack({
      complete: (res) => {
        console.log('已经退出当前页面')
      },
    })
  }
})