const express = require('express');
const nodemon  = require('nodemon');
const cors = require('cors');

const app = express();
app.use(express.json())
app.use(cors)
app.use(express.urlencoded({extended:true}))
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next(); 
  });
  const port = process.env.PORT || 3000;
  const routing = require('./rooters/indexRooter')
  app.use('/mathusApi/', routing)
  const {mongoose} = require('./dbconnexion')


app.listen(port, ()=>{
    console.log(`votre application est demarrée sur le port ${port}. lancer là avec le lien http://localhost:${port}`)
})