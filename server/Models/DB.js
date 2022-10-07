const mongoose= require('mongoose');

const DB=mongoose.Schema({
    id:{
        type:Number
    },
    click:{
        type:Number,
        default:0
    }
})

module.exports=mongoose.model('DB', DB)