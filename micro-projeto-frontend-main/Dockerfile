# Stage 1
FROM node:14.20.0 as node
WORKDIR /app
COPY . .
#RUN npm install @angular-devkit/schematics @angular-devkit/schematics-cli @angular-devkit/core @schematics/angular
#RUN npm install @angular/material
#RUN npm install --save @angular/material @angular/animations @angular/cdk
RUN npm install

RUN npm run build:prod
# Stage 2
FROM nginx:alpine
COPY --from=node /app/dist/micro-projeto-frontend /usr/share/nginx/html