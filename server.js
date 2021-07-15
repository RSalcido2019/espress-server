// reuire node module that we downloaded through npm express
const express = require('express')

//invoke express() saved into app
const app = express()
// port to listen
const port = 8001

app.use(express.static('public'))


app.get('/headsortails', (req, res) => {
    //define a function that returns heads or tails
    const flip = Math.floor(Math.random() * 2) ? 'Heads' : 'Tails' 
   
     //server is returning a response
     res.send(flip)
   })
   
//Server will listen for this port indicated above 8001
app.listen(port, () => {
    console.log(`My sever is up and running on port number ${port}`)
})

