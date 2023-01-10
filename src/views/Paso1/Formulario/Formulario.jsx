import "./css/Formulario.css";
import Pikaday from "pikaday";

export const Formulario = () => {
  return (
    <form>
      <input type="text" placeholder="Nombres" />
      <input type="text" placeholder="Apellidos" />
      <select>
        <option disabled selected>
          Género
        </option>
        <option value="masculino">Masculino</option>
        <option value="femenino">Femenino</option>
      </select>
      <select>
        <option disabled selected>
          Tipo de documento
        </option>
        <option value="extranjero">Extranjero (pasaporte)</option>
        <option value="nacional">Boliviano (CI)</option>
      </select>

      <p>
        Indique un correo electrónico que use con frecuencia, todas las
        notificaciones serán enviadas al mismo. De preferencia utilice un correo
        electrónico Gmail. También coloca tu número de celular.
      </p>

      <input type="email" placeholder="Ingresa tu correo electrónico" />
      <input type="number" placeholder="+591 72941101" />
      <p>Fecha de Nacimiento</p>
    </form>
  );
};
