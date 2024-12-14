FROM node:22.12-alpine

WORKDIR /var/www/app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

ENTRYPOINT ["npm", "run", "start:dev"]