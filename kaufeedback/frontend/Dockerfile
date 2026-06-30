FROM node:18-alpine
WORKDIR /app

# Copy package.json first
COPY package*.json ./
RUN npm install

# Copy frontend code
COPY . .
RUN npm run build

EXPOSE 3000
CMD ["npx", "serve", "-s", "build", "-l", "3000"]

