import "./css/Formulario2.css";
import { Link } from "react-router-dom";
import { useState } from "react";

export const Formulario2 = () => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <form className="FormuCheck">
      <label htmlFor="check1">
        <input
          id="check1"
          type="checkbox"
          onChange={() => setIsChecked(!isChecked)}
        />
        ¿Padece alguna enfermedad?
      </label>
      {isChecked && (
        <textarea
          id="TextCheck1"
          className="TextCheck1"
          placeholder="Indícanos qué enfermedad padeces..."
          cols="40"
          rows="1"
        ></textarea>
      )}

      <label htmlFor="check2">
        <input id="check2" type="checkbox" />
        ¿Estás tomando algún medicamento?
      </label>

      <label htmlFor="check3">
        <input id="check3" type="checkbox" />
        ¿Tienes alguna cirugía previa de nariz, ya sea funcional o estética?
      </label>

      <label htmlFor="check4">
        <input id="check4" type="checkbox" />
        ¿Te hiciste colocar biopolímeros (ácido Hialurónico) o hilos tensores?
      </label>

      <label htmlFor="check5">
        <input id="check5" type="checkbox" />
        ¿Tienes dificultad para respirar por la nariz?
      </label>

      <p>¿Qué es lo que más te molesta de tu nariz?</p>
      <textarea
        className="TextArea"
        placeholder="Escribe aquí lo que más te molesta de tu nariz"
        cols="30"
        rows="2"
      ></textarea>
      <p>0 of 90 max characters.</p>

      <div className="MainButtons">
        <Link className="BackPage" to="/primer-paso">
          <span></span>
          Atrás
        </Link>
        <Link className="NextPage">Siguiente</Link>
      </div>
    </form>
  );
};
