FROM node:latest
EXPOSE 2000
ADD . .
CMD node Server.js
