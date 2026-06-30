FROM node:18-alpine
WORKDIR /app

# Copy package.json first
COPY package*.json ./
RUN npm install

# Copy backend code
COPY . .

EXPOSE 4000
CMD ["node", "server.js"]

