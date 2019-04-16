var express = require('express');
var router = express.Router();

var $mysql = require('mysql');
var sqlObj = require('../db/mysql');

// db connect
var sql = $mysql.createConnection(sqlObj.mysql) 
sql.connect();


router.get('/fetch_data_base', (req,res,next) => {
  sql.query('SELECT * FROM Comments limit 0,10', (error, results, fields) =>{
    if (error) {
      res.send('error');
    } else {
      res.send(JSON.stringify(results));
    }
  })
});


// 获取列表数据
router.get('/fake_chart_data', function(req, res, next) {
const resData = {"visitData":[{"x":"2019-04-14","y":7},{"x":"2019-04-15","y":5},{"x":"2019-04-16","y":4},{"x":"2019-04-17","y":2},{"x":"2019-04-18","y":4},{"x":"2019-04-19","y":7},{"x":"2019-04-20","y":5},{"x":"2019-04-21","y":6},{"x":"2019-04-22","y":5},{"x":"2019-04-23","y":9},{"x":"2019-04-24","y":6},{"x":"2019-04-25","y":3},{"x":"2019-04-26","y":1},{"x":"2019-04-27","y":5},{"x":"2019-04-28","y":3},{"x":"2019-04-29","y":6},{"x":"2019-04-30","y":5}],"visitData2":[{"x":"2019-04-14","y":1},{"x":"2019-04-15","y":6},{"x":"2019-04-16","y":4},{"x":"2019-04-17","y":8},{"x":"2019-04-18","y":3},{"x":"2019-04-19","y":7},{"x":"2019-04-20","y":2}],"salesData":[{"x":"1月","y":492},{"x":"2月","y":1089},{"x":"3月","y":492},{"x":"4月","y":892},{"x":"5月","y":639},{"x":"6月","y":937},{"x":"7月","y":728},{"x":"8月","y":962},{"x":"9月","y":1187},{"x":"10月","y":220},{"x":"11月","y":324},{"x":"12月","y":336}],"searchData":[{"index":1,"keyword":"搜索关键词-0","count":384,"range":2,"status":1},{"index":2,"keyword":"搜索关键词-1","count":31,"range":60,"status":0},{"index":3,"keyword":"搜索关键词-2","count":400,"range":15,"status":1},{"index":4,"keyword":"搜索关键词-3","count":128,"range":2,"status":1},{"index":5,"keyword":"搜索关键词-4","count":592,"range":85,"status":1},{"index":6,"keyword":"搜索关键词-5","count":205,"range":54,"status":0},{"index":7,"keyword":"搜索关键词-6","count":44,"range":63,"status":0},{"index":8,"keyword":"搜索关键词-7","count":956,"range":50,"status":1},{"index":9,"keyword":"搜索关键词-8","count":936,"range":63,"status":1},{"index":10,"keyword":"搜索关键词-9","count":762,"range":46,"status":1},{"index":11,"keyword":"搜索关键词-10","count":205,"range":98,"status":1},{"index":12,"keyword":"搜索关键词-11","count":347,"range":66,"status":0},{"index":13,"keyword":"搜索关键词-12","count":272,"range":1,"status":0},{"index":14,"keyword":"搜索关键词-13","count":683,"range":36,"status":0},{"index":15,"keyword":"搜索关键词-14","count":343,"range":19,"status":1},{"index":16,"keyword":"搜索关键词-15","count":979,"range":25,"status":1},{"index":17,"keyword":"搜索关键词-16","count":592,"range":84,"status":1},{"index":18,"keyword":"搜索关键词-17","count":461,"range":24,"status":0},{"index":19,"keyword":"搜索关键词-18","count":629,"range":2,"status":0},{"index":20,"keyword":"搜索关键词-19","count":894,"range":64,"status":0},{"index":21,"keyword":"搜索关键词-20","count":32,"range":90,"status":1},{"index":22,"keyword":"搜索关键词-21","count":433,"range":8,"status":0},{"index":23,"keyword":"搜索关键词-22","count":818,"range":83,"status":0},{"index":24,"keyword":"搜索关键词-23","count":250,"range":68,"status":0},{"index":25,"keyword":"搜索关键词-24","count":851,"range":7,"status":1},{"index":26,"keyword":"搜索关键词-25","count":988,"range":14,"status":1},{"index":27,"keyword":"搜索关键词-26","count":439,"range":70,"status":0},{"index":28,"keyword":"搜索关键词-27","count":639,"range":5,"status":0},{"index":29,"keyword":"搜索关键词-28","count":189,"range":85,"status":1},{"index":30,"keyword":"搜索关键词-29","count":737,"range":14,"status":1},{"index":31,"keyword":"搜索关键词-30","count":714,"range":46,"status":0},{"index":32,"keyword":"搜索关键词-31","count":192,"range":96,"status":0},{"index":33,"keyword":"搜索关键词-32","count":579,"range":16,"status":1},{"index":34,"keyword":"搜索关键词-33","count":910,"range":66,"status":1},{"index":35,"keyword":"搜索关键词-34","count":327,"range":40,"status":1},{"index":36,"keyword":"搜索关键词-35","count":684,"range":24,"status":1},{"index":37,"keyword":"搜索关键词-36","count":796,"range":54,"status":0},{"index":38,"keyword":"搜索关键词-37","count":818,"range":98,"status":0},{"index":39,"keyword":"搜索关键词-38","count":449,"range":14,"status":1},{"index":40,"keyword":"搜索关键词-39","count":967,"range":19,"status":0},{"index":41,"keyword":"搜索关键词-40","count":374,"range":36,"status":1},{"index":42,"keyword":"搜索关键词-41","count":508,"range":25,"status":1},{"index":43,"keyword":"搜索关键词-42","count":888,"range":40,"status":0},{"index":44,"keyword":"搜索关键词-43","count":358,"range":15,"status":0},{"index":45,"keyword":"搜索关键词-44","count":621,"range":44,"status":1},{"index":46,"keyword":"搜索关键词-45","count":312,"range":94,"status":1},{"index":47,"keyword":"搜索关键词-46","count":522,"range":5,"status":1},{"index":48,"keyword":"搜索关键词-47","count":813,"range":60,"status":1},{"index":49,"keyword":"搜索关键词-48","count":338,"range":86,"status":1},{"index":50,"keyword":"搜索关键词-49","count":347,"range":83,"status":0}],"offlineData":[{"name":"Stores 0","cvr":0.2},{"name":"Stores 1","cvr":0.2},{"name":"Stores 2","cvr":0.3},{"name":"Stores 3","cvr":0.3},{"name":"Stores 4","cvr":0.2},{"name":"Stores 5","cvr":0.5},{"name":"Stores 6","cvr":0.8},{"name":"Stores 7","cvr":0.4},{"name":"Stores 8","cvr":0.4},{"name":"Stores 9","cvr":0.6}],"offlineChartData":[{"x":1555232732092,"y1":3001},{"x":1555234532092,"y1":3008},{"x":1555236332092,"y1":3002},{"x":1555238132092,"y1":3006},{"x":1555239932092,"y1":3002},{"x":1555241732092,"y1":3003},{"x":1555243532092,"y1":3005},{"x":1555245332092,"y1":3005},{"x":1555247132092,"y1":3007},{"x":1555248932092,"y1":3003},{"x":1555250732092,"y1":3004},{"x":1555252532092,"y1":3006},{"x":1555254332092,"y1":3009},{"x":1555256132092,"y1":3009},{"x":1555257932092,"y1":3002},{"x":1555259732092,"y1":3007},{"x":1555261532092,"y1":3001},{"x":1555263332092,"y1":3000},{"x":1555265132092,"y1":3007},{"x":1555266932092,"y1":3006},{"x":1555268732092,"y1":3008},{"x":1555270532092,"y1":3005},{"x":1555272332092,"y1":3004},{"x":1555274132092,"y1":3000}],"salesTypeData":[{"x":"券商信托","y":4544},{"x":"交运物流","y":3321},{"x":"港口水运","y":3113},{"x":"工程建设","y":2341},{"x":"国际贸易","y":1231},{"x":"AH股","y":1231}],"salesTypeDataOnline":[{"x":"券商信托","y":244},{"x":"交运物流","y":321},{"x":"港口水运","y":311},{"x":"工程建设","y":41},{"x":"国际贸易","y":121},{"x":"AH股","y":111}],"salesTypeDataOffline":[{"x":"券商信托","y":99},{"x":"交运物流","y":188},{"x":"港口水运","y":344},{"x":"AH股","y":255},{"x":"其他","y":65}],"radarData":[{"name":"个人","label":"引用","value":10},{"name":"个人","label":"口碑","value":8},{"name":"个人","label":"产量","value":4},{"name":"个人","label":"贡献","value":5},{"name":"个人","label":"热度","value":7},{"name":"团队","label":"引用","value":3},{"name":"团队","label":"口碑","value":9},{"name":"团队","label":"产量","value":6},{"name":"团队","label":"贡献","value":3},{"name":"团队","label":"热度","value":1},{"name":"部门","label":"引用","value":4},{"name":"部门","label":"口碑","value":1},{"name":"部门","label":"产量","value":6},{"name":"部门","label":"贡献","value":5},{"name":"部门","label":"热度","value":7}]};
  res.send(JSON.stringify(resData));
});


