FROM node:14.4.0-alpine

RUN adduser -S app -h /app

USER app

WORKDIR /app

ENV NODE_ENV=production

ADD package.json package-lock.json ./

RUN npm install

ADD . ./

EXPOSE 3000

CMD ["npm", "start"]
