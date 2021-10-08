const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

require('dotenv').config();


app.get('/api/testAPI',(req,res)=>{
  res.send('This is the response for the testAPI');
});

const port = process.env.PORT || 5050;

app.listen(port, (console.log(`Listening on port ${port}`)));