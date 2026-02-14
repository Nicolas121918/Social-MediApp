---


---

<h1 id="section"></h1>
<pre><code>🚀 Red Social Full Stack (Arquitectura de Microservicios)

Plataforma web tipo red social desarrollada bajo una arquitectura de microservicios, permitiendo autenticación segura de usuarios, creación de publicaciones y visualización de contenido en tiempo real.

Este proyecto fue desarrollado como prueba técnica para demostrar dominio en entornos dockerizados, integración de APIs REST y uso de tecnologías modernas de desarrollo.

Mi rol dentro del proyecto fue **Full Stack Developer**, siendo responsable del diseño de microservicios, modelado de base de datos, autenticación con JWT, integración frontend-backend y configuración completa del entorno Docker.

---

# ⚙️ Funcionalidades

✔ Autenticación segura con JWT  
✔ Inicio de sesión con validación de credenciales  
✔ Creación de publicaciones con título e imagen opcional  
✔ Feed social con listado de publicaciones  
✔ Seeder automático para generación de datos de prueba  
✔ Arquitectura desacoplada por microservicios  

---

# 🏗 Arquitectura del Sistema

El ecosistema está compuesto por:

📦 Backend (Microservicio API - NestJS)  
📦 Frontend (Cliente Web - React + MUI)  
📦 Base de Datos PostgreSQL  

Cada servicio corre en un contenedor independiente y se comunica mediante red interna definida en Docker Compose.

---

# 🚀 Tecnologías

## Backend

- Node.js
- NestJS
- TypeORM
- PostgreSQL
- JWT
- Docker

## Frontend

- React
- Material-UI (MUI)
- Hooks (useState, useEffect)
- Fetch API

## Infraestructura

- Docker
- Docker Compose
- Seeder automático

---

# 🔐 Seguridad y Autenticación

✔ Login con JWT  
✔ Tokens firmados  
✔ Protección de rutas  
✔ Manejo de sesiones stateless  
✔ Validación de credenciales en backend  

---

# 📂 Estructura del Proyecto

```
social-media/
│── backend/
│   │── src/
│   │── seeder/
│   │── Dockerfile
│   │── .env
│
│── frontend/
│   │── src/
│   │── components/
│   │── pages/
│   │── Dockerfile
│
│── docker-compose.yml
│── README.md
```

---

# 🧪 Requisitos Previos

- Docker
- Docker Compose

(No se requiere instalación manual de dependencias si se usa Docker)

---

# ⚙️ Instalación

## 1️⃣ Clonar repositorio

```bash
git clone https://github.com/tuusuario/social-media.git
cd social-media
```

## 2️⃣ Levantar contenedores

```bash
docker-compose up --build
```

Esto construirá y levantará:

- Backend (Puerto 3000)
- Frontend (Puerto 5173)
- PostgreSQL

---

# 🌐 Acceso al Sistema

Frontend:  
http://localhost:5173  

Backend API:  
http://localhost:3000  

---

# 👥 Usuarios de Prueba (Seeder)

| Usuario   | Contraseña |
|-----------|------------|
| alice     | 1234       |
| bob       | 1234       |
| charlie   | 1234       |
| david     | 1234       |
| eva       | 1234       |

---

# 🌐 Endpoints Principales (API REST)

| Método | Endpoint              | Descripción              |
|--------|----------------------|--------------------------|
| POST   | /auth/login          | Login de usuario         |
| GET    | /auth/search/:id     | Obtener usuario por ID   |
| GET    | /auth/publications   | Listar publicaciones     |
| POST   | /auth/posts          | Crear publicación        |

---

# 🐳 Dockerización

✔ Backend aislado  
✔ Frontend optimizado  
✔ Base de datos persistente  
✔ Comunicación interna entre servicios  

La aplicación puede desplegarse fácilmente en VPS, servidores cloud o entornos CI/CD.

---

# 🎯 Retos y Aprendizajes

🔗 Integración Full Stack con APIs REST  
🐳 Orquestación de servicios con Docker Compose  
💾 Modelado de datos escalable con TypeORM  
⚛️ Manejo de estado en React  
🔐 Autenticación stateless con JWT  

---

# 🧠 Estado del Proyecto

✔ Autenticación funcional  
✔ Publicaciones dinámicas  
✔ Docker operativo  
✔ Seeder implementado  
✔ Arquitectura desacoplada  

---

# 👨‍💻 Autor

**Kevin Nicolás Beltrán Rivera**  
Desarrollador Full Stack Junior  

LinkedIn | GitHub
</code></pre>

