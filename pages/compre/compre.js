// pages/compre/compre.js
let dz = false;
Page({

  /**
   * 页面的初始数据
   */
  data: {
      dzicon:"/pages/logs/res/images/dzq.png"
  },

  clickz:function(){
    if(dz){
      this.setData({
        dzicon:"/pages/logs/res/images/dzq.png"
      })
      dz = false;
    }else{
      this.setData({
        dzicon:"/pages/logs/res/images/dzh.png"
      })
      dz = true;
    }
  },

  writemsg:function(){
    wx.navigateTo({
      url: '/pages/logs/logs',
    })
  },

  //下拉刷新
  onPullDownRefresh:function()
  {
    wx.showNavigationBarLoading() //在标题栏中显示加载
    
    //模拟加载
    setTimeout(function()
    {
      // complete
      wx.hideNavigationBarLoading() //完成停止加载
      wx.stopPullDownRefresh() //停止下拉刷新
    },1500);
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