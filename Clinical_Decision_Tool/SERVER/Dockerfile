# --- Development stage ---
FROM node:22-alpine AS dev
WORKDIR /app

# copy and install dependencies
# COPY backend/package.json ./package.json
COPY ./package*.json ./
RUN npm install

# copy backend source
# COPY backend/. .
COPY ./ ./

# use nodemon for auto-reload in dev (video used npx nodemon)
# CMD ["npm", "nodemon", "index.js"]
CMD ["npm", "run", "dev"]

# --- Production stage ---
FROM node:22-alpine AS prod
WORKDIR /app

# COPY backend/package.json ./package.json
COPY ./package*.json ./
RUN npm install --production

# COPY backend/. .
COPY ./ ./


# EXPOSE 8000


# start backend in production
# CMD ["node", "index.js"]
CMD ["npm", "start"]
