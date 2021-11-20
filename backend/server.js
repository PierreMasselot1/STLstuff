const express = require('express');
const cors = require('cors');
const passport = require('passport');

const app = express();

app.use(express.json());
app.use(cors());

require('dotenv').config();


app.get('/api/testAPI',(req,res)=>{
  res.send({response:"This is the response for the testAPI"});
});
//non functional
app.post('api/login',
  passport.authenticate('local', { successRedirect: '/',
                                   failureRedirect: 'api/login' }));

const port = process.env.PORT || 5050;

app.listen(port, (console.log(`Listening on port ${port}`)));