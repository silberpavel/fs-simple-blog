//Server
const express = require('express')
const mongoose = require('mongoose')
const path = require('path')
const keys = require('./keys')

const port = process.env.PORT || 5000
const clientPath = path.join(__dirname, 'client')

// mongoose.connect(keys.mongoURI)
//     .then(() => console.log('MongoDB connected!'))
//     .catch(err => console.log(err))
// const options = {
//     useMongoClient: true,
//     autoIndex: false, // Don't build indexes
//     reconnectTries: 100, // Never stop trying to reconnect
//     reconnectInterval: 500, // Reconnect every 500ms
//     poolSize: 10, // Maintain up to 10 socket connections
//     // If not connected, return errors immediately rather than waiting for reconnect
//     bufferMaxEntries: 0
//   };
//   mongoose.connect('mongodb://pavel:a123456@ds024548.mlab.com:24548/fullstack-blog').then(
//     ()=>{
//       console.log("connected to mongoDB")}),
//    (err)=>{
//        console.log("err",err);
//   }

const app = express()
app.use(express.static(clientPath))

app.listen(port, () => {
    console.log(`Server has been run on port ${port}`)
})











