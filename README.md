# Node Image Server

Simple node based image server.  This is intended to be run along side node apps, where using node to serve up static files is convenient.  

Start the app by running `node Server.js`.  This will serve up images stored in images/ from requestt to `<ip>:2000/images/`.  

A Dockerfile is included, though there are more efficent means for serving up static files from a Docker container.  