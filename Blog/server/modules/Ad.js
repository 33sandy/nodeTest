const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    items:[{
         image:{type: String }  ,    // 属性icon，类型为String  
         url:{type:String}
      }], 
  });
  


module.exports=mongoose.model('Ad',schema)           //导出