const express = require('express');
const app = express();

require('dotenv').config()



app.get('/students/:std1',(req,res)=>{
    console.log(req.params.std1);
    const std1 = req.params.std1;

    res.json({std1});
});

//console.log(process.env)
let PORT = process.env.PORT || 5000;
app.listen(PORT,()=>{
    console.log(`The server is running on port ${PORT} `)
});