# stage 1
FROM node:latest as node
# RUN mkdir /app
WORKDIR /usr/src/app
COPY . .
RUN npm install
RUN npm run build --prod

# stage 2
FROM nginx:alpine
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=node /usr/src/app/dist/askianoorui /usr/share/nginx/html