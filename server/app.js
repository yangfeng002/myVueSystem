/**
 *
 * 功能描述:node 后端服务器入口（前端ajax调用）
 * @author    fy
 * @version  [版本号, 2019/9/6 14:31]
 * 更新信息 [版本，更新功能，作者，更新日期]
 */

const fs = require('fs');
const path = require('path');
const express = require('express');//获取express
const app = express();//创建expresss实例
const bodyParser = require('body-parser');
const userApi = require('./api/userApi');

/*解析获取的参数*/
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//注册api路由,供前端调用
app.use('/api/user', userApi);

// 监听端口
app.listen(3000);
console.log('success listen at port:3000......');
