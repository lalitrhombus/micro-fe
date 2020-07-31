FROM node

COPY package.json .
RUN npm install
COPY . .

CMD PORT=8080 node server.js