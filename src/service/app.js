/**
 *
 * 功能描述:node 后端服务器入口
 * @author    fy
 * @version  [版本号, 2019/9/6 14:31]
 * 更新信息 [版本，更新功能，作者，更新日期]
 */
const userApi = require('./api/userApi');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');
const express = require('express');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//注册api路由
app.use('/api/user', userApi);

// 监听端口
app.listen(3000);
console.log('success listen at port:3000......');
