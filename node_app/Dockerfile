FROM node:18

ADD https://github.com/jwilder/dockerize/releases/download/v0.6.1/dockerize-linux-amd64-v0.6.1.tar.gz /usr/local/bin/
RUN tar -C /usr/local/bin -xzvf /usr/local/bin/dockerize-linux-amd64-v0.6.1.tar.gz

WORKDIR /usr/src/app

COPY package*.json /usr/src/app/
RUN npm install
COPY . /usr/src/app/

EXPOSE 3000

CMD ["dockerize -wait tcp://db:3306 -timeout 20s", "npm", "run", "dev"]