FROM node:latest

WORKDIR /home/app

COPY package.json /home/app/

RUN npm install

COPY . .

RUN npm run build

EXPOSE 5000

CMD ["npm","start"]
