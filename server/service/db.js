const mongoose=require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/mts')

//model
const Material=mongoose.model('Material',{
    
uid:String,
itemno:Number,
mid:String,
desc:String,
cqty:Number,
pqty:Number,
diff:Number,
comment:String

})
module.exports={
    Material
}
