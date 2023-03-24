import React from "react";
import { NavLink } from "react-router-dom";
// FONTAWESOME
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const FormButtons = ({ back, next }) => {
  return (
    <div className="mx-auto py-10 flex items-center justify-between">
      <NavLink
        className="text-white hover:underline text-[18px] max-md:text-[16px]"
        to={back}
      >
        Atrás
      </NavLink>
      <NavLink to={next}>
        <button className="bg-light-blue hover:bg-hover-light-blue text-white">
          CONTINUAR
        </button>
      </NavLink>
    </div>
  );
};

export default FormButtons;
