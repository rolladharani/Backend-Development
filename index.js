import express from 'express';
const app =express();

//middleware
app.use(express.json());


app.get('/',(req,res)=>{
    res.send("Api Success");
    // console.log(data);
})

app.post('/add-user',(req,res)=>{
    let data=req.body;
    console.log(data);
    //logic to add data into your data base
    res.send("data added");
});

app.listen(8001,()=>{
    console.log("Server  running at port 7000");
    // console.log(data);
})