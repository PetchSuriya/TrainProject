const express = require('express')
const router = express.Router()



router.get('/rooms',(req,res)=>{
    //code
    console.log(req.body)
    res.send('rooms')
})




module.exports = router