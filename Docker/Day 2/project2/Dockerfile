FROM node:22.12.0

WORKDIR /usr/src/app

COPY package*.json .

RUN npm install

COPY . .

RUN npm run build

EXPOSE 5500

CMD ["npm","run","dev"]