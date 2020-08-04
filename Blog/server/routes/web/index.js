const { urlencoded } = require('express');
const assert = require('http-assert');

module.exports = app =>{         //一个函数
    const express = require('express');
    const jwt = require('jsonwebtoken');
    const AdminUser=require('../../modules/AdminUser');
    const assert =require('http-assert')
    var moment = require('moment')
    moment.locale('zh-cn')

    const router = require('express').Router({
        mergeParams:true,           //允许融合
    });    //子路由

    //获取资源，查看
    router.post('/',async (req,res)=>{
        const model= await req.Model.create(req.body)
        res.send(model)
    })

    //修改资源
    router.put('/:id',async (req,res)=>{
        const model= await req.Model.findByIdAndUpdate(req.params.id, req.body)
        res.send(model)
    })

    //删除资源
    router.delete('/:id',async (req,res)=>{
        await req.Model.findByIdAndDelete(req.params.id)
        res.send({
            success:true
        })
    })

    //资源列表
    router.get('/', async (req,res)=>{
        const queryOptions={}
        if(req.Model.modelName == 'Category'){          //模型名等于分类
            queryOptions.populate='parent'
        }
        const items= await req.Model.find().setOptions(queryOptions).limit(10)
        items.forEach(function(item){
            console.log(item.updated)
           item.created=moment(item.created).utcOffset(480).format('YYYY-MM-DD HH:mm:ss');
           item.updated=moment(item.updated).utcOffset(480).format('YYYY-MM-DD HH:mm:ss');
           console.log("dd:"+item.updated )
        })
        res.send(items)
    })

    //资源详情
    router.get('/:id',async (req,res)=>{
        const model= await req.Model.findById(req.params.id)
        res.send(model)
    })
    
    // 是否登录,登录验证中间件
    const authMiddleware=require('../../middleware/auth')

    // 资源中间件
    const resourceMiddleware=require('../../middleware/resource')
    //挂载资源
    app.use('/web/api/rest/:resource',resourceMiddleware(),router)        //挂载子路由，操作增删改查
    

    //上传图片
    const multer=require('multer');
    const upload=multer({dest:__dirname+'/../../uploads'})
    app.use('/admin/api/upload',authMiddleware(),upload.single('file'),async(req,res)=>{
        const file= req.file;
        file.url=`http://localhost:3000/uploads/${file.filename}`
        res.send(file);
    })

    //登录
    app.use('/admin/api/login',async(req,res)=>{ 
        const {username,password}=req.body
        //1.根据用户名找用户
       
        const user=await AdminUser.findOne({username}).select('+password')    //强制查出password
        assert(user,422,'用户不存在！')
        // if(!user){
        //     return res.status(422).send({
        //         status:1,
        //         message:'用户不存在！'
        //     })
        // }
        //2.校验密码
        const isValid= require('bcrypt').compareSync(password,user.password)
        assert(isValid,422,'密码不正确')
        //3.返回token
        const token= jwt.sign({id:user._id},app.get('secret'));
       res.send({status:0,token:token})
    
    })

    //错误处理函数
    app.use(async(err,req,res,next)=>{
       // console.log(err)
       res.status(err.statusCode || 500).send({
           message:err.message
       })
    })

}