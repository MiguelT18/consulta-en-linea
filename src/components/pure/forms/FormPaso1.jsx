import React, { useState, useEffect } from "react";
import FormButtons from "../../pure/FormButtons";

const FormPaso1 = () => {
  // ESTADOS DEL COMPONENTE

  // Countries Selector
  const [paises, setPaises] = useState([]);
  const [paisSeleccionado, setPaisSeleccionado] = useState("");

  useEffect(() => {
    async function fetchPaises() {
      const response = await fetch("https://restcountries.com/v2/all");
      const data = await response.json();
      setPaises(data);
    }
    fetchPaises();
  }, []);

  function handlePaisSeleccionado(event) {
    setPaisSeleccionado(event.target.value);
  }

  //! ERRORES
  // Datos del formulario
  const [formData, setFormData] = useState({
    nombres: "",
    apellidos: "",
    genero: "",
    documento: "",
    numDocumento: "",
    correo: "",
    telefono: "",
    fechaNacimiento: "",
    pais: "",
  });

  const [formErrors, setFormErrors] = useState({});

  //? Manejo de la validación de errores
  const handleValidation = () => {
    let errors = {};
    let formIsValid = true;

    //? Manejo de Errores
    const validations = {
      nombres: "Por favor ingrese sus nombres",
      apellidos: "Por favor ingrese sus apellidos",
      genero: "Por favor seleccione su género",
      documento: "Por favor seleccione su tipo de documento",
      numDocumento: "Por favor ingrese su número de documento",
      correo: "Por favor ingrese su correo",
      telefono: "Por favor ingrese su número de teléfono",
      fechaNacimiento: "Por favor seleccione su fecha de nacimiento",
      pais: "Por favor seleccione el país en donde vive",
    };

    for (const field in validations) {
      switch (field) {
        case "nombres":
        case "apellidos":
        case "correo":
          if (!formData[field].trim()) {
            formIsValid = false;
            errors[field] = validations[field];
          }
          break;
        case "genero":
        case "documento":
        case "fechaNacimiento":
        case "pais":
          if (!formData[field]) {
            formIsValid = false;
            errors[field] = validations[field];
          }
          break;
        case "numDocumento":
        case "telefono":
          if (!formData[field].match(/^[0-9]+$/)) {
            formIsValid = false;
            errors[field] = "Por favor ingrese un valor numérico";
          } else if (formData[field].length < 7) {
            formIsValid = false;
            errors[field] = "Por favor ingrese un valor válido";
          }
          break;
      }
    }

    setFormErrors(errors);
    return formIsValid;
  };

  //? Bandera de validación de errores
  const handleSubmit = () => {
    handleValidation();
    // if (handleValidation()) { // Base de datos
    //   // Enviar formulario - Base de datos
    // }
  };

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

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
              value={formData.nombres}
              onChange={handleChange}
              required
            />
            {formErrors.nombres && (
              <span className="text-red-500 font-semibold">
                {formErrors.nombres}
              </span>
            )}
          </div>
          <div className="w-[45%] max-sm:w-full">
            <input
              className="text-dark-gray w-[100%] p-4 rounded-md max-sm:w-[100%] text-[18px] max-sm:text-[16px] outline-none mb-2"
              type="text"
              placeholder="Apellidos"
              name="apellidos"
              value={formData.apellidos}
              onChange={handleChange}
              required
            />
            {formErrors.apellidos && (
              <span className="text-red-500 font-semibold">
                {formErrors.apellidos}
              </span>
            )}
          </div>
        </div>
        <div>
          <select
            className="text-gray-500 bg-white w-[100%] p-4 rounded-md text-[18px] mb-2 max-sm:text-[16px]"
            name="genero"
            id="genero"
            value={formData.genero}
            onChange={handleChange}
            required
          >
            <option value="">Género</option>
            <option value="hombre">Hombre</option>
            <option value="mujer">Mujer</option>
          </select>
          {formErrors.genero && (
            <span className="text-red-500 font-semibold">
              {formErrors.genero}
            </span>
          )}
        </div>
        <div>
          <select
            className="text-gray-500 bg-white w-[100%] p-4 rounded-md text-[18px] mb-2 max-sm:text-[16px]"
            name="documento"
            id="documento"
            value={formData.documento}
            onChange={handleChange}
            required
          >
            <option value="">Tipo de documento</option>
            <option value="boliviano">Boliviano CI</option>
            <option value="extranjero">Extranjero</option>
          </select>
          {formErrors.documento && (
            <span className="text-red-500 font-semibold">
              {formErrors.documento}
            </span>
          )}
        </div>
        <div>
          <input
            className="text-gray-500 bg-white w-[100%] p-4 rounded-md text-[18px] mb-2 max-sm:text-[16px] outline-none"
            type="number"
            placeholder="Número de documento"
            name="numDocumento"
            value={formData.numDocumento}
            onChange={handleChange}
            required
          />
          {formErrors.numDocumento && (
            <span className="text-red-500 font-semibold">
              {formErrors.numDocumento}
            </span>
          )}
        </div>
        <label
          className="text-cream-white font-thin text-[18px] max-sm:text-[16px]"
          htmlFor="email"
        >
          <div className="mb-2">
            <input
              className="text-gray-500 bg-white w-[100%] p-4 rounded-md text-[18px] max-sm:text-[16px] outline-none placeholder:font-normal"
              id="email"
              type="email"
              placeholder="Ingresa tu mejor correo"
              name="correo"
              value={formData.correo}
              onChange={handleChange}
              required
            />
            {formErrors.correo && (
              <span className="text-red-500 font-semibold text-base">
                {formErrors.correo}
              </span>
            )}
          </div>
          Escribe el correo que más utilices
        </label>
        <label
          className="text-cream-white font-thin text-[18px] max-sm:text-[16px]"
          htmlFor="telefono"
        >
          <div className="mb-2">
            <input
              className="text-gray-500 bg-white w-[100%] p-4 rounded-md text-[18px] max-sm:text-[16px] outline-none placeholder:font-normal"
              id="telefono"
              type="number"
              placeholder="+591 72941101"
              name="telefono"
              value={formData.telefono}
              onChange={handleChange}
              required
            />
            {formErrors.telefono && (
              <span className="text-red-500 font-semibold text-base">
                {formErrors.telefono}
              </span>
            )}
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
              value={formData.fechaNacimiento}
              onChange={handleChange}
              required
            />
            {formErrors.fechaNacimiento && (
              <span className="text-red-500 font-semibold text-base">
                {formErrors.fechaNacimiento}
              </span>
            )}
          </div>
          Fecha de nacimiento
        </label>

        <label
          className="text-cream-white font-thin text-[18px] max-sm:text-[16px]"
          htmlFor="pais"
        >
          <select
            className="text-gray-500 bg-white w-[100%] p-4 rounded-md text-[18px]
        mb-2 max-sm:text-[16px] font-normal"
            id="pais"
            value={paisSeleccionado}
            onChange={(e) => setPaisSeleccionado(e.target.value)}
          >
            <option value="">Seleccionar país</option>
            {paises.map((pais) => (
              <option
                key={pais.alpha2Code}
                value={pais.name}
                style={{
                  backgroundImage: `url(${pais.flag})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "contain",
                  paddingLeft: "20px",
                }}
              >
                {pais.name}
              </option>
            ))}
          </select>
          País
        </label>
        <FormButtons next="/paso2" back="/" buttonClick={handleSubmit} />
      </form>
    </div>
  );
};

export default FormPaso1;
