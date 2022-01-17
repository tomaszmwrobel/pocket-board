FROM node:latest

WORKDIR /app

COPY package.json ./

COPY package-lock.json ./

RUN npm install

#COPY public ./
#COPY src ./

#TODO Add docker-ignore
COPY . .

CMD ["npm", "start"]