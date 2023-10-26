// Acampamentos component
import React from "react";

const Acampamentos = ({ camps }) => {
  return (
    <div id="acampamentos">
      {camps.map((camp, index) => (
        <a key={index} href={camp.url} style={{ textDecoration: "none" }}>
          <div className="acampamento">{camp.name}</div>
        </a>
      ))}
    </div>
  );
};

export default Acampamentos;
