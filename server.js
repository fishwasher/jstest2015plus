#!/usr/bin/env node

const port = process.env.PORT || 80;

const express = require('express');
const app = express();

app.get('/', function (req, res) {
  res.send('Hello World');
})
 
app.listen(port);
