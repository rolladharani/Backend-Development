import express from 'express';
const app=express();
app.use(express.json()); 
import cors from 'cors'
app.use(cors())
import stuRoutes from "./Routes/stuRoutes.js"

app.use('/',stuRoutes);

// app.get('/get-stu',(req,res)=>{
//     res.send("Yayy!!");
// })

app.listen(3000,()=>{
    console.log("Server Started succesfully at port 3000");
})