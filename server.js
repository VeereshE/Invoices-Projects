const express = require('express')
const mongoose = require('mongoose')
const Invoices = require('./Database/db')
const app = express()

app.use(express.json)
app.use(express.urlencoded({extended:false}))

// router
app.get("/",(req,res)=>{
    res.send("Hello NODE API")
})

app.get("/invoices",(req,res)=>{
    res.send("Create a invoices")
})

app.post('/invoices',async (req,res)=>{
    try{

        const invoices = await Invoices.create(req.body)
        req.status(200).json(invoices)
    } catch{
        console.log(error.message);
        res.status(500).json({message:error.message})
    }
})
// update data

app.put('/invoices:id', async(req,res)=>{
    try{
        const {id} = req.params;
        const invoices = await Invoices.findByIdAndUpdate(id, req.body);
        if(!invoices){
            return res.status(400).json({message:'cannot find the any invoices with ID ${id}'})
        }
        res.status(200).json(invoices);

    } catch{
        console.log(error.message);
        res.status(500).json({message:error.message})
    }
})

// delete 
app.delete('/invoices/:id', async(req,res)=>{
    try{
        const {id} = req.params;
        const invoices = await Invoices.findByIdAndDelete(id);

        if(!invoices){
            return res.status(404).json({message: 'cannot find invoices with Id'})
        }
        res.status(200).json(invoices);
    } catch{

    }
})
app.post('/invoices:id',async (req,res)=>{
    try{

        const invoices = await Invoices.create(req.body)
        req.status(200).json(invoices)
    } catch{
        console.log(error.message);
        res.status(500).json({message:error.message})
    }
})



mongoose.connect('mongodb+srv://VeereshEdiga:6363163774@cluster0.egt3x2w.mongodb.net/?retryWrites=true&w=majority')
.then(() =>{
    app.listen(8000,()=>{
        console.log("Node API app is running on port 8000")
    })
    console.log('conneted to monogoos')
}).catch((error)=>{
    console.log(error)
})

