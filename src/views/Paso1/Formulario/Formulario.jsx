import "./css/Formulario.css";
import { Link } from "react-router-dom";
import countryList from "country-list-js";

export const Formulario = () => {
  const countries = Object.values(countryList.all);
  countries.sort((a, b) => a.name.localeCompare(b.name));

  return (
    <form className="FormularioContainer">
      <div className="Nombres-Apellidos">
        <input className="Nombres" type="text" placeholder="Nombres" />
        <input className="Nombres" type="text" placeholder="Apellidos" />
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
          correo Gmail. No te olvides de colocar tu número de celular.
        </p>
        <input type="email" placeholder="Ingresa tu mejor correo" />
        <input type="number" placeholder="+591 72941101" />
      </div>

      <p>Fecha de nacimiento:</p>
      <input type="date" />

      <select className="Pais">
        <option selected disabled>
          País
        </option>
        {countries.map((country) => (
          <option key={country.code} value={country.code}>
            {country.name}
          </option>
        ))}
      </select>

      <div className="Botones">
        <Link to="/" className="Atras">
          <span></span>
          Atrás
        </Link>
        <Link to="/segundo-paso" className="Siguiente">
          Siguiente
        </Link>
      </div>
    </form>
  );
};
