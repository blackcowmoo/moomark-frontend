# FROM node:12 as builder

# COPY . /node
# WORKDIR /node

# RUN yarn && yarn build

### Production
FROM node:12-alpine

COPY . /node
# COPY --from=builder /node/.next /node/.next
# COPY .next /node/.next

WORKDIR /node
RUN yarn --production --frozen-lockfile --no-cache && yarn cache clean

EXPOSE 3000
STOPSIGNAL SIGINT

ENTRYPOINT yarn start
