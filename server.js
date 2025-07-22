// Step 1 import
const express = require('express')
const app = express()
const morgan = require('morgan')
const { readdirSync} = require('fs')
const cors = require('cors')

// const authRouter = require('./src/routes/auth')

//middleware
app.use(morgan('dev'))
app.use(express.json())
app.use(cors())
// app.use('/api',authRouter)
readdirSync('./src/routes')
.map((c)=> app.use('/api' , require('./src/routes/'+c)))

// Step 3 Routers
// app.get('/api',(req,res)=>{
//     //code
//     res.send("Work")
// })
// Step 2 Start
app.listen(5000,()=> console.log('Server is running'))