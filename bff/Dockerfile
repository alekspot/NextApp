FROM node

WORKDIR /app

COPY package.json .
RUN npm i

COPY . .

RUN npm run build

EXPOSE 443

CMD npm run start