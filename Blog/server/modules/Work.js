const mongoose = require('mongoose');
var schema = new mongoose.Schema({
    title:{type:String},
    body:{type:String},
    created: {type: Date },
    updated: {type: String, default: Date.now},
    
},
{timestamps: {createdAt: 'created', updatedAt: 'updated',}});
// )  


module.exports=mongoose.model('Work',schema)           //导出