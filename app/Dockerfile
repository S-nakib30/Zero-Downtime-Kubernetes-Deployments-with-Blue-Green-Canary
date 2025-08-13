FROM node:20-alpine
WORKDIR /app

# Copy only manifests first for better layer caching
COPY package*.json ./
RUN npm install --omit=dev --no-audit --no-fund

# Copy source (no inline comments!)
COPY server.js .

ENV PORT=8080
EXPOSE 8080
CMD ["npm", "start"]
