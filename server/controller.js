/**
 *
 * 功能描述:
 * @author    fy
 * @version  [版本号, 2019/9/19 17:25]
 * 更新信息 [版本，更新功能，作者，更新日期]
 */

/**
 * 引入相关模块，实例化express对象
 *
 */
const express = require('express');//引入express
const app = express();//实例化express
const router = require('./api/service');//引入自定义service


/**
 * 注册服务器路由，供前端调用
 */
app.use('/egbi',router);

/**
 * 托管静态资源，访问的时候可以用static代替src/assets
 */
app.use('/static',express.static('src/assets'));


/**
 * 设置监听
 *
 */
const controller = app.listen(3000,()=>{
  let host = controller.address().address;
  let port = controller.address().port;
  console.log("running in", host, port)
});


