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
    necklaces: [{
      img: '../../images/goods/necklace/01.jpg',
      mainTitle: '近圆 强光淡水珍珠',
      subTitle: '开口笑',
      discounted: '￥200',
      primePrice: '￥400',
      showDiscount: true
    },{
        img: '../../images/goods/necklace/02.jpg',
        mainTitle: '明星同款珍珠项链',
        subTitle: '8.5mm-9.5mm',
        discounted: '￥345',
        primePrice: '￥515',
        showDiscount: true
    },{
        img: '../../images/goods/necklace/03.jpg',
        mainTitle: '近圆强光泽',
        subTitle: '8.5mm-9.5mm',
        discounted: '￥420',
        primePrice: '￥665',
        showDiscount: false
    },
    {
      img: '../../images/goods/necklace/04.jpg',
      mainTitle: '海水珍珠 品质保证',
      subTitle: '18k金',
      discounted: '￥395',
      primePrice: '￥715',
      showDiscount: false
    }, {
      img: '../../images/goods/necklace/05.jpg',
      mainTitle: '混色水滴形珍珠',
      subTitle: '18k金',
      discounted: '￥299',
      primePrice: '￥450',
      showDiscount: true
    }, {
      img: '../../images/goods/necklace/06.jpg',
      mainTitle: '强光泽正圆白色',
      subTitle: '925纯银',
      discounted: '￥189',
      primePrice: '￥466',
      showDiscount: true
    }, {
      img: '../../images/goods/necklace/07.jpg',
      mainTitle: '粉色项链手链耳钉套装',
      subTitle: '经典款式',
      discounted: '￥422',
      primePrice: '￥699',
      showDiscount: false
    }, {
      img: '../../images/goods/necklace/08.jpg',
      mainTitle: '开口笑白色强光泽',
      subTitle: '925纯银',
      discounted: '￥188',
      primePrice: '￥315',
      showDiscount: false
    }],
    earrings: [{
      img: '../../images/goods/earring/01.jpg',
      mainTitle: '经典白色强光 ',
      subTitle: '9mm-10mm',
      discounted: '￥198',
      primePrice: '￥289',
      showDiscount: false
    }, {
      img: '../../images/goods/earring/02.jpg',
      mainTitle: '多色挂线款耳坠',
      subTitle: '7mm-8mm',
      discounted: '￥45',
      primePrice: '￥85',
      showDiscount: true
    }, {
      img: '../../images/goods/earring/03.jpg',
      mainTitle: '经典高跟鞋款耳环',
      subTitle: '白色',
      discounted: '￥86',
      primePrice: '￥115',
      showDiscount: false
    },
    {
      img: '../../images/goods/earring/04.jpg',
      mainTitle: '金色流苏配饰耳钉',
      subTitle: '可拆卸',
      discounted: '￥65',
      primePrice: '￥95',
      showDiscount: false
    }, {
      img: '../../images/goods/earring/05.jpg',
      mainTitle: '双子款强光泽珍珠',
      subTitle: '时尚',
      discounted: '￥75',
      primePrice: '￥105',
      showDiscount: true
    }, {
      img: '../../images/goods/earring/06.jpg',
      mainTitle: '四叶草配饰 白色珍珠',
      subTitle: '经典造型',
      discounted: '￥105',
      primePrice: '￥165',
      showDiscount: false
    }, {
      img: '../../images/goods/earring/07.jpg',
      mainTitle: '金线包边马贝珍珠',
      subTitle: '易搭配',
      discounted: '￥105',
      primePrice: '￥165',
      showDiscount: true
    }, {
      img: '../../images/goods/earring/08.jpg',
      mainTitle: '染色款 耳环蓝色',
      subTitle: '经典造型',
      discounted: '￥85',
      primePrice: '￥115',
      showDiscount: false
    }],
    bracelets: [{
      img: '../../images/goods/bracelet/01.jpg',
      mainTitle: '珊瑚石珍珠手链',
      subTitle: '经典款式',
      discounted: '￥88',
      primePrice: '￥140',
      showDiscount: false
    }, {
      img: '../../images/goods/bracelet/02.jpg',
      mainTitle: '混色珍珠手链',
      subTitle: '18k金',
      discounted: '￥115',
      primePrice: '￥215',
      showDiscount: true
    }, {
      img: '../../images/goods/bracelet/03.jpg',
      mainTitle: '近圆粉色珍珠手链',
      subTitle: '珍珠吊坠',
      discounted: '￥110',
      primePrice: '￥215',
      showDiscount: false
    }],
    todayDiscouts: [{
      img: '../../images/goods/todayDiscounts/01.jpg',
      mainTitle: '混色珍珠串8颗项链',
      subTitle: '18k金',
      discounted: '￥455',
      primePrice: '￥599',
      showDiscount: false
    }, {
      img: '../../images/goods/todayDiscounts/02.jpg',
      mainTitle: '珍珠发饰镀金配件',
      subTitle: '近圆强光',
      discounted: '￥75',
      primePrice: '￥115',
      showDiscount: true
    }, {
      img: '../../images/goods/todayDiscounts/03.jpg',
      mainTitle: '混色6颗 18k金',
      subTitle: '近圆强光',
      discounted: '￥430',
      primePrice: '￥585',
      showDiscount: false
    },
    {
      img: '../../images/goods/todayDiscounts/04.jpg',
      mainTitle: '花团锦簇 珍珠耳钉',
      subTitle: '120年日本老牌',
      discounted: '￥65',
      primePrice: '￥125',
      showDiscount: false
    }, {
      img: '../../images/goods/todayDiscounts/05.jpg',
      mainTitle: '手工细作珍珠花环链',
      subTitle: '时尚款式',
      discounted: '￥188',
      primePrice: '￥286',
      showDiscount: true
    }, {
      img: '../../images/goods/todayDiscounts/06.jpg',
      mainTitle: '珍珠坠项链多色',
      subTitle: '925纯银',
      discounted: '￥185',
      primePrice: '￥315',
      showDiscount: false
    }, {
      img: '../../images/goods/todayDiscounts/07.jpg',
      mainTitle: '金珠项链精品',
      subTitle: '18k金',
      discounted: '￥880',
      primePrice: '￥1280',
      showDiscount: true
    }, {
      img: '../../images/goods/todayDiscounts/08.jpg',
      mainTitle: '珍珠耳环 染色款 纯银',
      subTitle: '爱迪生珍珠',
      discounted: '￥285',
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