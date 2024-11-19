import React from "react";
import clsx from "clsx";
import "./StyledButton.css"; // Asegúrate de tener este archivo CSS para los estilos

const StyledButton = ({ isActive, isDisabled, size }) => {
  const buttonClass = clsx(
    "button", // Clase base
    {
      "button-active": isActive, // Clase activa si isActive es true
      "button-disabled": isDisabled, // Clase deshabilitada si isDisabled es true
      "button-large": size === "large", // Clase grande si size es 'large'
      "button-small": size === "small", // Clase pequeña si size es 'small'
    }
  );

  return (
    <button className={buttonClass} disabled={isDisabled}>
      {isActive ? "Activo" : "Inactivo"}
    </button>
  );
};

export default StyledButton;
