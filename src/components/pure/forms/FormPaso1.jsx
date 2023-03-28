import React, { useState } from "react";
import FormButtons from "../../pure/FormButtons";

const FormPaso1 = () => {
  const [formData, setFormData] = useState({
    nombres: "",
    apellidos: "",
    genero: "",
    documento: "",
    numDocumento: "",
    correo: "",
    telefono: "",
    fechaNacimiento: "",
  });

  const [formErrors, setFormErrors] = useState({});

  const handleValidation = () => {
    let errors = {};
    let formIsValid = true;

    // Validar nombres
    if (!formData.nombres) {
      formIsValid = false;
      errors.nombres = "Por favor ingrese sus nombres";
    }

    // Validar apellidos
    if (!formData.apellidos) {
      formIsValid = false;
      errors.apellidos = "Por favor ingrese sus apellidos";
    }

    // Validar género
    if (!formData.genero) {
      formIsValid = false;
      errors.genero = "Por favor seleccione su género";
    }

    // Validar tipo de documento
    if (!formData.documento) {
      formIsValid = false;
      errors.documento = "Por favor seleccione su tipo de documento";
    }

    // Validar número de documento
    if (!formData.numeroDocumento) {
      formIsValid = false;
      errors.numeroDocumento = "Por favor ingrese su número de documento";
    }

    // Validar correo
    if (!formData.correo) {
      formIsValid = false;
      errors.correo = "Por favor ingrese su correo";
    }

    // Validar teléfono
    if (!formData.telefono) {
      formIsValid = false;
      errors.telefono = "Por favor ingrese su número de teléfono";
    }

    // Validar fecha de nacimiento
    if (!formData.fechaNacimiento) {
      formIsValid = false;
      errors.fechaNacimiento = "Por favor seleccione su fecha de nacimiento";
    }

    // Validar País
    if (!formData.pais) {
      formIsValid = false;
      errors.pais = "Por favor seleccione el país en donde vive";
    }

    setFormErrors(errors);
    return formIsValid;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (handleValidation()) {
      // Enviar formulario
    }
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
            defaultValue=""
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
            defaultValue=""
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
            name="numeroDocumento"
            value={formData.numeroDocumento}
            onChange={handleChange}
            required
          />
          {formErrors.numeroDocumento && (
            <span className="text-red-500 font-semibold">
              {formErrors.numeroDocumento}
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
              className="text-gray-500 bg-white w-[100%] p-4 rounded-md text-[18px] max-sm:text-[16px] outline-none"
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

        <FormButtons buttonClick={handleSubmit} next="/paso2" back="/" />
      </form>
    </div>
  );
};

export default FormPaso1;
