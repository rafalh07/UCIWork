import React from "react";
import StyledButton from "./components/StyledButton";

function App() {
  return (
    <div className="App">
      <h1>Ejemplo de Botón Estilizado</h1>
      <StyledButton isActive={true} isDisabled={false} size="large" />
      <StyledButton isActive={false} isDisabled={true} size="small" />
    </div>
  );
}

export default App;
