const mongoose = require('mongoose');
var schema = new mongoose.Schema({
    username:{type:String},
    mobile:{type:String},
    email:{type:String},
    body:{type:String},

    created: {type: Date },
    updated: {type: String, default: Date.now},
    
},
{timestamps: {createdAt: 'created', updatedAt: 'updated',}});
// )  


module.exports=mongoose.model('Blog',schema)           //导出