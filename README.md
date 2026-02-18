
<body class="stackedit">
  <div class="stackedit__html"><h1 id="🚀-red-social-full-stack-arquitectura-de-microservicios">🚀 Red Social Full Stack (Arquitectura de Microservicios)</h1>
<p>Plataforma web tipo red social desarrollada bajo una <strong>arquitectura de microservicios</strong>, permitiendo autenticación segura de usuarios, creación de publicaciones y visualización de contenido en tiempo real.</p>
<p>Este proyecto fue desarrollado como <strong>prueba técnica</strong> para demostrar dominio en entornos dockerizados, integración de APIs REST y uso de tecnologías modernas de desarrollo.</p>
<p>👨‍💻 Mi rol fue <strong>Full Stack Developer</strong>, siendo responsable del diseño de microservicios, modelado de base de datos, autenticación con JWT, integración frontend-backend y configuración completa del entorno Docker.</p>
<hr>
<h1 id="📌-características-principales">📌 Características Principales</h1>
<ul>
<li>🔐 Autenticación segura con JWT</li>
<li>🔑 Inicio de sesión con validación de credenciales</li>
<li>📝 Creación de publicaciones (con imagen opcional)</li>
<li>📰 Feed social dinámico</li>
<li>🌱 Seeder automático con usuarios de prueba</li>
<li>🧩 Arquitectura desacoplada por microservicios</li>
<li>🐳 Entorno completamente dockerizado</li>
</ul>
<hr>
<h1 id="🏗-arquitectura-del-sistema">🏗 Arquitectura del Sistema</h1>
<p>El sistema está compuesto por:</p>
<ul>
<li>📦 <strong>Backend</strong> → API REST desarrollada en NestJS</li>
<li>🎨 <strong>Frontend</strong> → Cliente web en React + MUI</li>
<li>🗄 <strong>Base de Datos</strong> → PostgreSQL</li>
</ul>
<p>Cada servicio corre en un contenedor independiente y se comunica mediante una red interna configurada con Docker Compose.</p>
<hr>
<h1 id="🚀-tecnologías-utilizadas">🚀 Tecnologías Utilizadas</h1>
<h2 id="🧠-backend">🧠 Backend</h2>
<ul>
<li>Node.js</li>
<li>NestJS</li>
<li>TypeORM</li>
<li>PostgreSQL</li>
<li>JWT</li>
<li>Docker</li>
</ul>
<h2 id="🎨-frontend">🎨 Frontend</h2>
<ul>
<li>React</li>
<li>Material UI (MUI)</li>
<li>Hooks (useState, useEffect)</li>
<li>Fetch API</li>
</ul>
<h2 id="🐳-infraestructura">🐳 Infraestructura</h2>
<ul>
<li>Docker</li>
<li>Docker Compose</li>
<li>Variables de entorno (.env)</li>
<li>Seeder automático</li>
</ul>
<hr>
<h1 id="🔐-seguridad">🔐 Seguridad</h1>
<ul>
<li>✔ Autenticación basada en JWT</li>
<li>✔ Tokens firmados</li>
<li>✔ Protección de rutas privadas</li>
<li>✔ Manejo de sesiones stateless</li>
<li>✔ Validación de credenciales en backend</li>
</ul>
<hr>
<h1 id="📂-estructura-del-proyecto">📂 Estructura del Proyecto</h1>
<pre class=" language-bash"><code class="prism  language-bash">social-media/
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
<span class="token comment"># 🧪 Requisitos</span>

-   Docker
    
-   Docker Compose
    

✅ No es necesario instalar dependencias manualmente si se usa Docker.

<span class="token comment"># 🧪 Requisitos</span>

-   Docker
    
-   Docker Compose
    

✅ No es necesario instalar dependencias manualmente si se usa Docker.
<span class="token comment"># ⚙️ Instalación</span>

<span class="token comment">## 1️⃣ Clonar el repositorio</span>
<span class="token function">git</span> clone https://github.com/tuusuario/social-media.git
<span class="token function">cd</span> social-media

2️⃣ Levantar los contenedores
docker-compose up --build

Esto iniciará:

