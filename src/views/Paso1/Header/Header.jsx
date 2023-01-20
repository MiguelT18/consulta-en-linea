import React from "react";
import "./css/Header.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const Header = () => {
  const [activeStep, setActiveStep] = useState(1);
  const location = useLocation();

  const handleStepClick = (step) => {
    for (let i = 1; i <= step; i++) {
      setActiveStep(i);
    }
  };

  useEffect(() => {
    const step = location.pathname.split("/")[1];
    switch (step) {
      case "primer-paso":
        setActiveStep(1);
        break;
      case "segundo-paso":
        setActiveStep(2);
        break;
      case "tercer-paso":
        setActiveStep(3);
        break;
      case "pago-qr":
        setActiveStep(4);
        break;
      default:
        setActiveStep(1);
    }
  }, [location.pathname, setActiveStep]);

  return (
    <div className="HeaderFormulario">
      <h1>Datos Personales</h1>
      <h3>En este paso deberás proporcionar tus datos personales</h3>
      <ul>
        <Link to="/primer-paso" onClick={() => handleStepClick(1)}>
          <li className={`${activeStep === 1 ? "active" : ""}`}>1</li>
        </Link>

        <Link to="/segundo-paso" onClick={() => handleStepClick(2)}>
          <li className={`${activeStep === 2 ? "active" : ""}`}>2</li>
        </Link>

        <Link to="/tercer-paso" onClick={() => handleStepClick(3)}>
          <li className={`${activeStep === 3 ? "active" : ""}`}>3</li>
        </Link>

        <Link to="/pago-qr" onClick={() => handleStepClick(4)}>
          <li className={`${activeStep === 4 ? "active" : ""}`}>4</li>
        </Link>
      </ul>
    </div>
  );
};
export default Header;
