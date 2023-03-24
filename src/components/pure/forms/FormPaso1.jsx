import React from "react";

const FormPaso1 = () => {
  return (
    <div>
      <form className="flex flex-col mx-auto gap-6">
        <div className="flex justify-between gap-4 max-sm:flex-col">
          <input
            className="text-dark-gray w-[45%] p-4 rounded-md text-[18px] max-sm:w-[100%] max-sm:text-[16px] outline-none"
            type="text"
            placeholder="Nombres"
          />
          <input
            className="text-dark-gray w-[45%] p-4 rounded-md max-sm:w-[100%] text-[18px] max-sm:text-[16px] outline-none"
            type="text"
            placeholder="Apellidos"
          />
        </div>

        <select
          className="text-gray-500 bg-white w-[100%] p-4 rounded-md text-[18px] max-sm:text-[16px]"
          name="genero"
          id="genero"
          defaultValue=""
        >
          <option value="">Género</option>
          <option value="hombre">Hombre</option>
          <option value="mujer">Mujer</option>
        </select>

        <select
          className="text-gray-500 bg-white w-[100%] p-4 rounded-md text-[18px] max-sm:text-[16px]"
          name="documento"
          id="documento"
          defaultValue=""
        >
          <option value="">Tipo de documento</option>
          <option value="boliviano">Boliviano CI</option>
          <option value="extranjero">Extranjero</option>
        </select>

        <input
          className="text-gray-500 bg-white w-[100%] p-4 rounded-md text-[18px] max-sm:text-[16px] outline-none"
          type="number"
          placeholder="Número de documento"
        />

        <label
          className="text-cream-white font-thin text-[18px] max-sm:text-[16px]"
          htmlFor="email"
        >
          <input
            className="text-gray-500 bg-white w-[100%] mb-2 p-4 rounded-md text-[18px] max-sm:text-[16px] outline-none placeholder:font-normal"
            id="email"
            type="email"
            placeholder="Ingresa tu mejor correo"
          />
          Escribe el correo que más utilices
        </label>

        <label
          className="text-cream-white font-thin text-[18px] max-sm:text-[16px]"
          htmlFor="telefono"
        >
          <input
            className="text-gray-500 bg-white w-[100%] mb-2 p-4 rounded-md text-[18px] max-sm:text-[16px] outline-none placeholder:font-normal"
            id="telefono"
            type="number"
            placeholder="+591 72941101"
          />
          Escribe tu número de teléfono
        </label>

        <label
          className="text-cream-white font-thin text-[18px] max-sm:text-[16px]"
          htmlFor="nacimiento"
        >
          <input
            className="text-gray-500 bg-white w-[100%] mb-2 p-4 rounded-md text-[18px] max-sm:text-[16px] outline-none"
            type="date"
            id="nacimiento"
          />
          Fecha de nacimiento
        </label>
      </form>
    </div>
  );
};

export default FormPaso1;
