FROM node

COPY package.json .
RUN npm install
COPY . .

ENV PUBLIC_URL http://localhost:4000

RUN npm run build
RUN npm run transpile

CMD PORT=4000 npm run start:prod