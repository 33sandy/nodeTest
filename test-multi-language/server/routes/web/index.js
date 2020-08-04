const { urlencoded } = require('express');

module.exports = app =>{         //一个函数
    const express = require('express');
    const router = require('express').Router({
        mergeParams:true,           //允许融合
    });  
    //登录
    router.post('/login',async (req,res)=>{
        console.log(req.body)
        console.log(req.headers.acceptlanguage )
        // res.send('ok')
        let lang=req.headers.acceptlanguage;
        let errorMsg='用户不存在'
        if(lang === "en"){
            errorMsg='User does not exist' 
            console.log(errorMsg)
        }
        res.status(422).send({
            message:errorMsg
        })
    })

    app.use('/web/api',router)        //挂载子路由，操作增删改查
    
    //错误处理函数
    app.use(async(err,req,res,next)=>{
        // console.log(err)
        res.status(err.statusCode || 500).send({
            message:err.message
        })
    })
}