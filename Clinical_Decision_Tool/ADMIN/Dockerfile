# --- Development stage ---
FROM node:22-alpine AS dev
WORKDIR /app

# copy dependencies only and install (faster rebuilds)
# COPY frontend/package.json ./package.json
COPY ./package*.json ./
RUN npm install

# copy app source
COPY ./ ./

# start dev server (react)
CMD ["npm", "run", "dev"]

# --- Build stage ---
FROM node:22-alpine AS build
WORKDIR /app

# COPY frontend/package.json ./package.json
COPY ./package*.json ./
RUN npm install
# COPY frontend/. .
COPY ./ .
RUN npm run build

# --- Production stage (serve with nginx) ---
FROM nginx:alpine AS prod
# copy build from build stage into nginx html folder
COPY --from=build /app/build /usr/share/nginx/html

# EXPOSE 5174

# run nginx in foreground so logs show
CMD ["nginx", "-g", "daemon off;"]
