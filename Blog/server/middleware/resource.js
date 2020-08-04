module.exports=options=>{
    return async(req,res,next)=>{           //中间件,next，可以处理下一个
        const modelName=require('inflection').classify(req.params.resource)         //小写转大写
        req.Model=require(`../modules/${modelName}`)         //挂载
        next() ;
    }
}