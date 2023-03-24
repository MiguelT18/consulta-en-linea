import React, { useState } from "react";

const FormPaso2 = () => {
  const [isChecked, setIsChecked] = useState({});
  const [textareas, setTextareas] = useState({});

  function handleCheckbox(e) {
    const id = e.target.id;
    const checked = e.target.checked;
    setIsChecked({ ...isChecked, [id]: checked });
    if (!checked) {
      const { [id]: omit, ...rest } = textareas;
      setTextareas(rest);
    }
  }

  function handleTextareaChange(e) {
    setTextareas({ ...textareas, [e.target.id]: e.target.value });
  }

  return (
    <form className="grid justify-items-center pb-5">
      <div className="grid gap-8 w-[100%]">
        <label
          htmlFor="enfermedad"
          className="text-white font-normal text-[18px] max-sm:text-[16px]"
        >
          <input
            className="mr-3 h-5 w-5 accent-white"
            type="checkbox"
            id="enfermedad"
            checked={isChecked.enfermedad || false}
            onChange={handleCheckbox}
          />
          ¿Padece de alguna enfermedad?
        </label>
        {isChecked.enfermedad && (
          <textarea
            className="bg-dark-blue border-2 border-white placeholder:text-cream-blue block w-[80%] text-[18px] rounded p-4 ml-8 max-sm:ml-0 max-md:text-[16px] resize-none focus:outline-none text-white"
            placeholder="Qué enfermedad(es) padeces..."
            id="enfermedad"
            rows={5}
            cols={30}
            value={textareas.enfermedad || ""}
            onChange={handleTextareaChange}
          />
        )}

        <label
          htmlFor="medicamento"
          className="text-white font-normal text-[18px] max-sm:text-[16px]"
        >
          <input
            className="mr-3 h-5 w-5 accent-white"
            type="checkbox"
            id="medicamento"
            checked={isChecked.medicamento || false}
            onChange={handleCheckbox}
          />
          ¿Estás tomando algún medicamento?
        </label>
        {isChecked.medicamento && (
          <textarea
            className="bg-dark-blue border-2 border-white placeholder:text-cream-blue block w-[80%] text-[18px] rounded p-4 ml-8 max-sm:ml-0 max-md:text-[16px] resize-none focus:outline-none text-white"
            placeholder="Qué medicamento(s) tomas..."
            id="medicamento"
            rows={5}
            cols={30}
            value={textareas.medicamento || ""}
            onChange={handleTextareaChange}
          />
        )}

        <label
          htmlFor="cirugia"
          className="text-white font-normal text-[18px] max-sm:text-[16px]"
        >
          <input
            className="mr-3 h-5 w-5 accent-white"
            type="checkbox"
            id="cirugia"
            checked={isChecked.cirugia || false}
            onChange={handleCheckbox}
          />
          ¿Tienes alguna cirugía previa de nariz, ya sea funcional o estética?
        </label>
        {isChecked.cirugia && (
          <textarea
            className="bg-dark-blue border-2 border-white placeholder:text-cream-blue block w-[80%] text-[18px] rounded p-4 ml-8 max-sm:ml-0 max-md:text-[16px] resize-none focus:outline-none text-white"
            placeholder="Comenta aquí..."
            id="cirugia"
            rows={5}
            cols={30}
            value={textareas.cirugia || ""}
            onChange={handleTextareaChange}
          />
        )}

        <label
          htmlFor="dificultades"
          className="text-white font-normal text-[18px] max-sm:text-[16px]"
        >
          <input
            className="mr-3 h-5 w-5 accent-white"
            type="checkbox"
            id="dificultades"
            checked={isChecked.dificultades || false}
            onChange={handleCheckbox}
          />
          ¿Tienes alguna dificultad para respirar por la nariz?
        </label>
        {isChecked.dificultades && (
          <textarea
            className="bg-dark-blue border-2 border-white placeholder:text-cream-blue block w-[80%] text-[18px] rounded p-4 ml-8 max-sm:ml-0 max-md:text-[16px] resize-none focus:outline-none text-white"
            placeholder="Qué dificultad(es) padeces..."
            id="dificultades"
            rows={5}
            cols={30}
            value={textareas.dificultades || ""}
            onChange={handleTextareaChange}
          />
        )}
      </div>

      <hr className="w-[100%] border-t-2 border-cream-blue mt-10" />

      <label
        htmlFor=""
        className="grid mt-8 text-white text-[18px] max-sm:text-[16px] justify-items-center w-[100%] text-center"
      >
        ¿Qué es lo que más te molesta de tu nariz?
        <textarea
          className="mt-4 w-[90%] placeholder:text-light-blue rounded resize-none focus:outline-none p-3 text-black"
          cols="30"
          rows="5"
          placeholder="Describa brevemente... (90 caracteres máximo)"
        ></textarea>
      </label>
    </form>
  );
};

export default FormPaso2;
