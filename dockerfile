# Establece la imagen base
FROM node:18-alpine

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia los archivos de la aplicación al contenedor
COPY . .


# Instala las dependencias de la aplicación
RUN npm install 

# Compila la aplicación
RUN npm run build

# Expone el puerto en el que se ejecutará la aplicación
EXPOSE 8000

# Establece el comando para iniciar la aplicación
CMD [ "node", "dist/main" ]