/*
Este código representa 
la barra de navegación de la aplicación
*/


import { useContext } from "react";
import HeaderButton from "./headerButton/headerButton";
import "./header.css"; // Importar el archivo de estilos para el encabezado
import logo from "../../assets/ico/logo.svg"; // Importar el logo
import { ThemeContext } from "../../App"; // Importar el contexto del tema

// Lista de botones para la barra de navegación

const buttonList = [

  {
    name: "COFFEE",
    link: "cafe",
    customCss: "",
    img: "",
  },
  {
    name: "MENU",
    link: "menu",
    customCss: "",
    img: "",
  },
  {
    name: "EXPERIENCIA",
    link: "experiencia",
    customCss: "",
    img: "",
  },
  {
    name: "ADMIN",
    link: "form",
    customCss: "header__button--admin", // Clase de CSS personalizada (actualmente vacía)
    img: "",  // Ruta de la imagen (actualmente vacía)
  },
  {
    name: "Localizar tienda",
    link: "https://www.google.com.ar/maps/search/Starbucks/@-34.6556054,-58.4823916,11z?entry=ttu",
    customCss: "header__button--right",
    img: "",
  },
];
/** 
*  Header component es la barra de naevgacion de la web
*/
function Header() {
  const { theme, setTheme } = useContext(ThemeContext);
  const handleClick = () => {
    const newTheme = theme === "light" ? "dark" : "light"
    setTheme(newTheme); 
    localStorage.setItem("theme", newTheme); 
  };

  return (
    <header>
      <nav>
        <div className="wrapper">
          {/* ToDo: Buscar nombre de forma de escribir este css */}
          <ul className="header__container">
            {buttonList.map((aButton, index) => {
              return <HeaderButton key={index} data={aButton} />;
            })}
            <button onClick={handleClick}>cambiar tema</button>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
