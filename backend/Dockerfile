FROM node:10-alpine

WORKDIR /usr/todo_app
COPY package.json ./

RUN yarn

COPY . .

#Esses comandos são ignorados pelo docker-compose
EXPOSE 3003
CMD [ "yarn", "dev" ]