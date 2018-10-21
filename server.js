#!/usr/bin/env node

const
  config = require('./app/config'),
  port = process.env.PORT || 80,
  express = require('express'),
  app = express(),
  fs = require('fs'),
  webpage = fs.readFileSync(config.indexHtml).toString();

app.get('/', function (req, res) {
  /*
  if (process.env.NODE_ENV === 'development') {
    console.log(webpage);
  }
  */
  res.setHeader('Content-Type', 'text/html;charset=UTF-8');
  res.send(webpage);
})

app.listen(port);
