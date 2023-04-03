import React, { useState, useEffect } from "react";
import FormButtons from "../../pure/FormButtons";
import { Link } from "react-router-dom";

const FormPaso1 = () => {
  // ESTADOS DEL COMPONENTE

  // Countries Selector
  const [paises, setPaises] = useState([]);
  const [paisSeleccionado, setPaisSeleccionado] = useState("");

  //! Errores
  const [errores, setErrores] = useState({
    nombres: "",
    apellidos: "",
    documento: "",
    numDocumento: "",
    correo: "",
    telefeno: "",
    nacimiento: "",
    pais: "",
  });

  //! Validación de errores
  const handleChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case "nombres":
        if (value.length < 3) {
          setErrores((prevState) => ({
            ...prevState,
            nombres: "El nombre debe tener al menos 3 caracteres",
          }));
        } else {
          setErrores((prevState) => ({
            ...prevState,
            nombres: "",
          }));
        }
        break;
      case "apellidos":
        if (value.length < 3) {
          setErrores((prevState) => ({
            ...prevState,
            nombres: "El apellido debe tener al menos 3 caracteres",
          }));
        } else {
          setErrores((prevState) => ({
            ...prevState,
            nombres: "",
          }));
        }

      default:
        break;
    }
  };

  //! Manejador de formulario
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  // Llamado a la API de restcountries
  useEffect(() => {
    async function fetchPaises() {
      const response = await fetch("https://restcountries.com/v2/all");
      const data = await response.json();
      setPaises(data);
    }
    fetchPaises();
  }, []);

  return (
    <div>
      <form className="flex flex-col mx-auto gap-6" onSubmit={handleSubmit}>
        <div className="flex justify-between gap-4 max-sm:flex-col">
          <div className="w-[45%] max-sm:w-full">
            <input
              className="text-dark-gray w-[100%] flex p-4 rounded-md text-[18px] max-sm:w-[100%] max-sm:text-[16px] outline-none mb-2"
              type="text"
              placeholder="Nombres"
              name="nombres"
              onChange={handleChange}
            />
            {errores.nombres && (
              <span className="text-red-500">{errores.nombres}</span>
            )}
          </div>
          <div className="w-[45%] max-sm:w-full">
            <input
              className="text-dark-gray w-[100%] p-4 rounded-md max-sm:w-[100%] text-[18px] max-sm:text-[16px] outline-none mb-2"
              type="text"
              placeholder="Apellidos"
              name="apellidos"
              onChange={handleChange}
            />
            {errores.apellidos && (
              <span className="text-red-500">{errores.apellidos}</span>
            )}
          </div>
        </div>
        <div>
          <select
            className="text-gray-500 bg-white w-[100%] p-4 rounded-md text-[18px] mb-2 max-sm:text-[16px]"
            name="genero"
            id="genero"
          >
            <option value="">Género</option>
            <option value="hombre">Hombre</option>
            <option value="mujer">Mujer</option>
          </select>
        </div>
        <div>
          <select
            className="text-gray-500 bg-white w-[100%] p-4 rounded-md text-[18px] mb-2 max-sm:text-[16px]"
            name="documento"
            id="documento"
          >
            <option value="">Tipo de documento</option>
            <option value="boliviano">Boliviano CI</option>
            <option value="extranjero">Extranjero</option>
          </select>
        </div>
        <div>
          <input
            className="text-gray-500 bg-white w-[100%] p-4 rounded-md text-[18px] mb-2 max-sm:text-[16px] outline-none"
            type="number"
            placeholder="Número de documento"
            name="numDocumento"
          />
        </div>
        <label
          className="text-cream-white font-thin text-[18px] max-sm:text-[16px]"
          htmlFor="email"
        >
          <div className="mb-2">
            <input
              className="text-gray-500 bg-white w-[100%] font-normal p-4 rounded-md text-[18px] max-sm:text-[16px] outline-none placeholder:font-normal"
              id="email"
              type="email"
              placeholder="Ingresa tu mejor correo"
              name="correo"
            />
          </div>
          Escribe el correo que más utilices
        </label>
        <label
          className="text-cream-white font-thin text-[18px] max-sm:text-[16px]"
          htmlFor="telefono"
        >
          <div className="mb-2">
            <input
              className="text-gray-500 bg-white w-[100%] font-normal p-4 rounded-md text-[18px] max-sm:text-[16px] outline-none placeholder:font-normal"
              id="telefono"
              type="number"
              placeholder="+591 72941101"
              name="telefono"
            />
          </div>
          Escribe tu número de teléfono
        </label>
        <label
          className="text-cream-white font-thin text-[18px] max-sm:text-[16px]"
          htmlFor="nacimiento"
        >
          <div className="mb-2">
            <input
              className="text-gray-500 bg-white w-[100%] p-4 rounded-md text-[18px] max-sm:text-[16px] outline-none font-normal"
              type="date"
              id="nacimiento"
              name="nacimiento"
            />
          </div>
          Fecha de nacimiento
        </label>

        <label
          className="text-cream-white font-thin text-[18px] max-sm:text-[16px]"
          htmlFor="pais"
        >
          <select
            className="text-gray-500 bg-white w-[100%] p-4 rounded-md text-[18px] mb-2 max-sm:text-[16px] font-normal"
            id="pais"
            value={paisSeleccionado}
            onChange={(e) => setPaisSeleccionado(e.target.value)}
          >
            <option value="">Seleccionar país</option>
            {paises.map((pais) => (
              <option key={pais.alpha2Code} value={pais.name}>
                {pais.name}
              </option>
            ))}
          </select>
          País
        </label>
        <button
          type="submit"
          className="bg-light-blue hover:bg-hover-light-blue text-white"
        >
          Continuar
        </button>
        {/* <FormButtons next="/paso2" back="/" /> */}
      </form>
    </div>
  );
};

export default FormPaso1;
// bg-light-blue hover:bg-hover-light-blue text-white