-   Backend → <span class="token punctuation">[</span>http://localhost:3000<span class="token punctuation">]</span><span class="token punctuation">(</span>http://localhost:3000<span class="token punctuation">)</span>
    
-   Frontend → <span class="token punctuation">[</span>http://localhost:5173<span class="token punctuation">]</span><span class="token punctuation">(</span>http://localhost:5173<span class="token punctuation">)</span>
    
-   PostgreSQL <span class="token punctuation">(</span>interno en Docker<span class="token punctuation">)</span>
    

----------

<span class="token comment"># 🌐 Acceso</span>

Frontend:  
👉 <span class="token punctuation">[</span>http://localhost:5173<span class="token punctuation">]</span><span class="token punctuation">(</span>http://localhost:5173<span class="token punctuation">)</span>

Backend API:  
👉 <span class="token punctuation">[</span>http://localhost:3000<span class="token punctuation">]</span><span class="token punctuation">(</span>http://localhost:3000<span class="token punctuation">)</span>

----------

<span class="token comment"># 👥 Usuarios de Prueba</span>

El sistema incluye un seeder automático con los siguientes usuarios:

<span class="token operator">|</span> Usuario   <span class="token operator">|</span> Contraseña <span class="token operator">|</span>
<span class="token operator">|</span>------------<span class="token operator">|</span>------------<span class="token operator">|</span>
<span class="token operator">|</span> alice      <span class="token operator">|</span> 1234       <span class="token operator">|</span>
<span class="token operator">|</span> bob        <span class="token operator">|</span> 1234       <span class="token operator">|</span>
<span class="token operator">|</span> charlie    <span class="token operator">|</span> 1234       <span class="token operator">|</span>
<span class="token operator">|</span> david      <span class="token operator">|</span> 1234       <span class="token operator">|</span>
<span class="token operator">|</span> eva        <span class="token operator">|</span> 1234       <span class="token operator">|</span>


----------

<span class="token comment"># 🌐 Endpoints Principales</span>
<span class="token operator">|</span> Método <span class="token operator">|</span> Endpoint              <span class="token operator">|</span> Descripción                <span class="token operator">|</span>
<span class="token operator">|</span>--------<span class="token operator">|</span>----------------------<span class="token operator">|</span>----------------------------<span class="token operator">|</span>
<span class="token operator">|</span> POST   <span class="token operator">|</span> /auth/login          <span class="token operator">|</span> Login de usuario           <span class="token operator">|</span>
<span class="token operator">|</span> GET    <span class="token operator">|</span> /auth/search/:id     <span class="token operator">|</span> Obtener usuario por ID     <span class="token operator">|</span>
<span class="token operator">|</span> GET    <span class="token operator">|</span> /auth/publications   <span class="token operator">|</span> Listar publicaciones       <span class="token operator">|</span>
<span class="token operator">|</span> POST   <span class="token operator">|</span> /auth/posts          <span class="token operator">|</span> Crear publicación          <span class="token operator">|</span>



Crear publicación
----------

<span class="token comment"># 🐳 Dockerización</span>

-   ✔ Backend aislado
    
-   ✔ Frontend en contenedor optimizado
    
-   ✔ Base de datos persistente
    
-   ✔ Comunicación interna entre servicios
    
-   ✔ Entorno reproducible
    

Preparado para despliegue en VPS o servicios cloud.

----------

<span class="token comment"># 🎯 Retos y Aprendizajes</span>

-   🔗 Integración completa Frontend + Backend
    
-   🐳 Orquestación con Docker Compose
    
-   💾 Modelado relacional con TypeORM
    
-   ⚛️ Manejo de estado en React
    
-   🔐 Implementación de autenticación stateless
    
-   🧩 Diseño de arquitectura desacoplada
    

----------

<span class="token comment"># 📈 Estado del Proyecto</span>

-   ✅ Autenticación funcional
    
-   ✅ Publicaciones dinámicas
    
-   ✅ Docker operativo
    
-   ✅ Seeder implementado
    
-   ✅ API REST funcional
    

----------

<span class="token comment"># 🚀 Mejoras Futuras</span>

-   ❤️ Likes y comentarios
    
-   🧑‍🤝‍🧑 Sistema de seguidores
    
-   🔔 Notificaciones
    
-   📱 Mejor diseño responsive
    
-   ☁️ Deploy en producción
    

----------

<span class="token comment"># 👨‍💻 Autor</span>

**Kevin Nicolás Beltrán Rivera**  
Desarrollador Full Stack Junior

🔗 LinkedIn  
💻 GitHub
</code></pre>
</div>
</body>
