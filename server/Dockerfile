FROM node:10.15-alpine

WORKDIR /server
COPY package.json ./
COPY package-lock.json ./
RUN npm i

COPY . /server

CMD npm run build && node dist
