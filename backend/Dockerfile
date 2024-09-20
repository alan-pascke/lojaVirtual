FROM node:20.9.0

WORKDIR /src/app

COPY package*.json yarn.lock ./

RUN yarn install

# Copia o restante do código da aplicação
COPY . .

# Expõe a porta que o servidor usará
EXPOSE 5000

# Comando para rodar a aplicação
CMD ["yarn", "start:watch"]
