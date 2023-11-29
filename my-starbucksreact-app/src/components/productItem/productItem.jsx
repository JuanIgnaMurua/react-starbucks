/*
Este componente, cuando se utiliza en tu aplicación, 
renderizará una estructura HTML con una imagen y un párrafo.
 La imagen se extrae de la prop img, 
y el título se muestra en un párrafo.

*/

import React from "react";

function ProductItem({ img, title }) {
  return (
    <div>
      <div>
        <img src={img} alt="" />
      </div>
      <p>{title}</p>
    </div>
  );
}

export default ProductItem;
