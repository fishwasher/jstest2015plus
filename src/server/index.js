#!/usr/bin/env node

const port = process.env.PORT || 80;

const http = require("http");

const server = http.createServer(function (req, res) {
	res.end("Hello pretty opeNode World!");
})

server.listen(port, (err) => {
	if ( ! err) {
		console.log(`server is listening on ${port}`);
	}
})
