# Setup and build the frontend

FROM node:10 as frontend

WORKDIR /usr/app/frontend/
COPY frontend/package*.json ./
RUN npm install -qy
COPY frontend/ ./
RUN npm run build


# Setup the server

FROM node:10

WORKDIR /usr/app/
COPY --from=frontend /usr/app/frontend/build/ ./server/frontend/build/

WORKDIR /usr/app/server/
COPY package*.json ./
RUN npm install -qy
COPY . .


EXPOSE 5000

CMD ["npm", "start"]