import React from "react";

import Contador from "./Contador";
import CalculadoraClasse from "./CalculadoraClasse";
import { CalculadoraHooks } from "./CalculadoraHooks";

function App() {
  return (
    <div>
      <h1>Contador</h1>
      <Contador />
      <hr />
      <h1>Calculadora Classe</h1>
      <CalculadoraClasse />
      <hr />
      <h1>Calculadora Hooks</h1>
      <CalculadoraHooks />
    </div>
  );
}

export default App;
