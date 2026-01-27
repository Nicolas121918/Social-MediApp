# 🚀 Red Social Full Stack

## 📖 Descripción

Este proyecto es una **red social básica** desarrollada con arquitectura de microservicios. Permite a los usuarios:

- 🔑 Iniciar sesión con usuario y contraseña.  
- 📝 Crear publicaciones con título y URL opcional.  
- 👀 Ver publicaciones de otros usuarios.  
- 🧪 Contar con datos iniciales mediante un **Seeder**.  

El proyecto fue desarrollado como **prueba técnica** para demostrar habilidades full stack y aprendizaje de nuevas tecnologías como Docker, NestJS y React.

---

## 🛠 Tecnologías utilizadas

**Backend:**

- NestJS  
- TypeORM (ORM para PostgreSQL)  
- PostgreSQL  
- JWT para autenticación  
- Docker para contenerización  

**Frontend:**

- React  
- Material-UI  
- React Hooks (`useState`, `useEffect`)  

**Extras:**

- Docker Compose para levantar todos los servicios  
- Seeder para crear usuarios y publicaciones de prueba  
- Manejo básico de estado y Fetch API para comunicación con el backend  

---

## ⚡ Instalación y ejecución

1. Clonar el repositorio:
2. 
git clone https://github.com/tuusuario/social-media.git
cd social-media


## Levantar todos los servicios Y reconstruccion con Docker Compose:
docker-compose up --build

Acceder al frontend en tu navegador:
http://localhost:5173


👥 Usuarios de prueba (Seeder)
Usuario	Contraseña
alice 	1234
bob	    1234
charlie	1234
david	  1234
eva	    1234


🌐 Endpoints principales (Backend)
Método	Endpoint	 Descripción	Body /   Params
POST	/auth/login	Login de usuario	{ username, password }
GET	/auth/search/:id	Obtener usuario por ID	Param: id
GET	/auth/publications	Listar publicaciones	-
POST	/auth/posts	Crear publicación	{ title, image_url, createdby }


🐳 Docker

La aplicación está totalmente dockerizada:

Backend: NestJS + TypeORM

Frontend: React + Material-UI

Base de datos: PostgreSQL

Gracias a Docker Compose, solo necesitas un comando para levantar toda la aplicación



🎯 Retos y aprendizajes

Durante el desarrollo se enfrentaron varios desafíos:

🔗 Integrar backend y frontend mediante APIs REST.

🐳 Aprender y aplicar Docker y Docker Compose para microservicios.

💾 Usar TypeORM como ORM, facilitando la gestión de la base de datos.

🧪 Implementar un Seeder para pruebas rápidas.

⚛️ Manejar estado y actualizaciones del frontend con React Hooks.

Este proyecto permitió consolidar conocimientos en nuevas tecnologías y buenas prácticas de desarrollo full stack.

👨‍💻 Autor
Kevin Nicolás Beltrán Rivera
Desarrollador Fullstack Junior
LinkedIn | GitHub



