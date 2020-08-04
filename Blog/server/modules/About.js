const mongoose = require('mongoose');
var schema = new mongoose.Schema({
    title:{type:String},
    body:{type:String},
}
)  


module.exports=mongoose.model('About',schema)           //导出