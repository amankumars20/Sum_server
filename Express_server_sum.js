
const express_1 = require("express")
const app = express_1()

app.get("/sum",function(req,res){
    const a=parseInt(req.query.a)
    const b=parseInt(req.query.b)
    const c=a+b
    res.send(c.toString())
})

app.listen(8000)
