/**
 *
 * 功能描述:
 * @author    fy
 * @version  [版本号, 2019/9/10 18:05]
 * 更新信息 [版本，更新功能，作者，更新日期]
 */
const express = require('express');
const app = express();
const path = require('path');

//托管静态资源 express.static(root,[options]); 注意路径问题
//app.use('/static', express.static(path.join(__dirname,'theme')));
app.use('/static',express.static('src/assets'));


/**
 * 路由处理
 * get/post/all
 */
/*路由--get方法*/
app.get("/",(req,res,next)=>{
    let json = {
       status:200,
       message:"ok"
    }
    //res.send(json);
    res.json({ user: 'tobi' });

});

/*路由--post方法*/
app.post("/",(req,res)=>{
    console.log(req);
    res.send("this is a post method!");
});

/*定义多个函数，可以根据参数确定调用哪一个函数*/
app.get('/example/b', function (req, res, next) {
  console.log('the response will be sent by the next function ...')
  next()
}, function (req, res) {
  res.send('Hello from B!')
})

app.set('views', __dirname + '/server/views');
app.set('view engine', 'html');

app.get('*', function(req, res) {
  res.render('index');
});

app.get('/test', function (req, res, next) {
  //console.log(__dirname);

  //sendFile
  //res.sendFile(__dirname+'/components/login.vue');

  //redirect
 // res.redirect('https://www.baidu.com');

  //render
  res.render('index.html');

});






/**
 * 错误处理
 * 404
 * 500
 */
/*处理404错误*/
app.use(function (req,res,next) {
  res.status(404).send("Sorry can't find that!");
});

/*处理500错误 */
app.use(function (error,req,res,next) {
  console.log(error);
  res.status(500).send('Something broke!');
})


/**
 * 监听处理
 *
 * */
app.listen(9000,()=>{
  console.log("9000 is listening");
})
