FROM node:20-alpine
WORKDIR /app
COPY package.json tsconfig.json ./
COPY src ./src
RUN npm install && npm run build
EXPOSE 3000
CMD ["node", "dist/index.js"]
