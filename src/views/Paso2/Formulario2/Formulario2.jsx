import "./css/Formulario2.css";
import { Link } from "react-router-dom";
import { useState } from "react";

export const Formulario2 = () => {
  const [isChecked1, setIsChecked1] = useState(false);
  const [isChecked2, setIsChecked2] = useState(false);
  const [isChecked3, setIsChecked3] = useState(false);
  const [isChecked4, setIsChecked4] = useState(false);
  const [isChecked5, setIsChecked5] = useState(false);

  return (
    <form className="FormuCheck">
      <label htmlFor="check1">
        <input
          id="check1"
          type="checkbox"
          onChange={() => setIsChecked1(!isChecked1)}
        />
        ¿Padece alguna enfermedad?
        <div>
          {isChecked1 && (
            <textarea
              id="TextCheck1"
              className="TextCheck"
              placeholder="Indícanos qué enfermedad padeces."
              cols="40"
              rows="2"
            ></textarea>
          )}
        </div>
      </label>

      <label htmlFor="check2">
        <input
          id="check2"
          type="checkbox"
          onChange={() => setIsChecked2(!isChecked2)}
        />
        ¿Estás tomando algún medicamento?
        <div>
          {isChecked2 && (
            <textarea
              id="TextCheck2"
              className="TextCheck"
              placeholder="Indícanos qué medicamentos estás tomando."
              cols="40"
              rows="2"
            ></textarea>
          )}
        </div>
      </label>

      <label htmlFor="check3">
        <input
          id="check3"
          type="checkbox"
          onChange={() => setIsChecked3(!isChecked3)}
        />
        ¿Tienes alguna cirugía previa de nariz, ya sea funcional o estética?
        <div>
          {isChecked3 && (
            <textarea
              id="TextCheck3"
              className="TextCheck"
              placeholder="Indícanos hace cuánto tiempo se realizó la cirugía."
              cols="40"
              rows="2"
            ></textarea>
          )}
        </div>
      </label>

      <label htmlFor="check4">
        <input
          id="check4"
          type="checkbox"
          onChange={() => setIsChecked4(!isChecked4)}
        />
        ¿Te hiciste colocar biopolímeros (ácido Hialurónico) o hilos tensores?
        <div>
          {isChecked4 && (
            <textarea
              id="TextCheck4"
              className="TextCheck"
              placeholder="Indícanos hace cuánto tiempo."
              cols="40"
              rows="2"
            ></textarea>
          )}
        </div>
      </label>

      <label htmlFor="check5">
        <input
          id="check5"
          type="checkbox"
          onChange={() => setIsChecked5(!isChecked5)}
        />
        ¿Tienes dificultad para respirar por la nariz?
        <div>
          {isChecked5 && (
            <textarea
              id="TextCheck5"
              className="TextCheck"
              placeholder="Indícanos de cuál de las 2 fosas nasales."
              cols="40"
              rows="2"
            ></textarea>
          )}
        </div>
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
        <Link to="/tercer-paso" className="NextPage">
          Siguiente
        </Link>
      </div>
    </form>
  );
};
