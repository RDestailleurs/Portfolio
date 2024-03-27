FROM node:lts-slim

WORKDIR /app

COPY . .
#COPY package*.json ./

RUN rm -rf node_modules && yarn install

#COPY . .

ENTRYPOINT ["yarn", "dev"]
