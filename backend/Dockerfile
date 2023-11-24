FROM node:20.10 as build

WORKDIR /backend
COPY package*.json .
RUN npm install
COPY  . .
RUN npm run build

FROM node:20.10
WORKDIR /backend
COPY package.json .
RUN npm install --only=production
COPY --from=build /backend/dist ./dist
CMD npm run start:prod