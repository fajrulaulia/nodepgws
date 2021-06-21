FROM node:11.4.0-alpine

ARG PG_DATABASE=$PG_DATABASE
ARG PG_USER=$PG_USER
ARG PG_PASSWORD=$PG_PASSWORD
ARG PG_HOST=$PG_HOST

WORKDIR /app

COPY package.json /app

RUN npm install

COPY src/ src/
COPY migrations/ migrations/
COPY services/ services/
COPY index.js .
COPY migrate.js .
COPY deployments/setup.sh .
RUN chmod +x setup.sh
EXPOSE 3000
ENTRYPOINT ["./setup.sh"]

