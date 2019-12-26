const express = require('express')
const dotenv = require('dotenv')


dotenv.config({path: './config/config.env'})


const app = express()

const PORT = process.env.PORT || 6000
app.listen(6000, console.log(`Server Runnig in ${process.env.NODE_ENV} mode on port ${PORT}`)
)
