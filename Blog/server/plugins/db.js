module.exports = app=>{             //一个函数
    const mongoose = require('mongoose');

    mongoose.connect('mongodb://127.0.0.1:27017/blog',{
        useNewUrlParser:true,           //无效链接地址
    })

}