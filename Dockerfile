FROM node:latest
WORKDIR /app
COPY . /app
RUN npm install
ENV NODE_ENV="production"
RUN npm run react
CMD ["npm", "start"]