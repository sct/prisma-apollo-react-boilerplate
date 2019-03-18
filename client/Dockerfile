FROM node:10.15-alpine

WORKDIR /client
COPY package.json ./
COPY package-lock.json ./
RUN npm i

COPY . /client

CMD npm run build && node dist
