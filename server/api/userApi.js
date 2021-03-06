/**
 *
 * 功能描述: web后台和服务器连接
 * @author    fy
 * @version  [版本号, 2019/9/6 14:31]
 * 更新信息 [版本，更新功能，作者，更新日期]
 */
var models = require('../db/db');
var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var $sql = require('../db/sqlMap');

// 连接数据库
var conn = mysql.createConnection(models.mysql);
conn.connect();
var jsonWrite = function(res, ret) {
  if(typeof ret === 'undefined') {
    res.json({
      code: '1',
      msg: '操作失败'
    });
  } else {
    res.json(ret);
  }
};


// 增加用户接口
router.post('/addUser', (req, res) => {
  var sql = $sql.user.add;
  var params = req.body;
  console.log(params);
  conn.query(sql, [params.username, params.password], function(err, result) {
    if (err) {
      console.log(err);
    }
    if (result) {
      jsonWrite(res, result);
    }
  })
});
// 增加用户接口
router.get('/addUser', (req, res) => {
  res.send('retrunJson');
});

module.exports = router;
