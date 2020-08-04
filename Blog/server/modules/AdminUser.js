const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    username: { type: String }, // 属性name，类型为String  
    password:{type:String,
    select:false,       //密码不查出不来
      set(val){         //重置密码散列加密
        return require('bcrypt').hashSync(val,10)
      }
    } ,
  });
  


module.exports=mongoose.model('AdminUser',schema)           //导出