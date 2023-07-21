const express=require('express')

//server creation
const server=express()
//connecting front end with cors
const cors=require('cors')
const logic=require('./service/logic')
server.use(cors({origin:'http://localhost:3000'}))

server.use(express.json())

//port setting for server
server.listen(8000,()=>{
    console.log("server at 8000");
})

server.get('/getAllMaterial',(req,res)=>{
    logic.allMaterial().then(result=>{
        res.status(result.statusCode).json(result)

    })

})

server.delete('/deleteMaterial/:id',(req,res)=>{
    logic.removeMaterial(req.params.id).then(result=>{
        res.status(result.statusCode).json(result)
})
})

// store new materials
server.post('/addMaterial',(req,res)=>{
    logic.addMaterial(req.body.uid,  
        req.body.itemno,req.body.mid,req.body.desc,req.body.cqty,req.body.pqty,req.body.diff,req.body.comment).then(result=>{
        res.status(result.statusCode).json(result)

    })

})


