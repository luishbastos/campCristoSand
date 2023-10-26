import React, { useState } from "react";

export default function Toggle() {
  // Variáveis de estado
  const [selected, setSelected] = useState(false);

  function toggle() {
    setSelected(!selected);
  }

  return (
    <div className="toggle">
      <input type="checkbox" id="cb" onClick={toggle} />
      <label for="cb">
        <div></div>
      </label>
      {/* Renderização condicional */}
      {selected ? <span>ON</span> : <span>OFF</span>}
    </div>
  );
}