// 获取用户信息
router.get('/currentUser', function(req, res, next) {
    const userData = {"name":"admin","avatar":"https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png","userid":"00000001","email":"antdesign@alipay.com","signature":"海纳百川，有容乃大","title":"交互专家","group":"蚂蚁金服－某某某事业群－某某平台部－某某技术部－UED","tags":[{"key":"0","label":"很有想法的"},{"key":"1","label":"专注设计"},{"key":"2","label":"辣~"},{"key":"3","label":"大长腿"},{"key":"4","label":"川妹子"},{"key":"5","label":"海纳百川"}],"notifyCount":12,"unreadCount":11,"country":"China","geographic":{"province":{"label":"浙江省","key":"330000"},"city":{"label":"杭州市","key":"330100"}},"address":"西湖区工专路 77 号","phone":"0752-268888888"};
    res.send(JSON.stringify(userData));
  });

// 判断登陆
router.post('/login/account', function(req, res, next) {
    const userName =  req.param('userName');
    const password = req.param('password')
    let loginData = {};
    if ( userName == 'admin' && password == '123456') {
        loginData = {
            currentAuthority: "admin",
            status: "ok",
            type: "account"
        };
    } else { 
        loginData = {
            currentAuthority: "guest",
            status: "error",
            type: "account",
        }
    }
    res.send(JSON.stringify(loginData));
  });

