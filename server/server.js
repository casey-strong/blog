const express = require('express');
const bodyParser = require('body-parser');
const next = require('next');
const mongoose = require('mongoose');

const PORT = process.env.PORT || 3000;
const dev = process.env.NODE_DEV !== 'production';
const mongourl = process.env.MONGODB_URI || 'mongodb://localhost:27017/Blog';

const nextApp = next({ dev });
const handle = nextApp.getRequestHandler();
const db = mongoose.connect(mongourl, (err) => {
  if (err){
    console.log(err);
  }
});

nextApp.prepare().then(() => {
  const server = express();
  server.use(bodyParser.json());
  server.use(bodyParser.urlencoded({extended: true}));
  app.use('/api', require('./routes/api'));
  app.get('*', (req, res) => {
    return handle(req, res)
  });
  app.listen(PORT, err => {
    if(err) throw err;
    console.log(`Ready at http://localhost:${PORT}`);
  })
})
