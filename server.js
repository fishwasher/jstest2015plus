#!/usr/bin/env node

const
  config = require('./config'),
  port = process.env.PORT || 8888,
  express = require('express'),
  app = express(),
  fs = require('fs'),
  webpage = fs.readFileSync(config.indexHtml).toString();

app.get('/', function (req, res) {
  res.setHeader('Content-Type', 'text/html;charset=UTF-8');
  res.send(webpage);
})

app.listen(port);
