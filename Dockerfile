FROM node:14-alpine

RUN apk --no-cache add --virtual builds-deps build-base python && \
  npm install && \
  npm rebuild bcrypt --build-from-source && \
  apk del builds-deps \

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

EXPOSE 5000

CMD ["npm", "start", "--port", "5000"]
