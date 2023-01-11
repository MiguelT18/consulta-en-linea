import "./css/Formulario.css";

export const Formulario = () => {
  return (
    <form className="FormularioContainer">
      <div className="Nombres-Apellidos">
        <input type="text" placeholder="Nombres" />
        <input type="text" placeholder="Apellidos" />
      </div>

      <select>
        <option disabled selected>
          Género
        </option>
        <option value="masculino">Masculino</option>
        <option value="femenimo">Femenino</option>
      </select>

      <select>
        <option disabled selected>
          Tipo de documento
        </option>
        <option value="extranjero">Extranjero (pasaporte)</option>
        <option value="nacional">Boliviano (CI)</option>
      </select>

      <input type="number" placeholder="Número de documento" />

      <div className="Correo-Celular">
        <p>
          Indique un correo electrónico que use con frecuencia, todas las
          notificaciones serán enviadas al mismo. De preferencia utilice un
          correo Gmail. No te olvide de color tu número de celular.
        </p>
        <input type="email" placeholder="Ingresa tu mejor correo" />
        <input type="number" placeholder="+591 72941101" />
      </div>

      <p>Fecha de nacimiento</p>
      <input type="date" id="nacimiento" name="nacimiento" />
    </form>
  );
};
