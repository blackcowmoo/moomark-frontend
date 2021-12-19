FROM node:12-alpine
WORKDIR /app
COPY . .
RUN yarn --production --frozen-lockfile --no-cache

EXPOSE 3000
STOPSIGNAL SIGINT

ENTRYPOINT yarn start
