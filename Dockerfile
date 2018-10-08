FROM node:8.12

#USER node
#RUN mkdir /home/node/.npm-global
#RUN npm config set prefix "/home/node/.npm-global"
#ENV PATH="/home/node/.npm-global/bin:${PATH}"
#COPY . /home/node/app/
#WORKDIR /home/node/app/
#RUN chown -R node:node /home/node/app

COPY . /app
WORKDIR /app

RUN npm install -g gulp

RUN npm install

#RUN npm run build

ENV NODE_ENV production
ENV PORT 80
EXPOSE $PORT

CMD ["npm", "start"]