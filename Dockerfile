FROM node:18-alpine

WORKDIR /voicebotreact

COPY . .

RUN npm install

CMD ["npm", "start"]