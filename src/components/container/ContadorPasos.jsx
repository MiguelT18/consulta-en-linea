import React from "react";
import { NavLink } from "react-router-dom";

const ContadorPasos = () => {
  return (
    <div className="w-[80%] pb-6 mx-auto">
      <h1 className="text-white text-center pt-4">Datos Personales</h1>
      <p className="text-cream-blue text-center">
        En este paso deberás proporcionar tus datos personales
      </p>

      <ul className="mx-auto flex justify-center border-y-2 rounded-sm py-4 mt-6 gap-12 max-md:gap-8 max-sm:gap-3">
        <li className="drop-shadow-xl active:scale-90">
          <NavLink
            className="counter-buttons"
            style={({ isActive }) => ({
              color: isActive ? "#fff" : "#3e3e3e",
              backgroundColor: isActive ? "#6EA7D6" : "#fff",
            })}
            to="/paso1"
          >
            1
          </NavLink>
        </li>
        <li className="drop-shadow-xl active:scale-90">
          <NavLink
            className="counter-buttons"
            style={({ isActive }) => ({
              color: isActive ? "#fff" : "#3e3e3e",
              backgroundColor: isActive ? "#6EA7D6" : "#fff",
            })}
            to="/paso2"
          >
            2
          </NavLink>
        </li>
        <li className="drop-shadow-xl active:scale-90">
          <NavLink
            className="counter-buttons"
            style={({ isActive }) => ({
              color: isActive ? "#fff" : "#3e3e3e",
              backgroundColor: isActive ? "#6EA7D6" : "#fff",
            })}
            to="/paso3"
          >
            3
          </NavLink>
        </li>
        <li className="drop-shadow-xl active:scale-90">
          <NavLink
            className="counter-buttons"
            style={({ isActive }) => ({
              color: isActive ? "#fff" : "#3e3e3e",
              backgroundColor: isActive ? "#6EA7D6" : "#fff",
            })}
            to="/paso4"
          >
            4
          </NavLink>
        </li>
        <li className="drop-shadow-xl active:scale-90">
          <NavLink
            className="counter-buttons"
            style={({ isActive }) => ({
              color: isActive ? "#fff" : "#3e3e3e",
              backgroundColor: isActive ? "#6EA7D6" : "#fff",
            })}
            to="/paso5"
          >
            5
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default ContadorPasos;
