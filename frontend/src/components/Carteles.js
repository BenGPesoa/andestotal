import React from "react";

const Carteles = (props) => {
  const srcProducto = `img/productos/cartel${props.numProducto}a.jpg`;
  const srcInfo = `img/productos/cartel${props.numProducto}.jpg`;
  return (
    <picture className="inCartel">
      <img src={srcInfo} />
      <img src={srcProducto} />
    </picture>
  );
};

export default Carteles;
