FROM node

COPY package.json .
RUN npm install
COPY . .

ENV PUBLIC_URL http://localhost:5000

RUN npm run build
RUN npm run transpile

CMD PORT=5000 npm run start:prod