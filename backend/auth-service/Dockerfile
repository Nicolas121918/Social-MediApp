# Dockerfile (backend)
# Usamos Node 20
FROM node:20-alpine

# Creamos el directorio de trabajo
WORKDIR /app

# Copiamos package.json y package-lock.json archivos de dependencias
COPY package*.json ./

# Instalamos dependencias
RUN npm install

# Copiamos todo el código
COPY . .

# Compilamos TypeScript a js
RUN npm run build

# Exponemos el puerto que usa Nest.js
EXPOSE 3000

# Comando para producción
CMD ["npm", "run", "start:prod"]
