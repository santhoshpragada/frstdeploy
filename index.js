var express = require('express');
var server = express()

server.listen(3000,function (){
    console.log("server started on 3000 ");
})

server.get('/',function (req,res){
    res.send("Helllo Santhosh");
})


