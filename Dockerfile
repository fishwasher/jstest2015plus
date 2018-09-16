FROM node:10
COPY . /app
WORKDIR /app
RUN npm install
ENV NODE_ENV production
ENV PORT 80
EXPOSE $PORT
CMD ["npm", "start"]