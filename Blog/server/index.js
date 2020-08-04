const express = require('express');

const app=express();

app.use( require('cors')())     //允许跨域
app.use(express.json())         //可获取body字段json
app.use('/uploads',express.static(__dirname+'/uploads')) ;    //静态文件托管

app.set('secret','asfsdgfsdfgdfhgdfhdgh')

// 引用，函数传app
require('./plugins/db')(app);
require('./routes/web')(app);
require('./routes/admin')(app);



app.listen(3000,()=>{
    console.log("http://localhost:3000")
})

 