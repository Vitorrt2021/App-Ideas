require('dotenv').config()
const express = require('express')
const app = express();


app.use(express.static('src'))

const port = 3000.
app.listen(port,()=>{
    console.log(process.env.TOKEN)
    console.log(`ouvindo na port ${port}`)
})