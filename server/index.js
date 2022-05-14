import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import routers from './routes/index.js'

const app = express()
const PORT = process.env.PORT || 5000
const MONGODB_URI = process.env.MONGODB_URI_LOCAL

try {
    mongoose.connect(MONGODB_URI,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 5000, // Keep trying to send operations for 5 seconds
      socketTimeoutMS: 45000 // Close sockets after 45 seconds of inactivity
    },
    function(err){
        if(err){
            console.log('Error Connection')
        }
        else{
            console.log('Data Base Connected')
        }
    }
    )
} 
catch (error) {
    handleError(error);
}

app.use(express.json({limit:"30mb" , extended:true}))
app.use(express.urlencoded({limit:"30mb" , extended:true}))
app.use(cors())
app.use('/',routers)

app.listen(PORT,()=>{
    console.log(`Server run on Port ${PORT}`)
})


