FROM node

COPY package.json .
RUN npm install
COPY . .

ENV PUBLIC_URL http://localhost:3000

RUN npm run build
RUN npm run transpile

CMD PORT=3000 npm run start:prod
