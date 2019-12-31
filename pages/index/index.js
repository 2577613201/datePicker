//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    date1:'',
    date2:'',
    dateStartTime:'',
    curentTime:'',
  },
  onLoad(){
    this.setdatePicker();   //动态设置开始时间和结束时间
   
  },
  //日期选择
  bindDateChange1: function (e) {
    let index = e.currentTarget.dataset.index;
    let date1 = `date1[${index}]`
    let date2 = `date2[${index}]`
    if (this.data.date2[index]) {
      if (e.detail.value > this.data.date2[index]) {
        this.setData({
          [date1]: this.data.date2[index],      // let date1 = `date1[${index}]`
          [date2]: e.detail.value                              // let date2 = `date2[${index}]`

        })
      } else {
        this.setData({
          [date1]: e.detail.value
        })
      }
      // this.getdata(this.data.date1[index], this.data.date2[index]);  //发起搜索请求
    } else {
      this.setData({
        [date1]: e.detail.value
      })
    }
  },
  bindDateChange2: function (e) {
    let index = e.currentTarget.dataset.index;
    let date1 = `date1[${index}]`
    let date2 = `date2[${index}]`
    if (this.data.date1[index]) {
      if (e.detail.value < this.data.date1[index]) {

        this.setData({
          [date2]: this.data.date1[index],
          [date1]: e.detail.value

        })
      } else {
        this.setData({
          [date2]: e.detail.value
        })
      }
      // this.getdata(this.data.date1[index], this.data.date2[index]);  //发起搜索请求
    } else {
      this.setData({
        [date2]: e.detail.value
      })
    }
  },

  //限制开始时间为当前时间的三个月之前
  setdatePicker() {
    var curentTime = new Date();
    curentTime = new Date(curentTime).getFullYear() + '-' + (new Date(curentTime).getMonth() + 1) + '-' + new Date(curentTime).getDate();

    var date = new Date();
    date.setMonth(date.getMonth() - 3);
    var dateTime = new Date(date).getFullYear() + '-' + (new Date(date).getMonth() + 1) + '-' + new Date(date).getDate();
    this.setData({
      curentTime: curentTime,
      dateStartTime: dateTime
    })

  },
  onPullDownRefresh: function () {
    wx.showToast({
      title: '刷新',
    })
    wx.stopPullDownRefresh() //刷新完成后停止下拉刷新动效
  },
  onShareAppMessage: function () {
    return {
      title: '易奇分销',
      path: '/pages/index/index'
    }
  }
})
