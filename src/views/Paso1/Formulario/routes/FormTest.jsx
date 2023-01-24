import "../css/Formulario.css";
import React from "react";

export const FormTest = () => {
  return (
    <form
      className="FormularioContainer"
      action="http://localhost:3000/users"
      method="post"
    >
      <div className="Nombres-Apellidos">
        <input
          className="Nombres"
          type="text"
          placeholder="Nombres"
          name="nombre"
          id="txtNombre"
        />
        <input
          className="Nombres"
          type="text"
          placeholder="Apellidos"
          name="apellido"
          id="txtApellido"
        />
      </div>

      <div className="Correo-Celular">
        <p>
          Indique un correo electrónico que use con frecuencia, todas las
          notificaciones serán enviadas al mismo. De preferencia utilice un
          correo Gmail. No te olvides de colocar tu número de celular.
        </p>
        <input
          type="email"
          placeholder="Ingresa tu mejor correo"
          name="email"
          id="txtEmail"
        />
        <input
          type="password"
          placeholder="Contrasenha"
          name="contrasenha"
          id="txtContrasenha"
        />
        <input
          type="text"
          placeholder="Nombre de usuario"
          name="usuario"
          id="txtUsuario"
        />
      </div>

      <div className="Botones">
        <button type="submit">Guardar</button>
      </div>
    </form>
  );
};
