
FROM node:10.23.0-alpine3.10

ENV MONGO_INITDB_ROOT_USERNAME: admin \
    MONGO_INITDB_ROOT_PASSWORD: admin12345

WORKDIR /app

COPY package*.json ./

RUN npm install && npm cache clean --force

COPY . .

EXPOSE 5000

CMD ["yarn", "dev"]
