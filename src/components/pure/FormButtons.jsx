import React from "react";
import { NavLink } from "react-router-dom";
// FONTAWESOME
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

const FormButtons = ({ back, next, disabled, buttonClick }) => {
  const handleNext = () => {
    if (!disabled) {
      buttonClick();
    }
  };

  return (
    <div className="w-[100%] mx-auto flex items-center justify-between">
      <NavLink
        className="text-white hover:underline text-[18px] max-md:text-[16px]"
        to={back}
      >
        ANTERIOR
      </NavLink>
      <NavLink to={next}>
        <button
          type="button"
          className="bg-light-blue hover:bg-hover-light-blue text-white "
          onClick={handleNext}
          disabled={disabled} // deshabilita el botón si no hay imagen subida
        >
          CONTINUAR <FontAwesomeIcon icon={faAngleRight} />
        </button>
      </NavLink>
    </div>
  );
};

export default FormButtons;
