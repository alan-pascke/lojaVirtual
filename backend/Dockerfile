FROM node:20.9.0

WORKDIR /src

COPY package.json yarn.lock ./

RUN yarn install 

COPY . .

EXPOSE 5000

CMD ["yarn", "start:watch"]
