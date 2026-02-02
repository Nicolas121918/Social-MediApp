# Build
FROM node:20-alpine AS build
# creamos una carpeta de trabajo 
WORKDIR /app
# descarga las dependencias
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Nginx
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
# intercambio las configuraciones de el nginx por las mias
COPY nginx.conf /etc/nginx/conf.d/default.conf
# puerto estandar para trafico http
EXPOSE 80
# daemon : off para docker, ya que necesita que nginx corra en primer plano 
CMD ["nginx", "-g", "daemon off;"]
