const express = require('express')
const cors = require('cors')
const app = express()
const port = process.env.PORT || 6969;

//Middleware 
app.use(cors);
app.use(express.json())