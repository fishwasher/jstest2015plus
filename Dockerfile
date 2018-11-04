FROM node:8.12

COPY . /app
WORKDIR /app

ENV CONTAINER docker

RUN npm install

RUN npm run build

ENV PORT 80
EXPOSE $PORT

CMD ["npm", "start"]