// 帖子抓取
router.get('/fake_list', function(req, res, next) {
  const { page = 0, count = 8 } = req.query;
  sql.query(`SELECT * FROM Comments limit ${page * 8}, ${page * 8 + count}`, (error, results, fields) =>{
    if (error) {
      res.send('error');
    } else {
      results.forEach(element => {
        element.status = 0
      });
      res.send(JSON.stringify(results));
    }
  })
  // const listData = [{
  //   "id": "fake-list-0",
  //   "owner": "财经评论",
  //   "title": "央行副行长陈雨露：中国股市正显示出触底和复苏迹象",
  //   "avatar": "http://avator.eastmoney.com/qface/9313013693864916/50",
  //   "cover": "http://avator.eastmoney.com/qface/9313013693864916/50",
  //   "status": "0",
  //   "percent": 79,
  //   "logo": "http://avator.eastmoney.com/qface/9313013693864916/50",
  //   "href": "http://guba.eastmoney.com/news,cjpl,816338498.html",
  //   "updatedAt": "2019-04-14T09:41:51.276Z",
  //   "createdAt": "2019-04-14T09:41:51.276Z",
  //   "subDescription": "那是一种内在的东西， 他们到达不了，也无法触及的",
  //   "description": "中国人民银行副行长陈雨露13日表示，国际货币基金组织(IMF)应继续推动份额和治理改革，增强新兴市场和发展中国家的话语权与代表性。",
  //   "activeUser": 134112,
  //   "newUser": 1497,
  //   "star": 161,
  //   "like": 127,
  //   "message": 19,
  //   "content": "中国人民银行副行长陈雨露13日表示，国际货币基金组织(IMF)应继续推动份额和治理改革，增强新兴市场和发展中国家的话语权与代表性。",
  //   "members": [{
  //     "avatar": "https://gw.alipayobjects.com/zos/rmsportal/ZiESqWwCXBRQoaPONSJe.png",
  //     "name": "曲丽丽",
  //     "id": "member1"
  //   }, {
  //     "avatar": "https://gw.alipayobjects.com/zos/rmsportal/tBOxZPlITHqwlGjsJWaF.png",
  //     "name": "王昭君",
  //     "id": "member2"
  //   }, {
  //     "avatar": "https://gw.alipayobjects.com/zos/rmsportal/sBxjgqiuHMGRkIjqlQCd.png",
  //     "name": "董娜娜",
  //     "id": "member3"
  //   }]
  // }, {
  //   "id": "fake-list-1",
  //   "owner": "东方财富网",
  //   "title": "行情调整，蓄势待发？7×24小时股票快捷开户,把握逢低介入机会！",
  //   "avatar": "http://avator.eastmoney.com/qface/6712111507146464/50",
  //   "cover": "http://avator.eastmoney.com/qface/6712111507146464/50",
  //   "status": "0",
  //   "percent": 57,
  //   "logo": "http://avator.eastmoney.com/qface/6712111507146464/50",
  //   "href": "http://guba.eastmoney.com/news,gssz,809161988.html",
  //   "updatedAt": "2019-04-14T07:41:51.276Z",
  //   "createdAt": "2019-04-14T07:41:51.276Z",
  //   "subDescription": "互联网时代，炒股就选互联网券商——东方财富证券",
  //   "description": "东方财富证券6大核心优势：",
  //   "activeUser": 166518,
  //   "newUser": 1770,
  //   "star": 138,
  //   "like": 144,
  //   "message": 12,
  //   "content": "段落示意：蚂蚁金服设计平台 ant.design，用最小的工作量，无缝接入蚂蚁金服生态，提供跨越设计与开发的体验解决方案。蚂蚁金服设计平台 ant.design，用最小的工作量，无缝接入蚂蚁金服生态，提供跨越设计与开发的体验解决方案。",
  //   "members": [{
  //     "avatar": "https://gw.alipayobjects.com/zos/rmsportal/ZiESqWwCXBRQoaPONSJe.png",
  //     "name": "曲丽丽",
  //     "id": "member1"
  //   }, {
  //     "avatar": "https://gw.alipayobjects.com/zos/rmsportal/tBOxZPlITHqwlGjsJWaF.png",
  //     "name": "王昭君",
  //     "id": "member2"
  //   }, {
  //     "avatar": "https://gw.alipayobjects.com/zos/rmsportal/sBxjgqiuHMGRkIjqlQCd.png",
  //     "name": "董娜娜",
  //     "id": "member3"
  //   }]
  // }, {
  //   "id": "fake-list-2",
  //   "owner": "股友jwDak",
  //   "title": "大妈都发话中国股市正显示出触底和复苏迹象",
  //   "avatar": "http://avator.eastmoney.com/qface/3880365520650954/50",
  //   "cover": "http://avator.eastmoney.com/qface/3880365520650954/50",
  //   "status": "-1",
  //   "percent": 57,
  //   "logo": "http://avator.eastmoney.com/qface/3880365520650954/50",
  //   "href": "http://guba.eastmoney.com/news,szzs,816345954.html",
  //   "updatedAt": "2019-04-14T05:41:51.276Z",
  //   "createdAt": "2019-04-14T05:41:51.276Z",
  //   "subDescription": "生命就像一盒巧克力，结果往往出人意料",
  //   "description": "在中台产品的研发过程中，会出现不同的设计规范和实现方式，但其中往往存在很多类似的页面和组件，这些类似的组件会被抽离成一套标准规范。",
  //   "activeUser": 106373,
  //   "newUser": 1770,
  //   "star": 120,
  //   "like": 128,
  //   "message": 17,
  //   "content": "段落示意：蚂蚁金服设计平台 ant.design，用最小的工作量，无缝接入蚂蚁金服生态，提供跨越设计与开发的体验解决方案。蚂蚁金服设计平台 ant.design，用最小的工作量，无缝接入蚂蚁金服生态，提供跨越设计与开发的体验解决方案。",
  //   "members": [{
  //     "avatar": "https://gw.alipayobjects.com/zos/rmsportal/ZiESqWwCXBRQoaPONSJe.png",
  //     "name": "曲丽丽",
  //     "id": "member1"
  //   }, {
  //     "avatar": "https://gw.alipayobjects.com/zos/rmsportal/tBOxZPlITHqwlGjsJWaF.png",
  //     "name": "王昭君",
  //     "id": "member2"
  //   }, {
  //     "avatar": "https://gw.alipayobjects.com/zos/rmsportal/sBxjgqiuHMGRkIjqlQCd.png",
  //     "name": "董娜娜",
  //     "id": "member3"
  //   }]
  // }, {
  //   "id": "fake-list-3",
  //   "owner": "可信度95",
  //   "title": "我用了半年的时间钻研如何逃顶！",
  //   "avatar": "http://avator.eastmoney.com/qface/2980113688370150/50",
  //   "cover": "http://avator.eastmoney.com/qface/2980113688370150/50",
  //   "status": "1",
  //   "percent": 68,
  //   "logo": "http://avator.eastmoney.com/qface/2980113688370150/50",
  //   "href": "http://guba.eastmoney.com/news,szzs,815513661.html",
  //   "updatedAt": "2019-04-14T03:41:51.276Z",
  //   "createdAt": "2019-04-14T03:41:51.276Z",
  //   "subDescription": "城镇中有那么多的酒馆，她却偏偏走进了我的酒馆",
  //   "description": "我用了半年的时间钻研如何逃顶！",
  //   "activeUser": 166243,
  //   "newUser": 1795,
  //   "star": 168,
  //   "like": 197,
  //   "message": 14,
  //   "content": "我用了半年的时间钻研如何逃顶！",
  //   "members": [{
  //     "avatar": "https://gw.alipayobjects.com/zos/rmsportal/ZiESqWwCXBRQoaPONSJe.png",
  //     "name": "曲丽丽",
  //     "id": "member1"
  //   }, {
  //     "avatar": "https://gw.alipayobjects.com/zos/rmsportal/tBOxZPlITHqwlGjsJWaF.png",
  //     "name": "王昭君",
  //     "id": "member2"
  //   }, {
  //     "avatar": "https://gw.alipayobjects.com/zos/rmsportal/sBxjgqiuHMGRkIjqlQCd.png",
  //     "name": "董娜娜",
  //     "id": "member3"
  //   }]
  // }, {
  //   "id": "fake-list-4",
  //   "owner": "疯狂一回8888",
  //   "title": "盘洗完了吗",
  //   "avatar": "http://avator.eastmoney.com/qface/1311094251881876/50",
  //   "cover": "http://avator.eastmoney.com/qface/1311094251881876/50",
  //   "status": "-1",
  //   "percent": 64,
  //   "logo": "http://avator.eastmoney.com/qface/1311094251881876/50",
  //   "href": "http://guba.eastmoney.com/news,szzs,815955271.html",
  //   "updatedAt": "2019-04-14T01:41:51.276Z",
  //   "createdAt": "2019-04-14T01:41:51.276Z",
  //   "subDescription": "那时候我只会想自己想要什么，从不想自己拥有什么",
  //   "description": "听风就是雨，听响就是金。",
  //   "activeUser": 141687,
  //   "newUser": 1450,
  //   "star": 139,
  //   "like": 196,
  //   "message": 12,
  //   "content": "将你哭声调成静音的过程。",
  //   "members": [{
  //     "avatar": "https://gw.alipayobjects.com/zos/rmsportal/ZiESqWwCXBRQoaPONSJe.png",
  //     "name": "曲丽丽",
  //     "id": "member1"
  //   }, {
  //     "avatar": "https://gw.alipayobjects.com/zos/rmsportal/tBOxZPlITHqwlGjsJWaF.png",
  //     "name": "王昭君",
  //     "id": "member2"
  //   }, {
  //     "avatar": "https://gw.alipayobjects.com/zos/rmsportal/sBxjgqiuHMGRkIjqlQCd.png",
  //     "name": "董娜娜",
  //     "id": "member3"
  //   }]
  // }];
  // res.send(JSON.stringify(listData));
});


module.exports = router;
