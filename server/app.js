const express = require('express');
const app = express();
const cors=require('cors')
const bodyparser=require('body-parser')

app.use(express.json())
app.use(cors())
app.use(bodyparser.urlencoded({extended:true}))



module.exports = app