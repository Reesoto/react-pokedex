FROM node

WORKDIR /usr/src/app

COPY package*.json ./

CMD npm install

COPY . .

EXPOSE 8080
CMD["node","server.js"]
