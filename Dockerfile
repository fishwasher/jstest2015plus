FROM node:10.15.1

COPY . /app
WORKDIR /app

ENV CONTAINER docker

RUN npm install
RUN npm run build

ENV PORT 80
EXPOSE $PORT

CMD ["npm", "start"]
