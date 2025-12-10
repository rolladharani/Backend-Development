const getstudents = (req,res) => {

        const data={name : "Aditya" , rollno:"48"};

        res.status(200).json({result : data });
}
const addstudents = (req,res)=>{
        // const data2={city : "kkd"};
        // res.status(201).json({ updatedRes: data2 });
        console.log("hello")
        let data2= req.body;
        console.log(data2);
        res.status(201).json({msg:data2})
}


export {getstudents,addstudents};