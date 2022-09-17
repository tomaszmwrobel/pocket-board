FROM node:14.17.0-slim AS builder
ENV NODE_ENV=production

WORKDIR /app

COPY package.json .
COPY package-lock.json .
RUN npm install --production

COPY public ./public/
COPY src ./src/
RUN npm run build


FROM nginx:1.23.1-alpine
ENV NODE_ENV production

COPY --from=builder /app/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

CMD ["nginx", "-g", "daemon off;"]