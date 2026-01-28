import  { useState } from "react";
import "./login.css";
import { useNavigate } from 'react-router-dom';


const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isFlipped, setIsFlipped] = useState(false);


  // Reset del formulario
  const resetForm = () => {
    setUsername("");
    setPassword("");
  };


  // Función para manejar el cambio de estado del flip
  const handleToggle = () => {
    setIsFlipped(!isFlipped);
  };

  // Función para manejar el registro
  const Registrarse = () => {
    fetch("http://localhost:3000/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    })
      .then(() => {
        alert("¡Registro exitoso!");
        resetForm();
      })
      .catch(() => {
        alert("Hubo un error al registrar");
      });
  }

  const iniciarsesion = () => {
    fetch("http://localhost:3000/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.accessToken) {
          localStorage.setItem("token", data.accessToken);
          localStorage.setItem("userId", data.user.id.toString());
          resetForm();
          navigate("/home");
          alert("¡Inicio de sesión exitoso!");
        } else {
          alert("Credenciales inválidas");
        }
      })
      .catch(() => {
        alert("Hubo un error al iniciar sesión");
      });
  }


  return (
    <div className="wrapper">
      <div className="card-switch">
        <label className="switch">
          <input
            type="checkbox"
            className="toggle"
            checked={isFlipped}
            onChange={handleToggle}
          />
          <span className="slider"></span>
          <span className="card-side"></span>
          <div className="flip-card__inner">
            <div className="flip-card__front">
              <div className="title">Iniciar sesion</div>
              <form className="flip-card__form" onSubmit={(e) => e.preventDefault()}>
                <input
                  className="flip-card__input"
                  name="name"
                  placeholder="Nombre de usuario"
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
                <input
                  className="flip-card__input"
                  name="password"
                  placeholder="Contraseña"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />

                <button onClick={iniciarsesion} className="flip-card__btn" type="submit">
                  Iniciar sesión
                </button>
              </form>
            </div>
            <div className="flip-card__back">
              <div className="title">Registrarse</div>
              <form className="flip-card__form" onSubmit={(e) => e.preventDefault()}>
                <input
                  className="flip-card__input"
                  name="name"
                  placeholder="Name"
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
                <input
                  className="flip-card__input"
                  name="password"
                  placeholder="Password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <button onClick={Registrarse} className="flip-card__btn" type="submit">
                  Registrarse
                </button>
              </form>
            </div>
          </div>
        </label>
      </div>
    </div>
  );
};

export default Login;
