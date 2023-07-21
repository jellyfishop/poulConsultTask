const db = require('./db')

const allMaterial = () => {
    return db.Material.find().then(result => {
        if (result) {
            return {
                statusCode: 200,
                materials: result
            }
        }
        else {
            return {
                statusCode: 404,
                message: "no data is available"
            }
        }
    })
}
const addMaterial = (uid,itemno,mid,desc,cqty,pqty,diff,comment) => {
   return db.Material.findOne({ uid }).then(result => {
        if (result) {
            return {
                statusCode: 404,
                message: "material already exist"
            }
        }
        else {
            //create object for new mat

            const newMat = new db.Material({
                uid,
                itemno,
                mid,
                desc,
                cqty,
                pqty,
                diff,
                comment

            })
            //save object id db
            newMat.save()
            return{
                statusCode:200,
                message:"Added successfully"
            }

        }
    })

}

const removeMaterial=(eid)=>{
   return db.Material.deleteOne({uid:eid}).then(result=>{
        if(result){
            return{
                statusCode:200,
                message:"Deleted"
            }
        }
        else{
            return{
                statusCode:404,
                message:"not present"
            }
        }
    })
}

module.exports = {
    allMaterial,addMaterial,removeMaterial
}