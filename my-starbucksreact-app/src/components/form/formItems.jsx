/*
este componente proporciona una forma de agregar
 nuevos elementos al estado global de la aplicación,
específicamente para la categoría de "bebidas"
(ADD_BEBIDA). La lógica de manejo de clics
 solicita al usuario el nombre del producto y luego utiliza el despachador para agregar la información del nuevo producto al estado global.

*/


import React, { useContext } from "react";
import { AppContext } from "../../App";
import producto3 from "../../assets/img/tienda/producto_3.png";
function FormItems() {
  const { appState, dispatch } = useContext(AppContext);
  const handleClick = () => {
    const productName = prompt("Ingrese el nombre del producto");
    const action = {
      type: "ADD_BEBIDA",
      payload: { img: producto3, title: productName },
    };
    
    dispatch(action);
  };
  return (
    <div>
      <button onClick={handleClick}>Agregar nuevo item</button>
    </div>
  );
}

export default FormItems;
