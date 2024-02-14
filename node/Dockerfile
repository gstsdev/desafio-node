FROM node:18-alpine

RUN apk update && \
    apk add wget && \
    wget -q -O /usr/bin/wait-for https://raw.githubusercontent.com/eficode/wait-for/v2.2.3/wait-for && \
    chmod +x /usr/bin/wait-for

USER node

WORKDIR /usr/src/app

COPY package.json package-lock.json ./

RUN npm ci

EXPOSE 3000

CMD ["node", "index.js"]