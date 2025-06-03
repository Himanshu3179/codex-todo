ARG VITE_API_URL
FROM node:20-alpine AS build
WORKDIR /app
ENV VITE_API_URL=${VITE_API_URL}
COPY package.json tsconfig.json tsconfig.app.json tsconfig.node.json vite.config.ts tailwind.config.ts postcss.config.js index.html ./
COPY public ./public
COPY src ./src
RUN npm install && npm run build

FROM node:20-alpine
WORKDIR /app
COPY --from=build /app/dist ./dist
RUN npm install serve -g
EXPOSE 4173
CMD ["serve", "-s", "dist", "-l", "4173"]
