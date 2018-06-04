//index.js
//获取应用实例
Page({
  data: {
    imgUrls: [
      '../../images/banner/banner1.jpg',
      '../../images/banner/banner2.jpg',
      '../../images/banner/banner3.jpg'
    ],
    interval: 3000,
    duration: 1000,
    currentTab: 0,
    winWidth: 0,
    winHeight: 0,
    scrollLeft: 0,
    panicBuy: [{
      img: '../../images/panic-buy/01.jpg',
      mainTitle: '正圆亮珍珠耳环 日本',
      subTitle: '珍珠皇后',
      discounted: '￥1515',
      primePrice: '￥2515',
      showDiscount: false
    },{
        img: '../../images/panic-buy/02.jpg',
        mainTitle: '经典造型 18k金耳环',
        subTitle: '9-10mm',
        discounted: '￥315',
        primePrice: '￥515',
        showDiscount: true
    },{
        img: '../../images/panic-buy/03.jpg',
        mainTitle: '珍珠k金项链',
        subTitle: '珍珠吊坠',
        discounted: '￥200',
        primePrice: '￥315',
        showDiscount: false
    },
    {
      img: '../../images/panic-buy/04.jpg',
      mainTitle: '海水珍珠可选大小',
      subTitle: '品质保证',
      discounted: '￥95',
      primePrice: '￥115',
      showDiscount: false
    }, {
      img: '../../images/panic-buy/05.jpg',
      mainTitle: '樱桃可爱珍珠耳钉',
      subTitle: '款式简单',
      discounted: '￥15',
      primePrice: '￥25',
      showDiscount: true
    }, {
      img: '../../images/panic-buy/06.jpg',
      mainTitle: '珍珠手链 粉色白色可选',
      subTitle: '经典造型',
      discounted: '￥215',
      primePrice: '￥315',
      showDiscount: false
    }],
    todayDiscouts: [{
      img: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      mainTitle: '单指针极简腕表 丹麦',
      subTitle: '只有一根指针',
      discounted: '￥1515',
      primePrice: '￥2515',
      showDiscount: false
    }, {
      img: 'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      mainTitle: '日本皇室御用花梨水...',
      subTitle: '全身都可以用的水',
      discounted: '￥315',
      primePrice: '￥515',
      showDiscount: true
    }, {
      img: 'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg',
      mainTitle: '黑龙江湿地大米 5斤装',
      subTitle: '饱满Q弹，米香浓郁',
      discounted: '￥200',
      primePrice: '￥315',
      showDiscount: false
    },
    {
      img: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      mainTitle: '宽头牙刷 + 牙膏套装',
      subTitle: '120年日本老牌',
      discounted: '￥95',
      primePrice: '￥115',
      showDiscount: false
    }, {
      img: 'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      mainTitle: '天犬书签',
      subTitle: '生肖系列，半方出品',
      discounted: '￥15',
      primePrice: '￥25',
      showDiscount: true
    }, {
      img: 'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg',
      mainTitle: 'foreo 洁面仪',
      subTitle: '清除99.5%的污垢',
      discounted: '￥215',
      primePrice: '￥315',
      showDiscount: false
    }]
  },
  bindChange: function (e) {
    this.setData({ currentTab: e.detail.current });
  },
  swichNav: function (e) {
    if (this.data.currentTab === e.target.dataset.current) {
      return false;
    } else {
      this.setData({
        currentTab: e.target.dataset.current
      })
    }
  } 
})