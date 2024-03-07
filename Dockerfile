FROM node:20.4.0
WORKDIR /usr/src/app
COPY . /usr/src/app
COPY package*.json /usr/src/app

RUN npm install
RUN npm run build
# server runs on port 8000
EXPOSE 8000
ENTRYPOINT [ "node", "./server/server.js" ]

# run the server