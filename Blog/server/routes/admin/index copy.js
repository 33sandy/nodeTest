module.exports = app =>{         //一个函数
    const express = require('express');
    const router = require('express').Router();    //子路由
    const Category=require('../../modules/Category')

    router.post('/categories',async (req,res)=>{
        const model= await Category.create(req.body)
        res.send(model)
    })
    router.put('/categories/:id',async (req,res)=>{
        const model= await Category.findByIdAndUpdate(req.params.id, req.body)
        res.send(model)
    })
    router.delete('/categories/:id',async (req,res)=>{
        await Category.findByIdAndDelete(req.params.id)
        res.send({
            success:true
        })
    })
    router.get('/categories',async (req,res)=>{
        const items= await Category.find().populate('parent').limit(10)
        res.send(items)
    })
    router.get('/categories/:id',async (req,res)=>{
        const model= await Category.findById(req.params.id)
        res.send(model)
    })
    

    app.use('/admin/api',router)        //挂载子路由，操作增删改查
    


}