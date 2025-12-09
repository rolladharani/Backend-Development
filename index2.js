import express from 'express';
const app=express();
app.use(express.json());
app.get('/',(req,res)=>{
    res.send("Api Success");
})
app.post('/add-users',(req,res)=>{
    let data=req.body;
    console.log(data);
    res.send("Data added to backend");
})
app.put('/edit-users',(req,res)=>{
    let data=req.body;
    console.log(data);
    res.send("Data edited");
})
app.delete('/delete-user',(req,res)=>{
    let data=req.body;
    console.log(data);
    res.send("Data Deleted");
})
app.listen(3000,()=>{
    console.log("Server Started Successfullt at 3000");
})