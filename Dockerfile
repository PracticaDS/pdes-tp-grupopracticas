
FROM node:10

WORKDIR /usr/src/app

COPY package*.json ./

COPY frontend/package*.json ./frontend

RUN npm install

COPY . .

# install dependencies and build frontend in the same container
RUN npm install --prefix frontend
RUN SKIP_PREFLIGHT_CHECK=true npm run-script build --prefix frontend

EXPOSE 5000
CMD [ "npm", "start" ]


# FROM node:10 as client

# WORKDIR /usr/app/client/
# COPY client/package*.json ./
# RUN npm install -qy
# COPY client/ ./
# RUN npm run build