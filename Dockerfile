FROM node:14-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install
RUN npm install typescript -g

COPY . .

RUN npm run build

EXPOSE 5000

CMD ["npm", "start", "--port", "5000"]
