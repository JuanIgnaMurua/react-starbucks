/*
Este componente se encarga de aplicar un estilo diferente al barra de título
en función del tema actual de la aplicación,
  utilizando una clase dinámica que incorpora el tema actual
*/

import "./tittleBar.css";
import { useContext } from "react";
import { ThemeContext } from "../../App";

function TittleBar({ text }) {
  const { theme } = useContext(ThemeContext);
  return <div className={`title-bar-${theme}`}>{text}</div>;
}

export default TittleBar;
