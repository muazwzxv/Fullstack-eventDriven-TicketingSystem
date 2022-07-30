FROM node:16-alpine

WORKDIR /app
COPY package.json .
COPY yarn.lock .
RUN yarn install --only=prod
COPY . .

CMD [ "yarn", "start" ]
