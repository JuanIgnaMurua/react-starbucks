import React from "react";
// Componente funcional Wrapper que envuelve su contenido con un estilo específico

function Wrapper({ children }) {
  return <div style={{ maxWidth: "1000px", margin: "0 auto" }}>{children}</div>;
}

export default Wrapper;
