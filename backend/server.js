const express = require('express');
const app = express();

app.use(express.json());

require('dotenv').config();

app.get('/',(req,res)=>{
    res.send('Hello World');
});


app.get('/testAPI',(req,res)=>{
  res.send('This is the response for the testAPI');
});

const port = process.env.PORT || 3000;

app.listen(port, (console.log(`Listening on port ${port}`)));