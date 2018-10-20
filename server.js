#!/usr/bin/env node

const
  config = require('./app/config'),
  port = process.env.PORT || 80,
  express = require('express'),
  app = express(),
  fs = require('fs'),
  webpage = fs.readFileSync(config.indexHtml);

app.get('/', function (req, res) {
  res.send(webpage);
})

app.listen(port);
