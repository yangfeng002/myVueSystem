/**
 *
 * 功能描述: 路由注册和mockJs模拟测试数据
 * @author    fy
 * @version  [版本号, 2019/9/20 9:33]
 * 更新信息 [版本，更新功能，作者，更新日期]
 */
const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

/**
 * 创建解析器
 * 创建application/json解析
 * 创建application/x-www-form-urlencoded
 * */
const jsonParser = bodyParser.json();

const urlencodedParser = bodyParser.urlencoded({extended: false});



/**
 * 登录模块
 *
 */
router.post('/login',jsonParser,(req,res)=>{
   let result = {};
   if(req.body){
       if(req.body.username=='admin' && req.body.password=='123456'){
         result = {
             dataStatus:0,
             message:'校验成功'
         };
         res.json(result);
       }else{
         result ={
           dataStatus:1,
           message:'校验失败'
         };
         res.json(result);
       }
   }



});

/**
 * 注册模块
 */
router.post('/register',jsonParser,(req,res)=>{

});


/**
 * 首页请求url
 * 1.默认展示的数据列表
 *
 */


/**
 * 404 not found 接口
 */

/**
 * 500 error 接口
 */


/**
 * 导出router模块
 */
module.exports = router;

