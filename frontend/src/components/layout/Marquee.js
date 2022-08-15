import React from "react";
import '../../styles/components/layout/marquee.css';
const Marquee = (props) => {
  return (
    <div className="ofertas">
        <marquee loop="infinite" scrolldelay="150" behavior="scroll">
            Envíos a todo el pais &nbsp;&nbsp;&nbsp;•&nbsp;&nbsp;&nbsp; 15% OFF Contado Efectivo en Fundas & Accesorios
            &nbsp;&nbsp;&nbsp;•&nbsp;&nbsp;&nbsp; Del 9 al 28 de Mayo Oferta especial Eclipse Lunar 10% OFF en
            Telescopios! &nbsp;&nbsp;&nbsp;•&nbsp;&nbsp;&nbsp; 12 Cuotas sin Interés
            &nbsp;&nbsp;&nbsp;•&nbsp;&nbsp;&nbsp; Stock Entrega inmediata &nbsp;&nbsp;&nbsp;•&nbsp;&nbsp;&nbsp; Envíos a
            todo el pais &nbsp;&nbsp;&nbsp;•&nbsp;&nbsp;&nbsp; 15% OFF Contado Efectivo en Fundas & Accesorios
            &nbsp;&nbsp;&nbsp;•&nbsp;&nbsp;&nbsp; Del 9 al 28 de Mayo Oferta especial Eclipse Lunar 10% OFF en
            Telescopios! &nbsp;&nbsp;&nbsp;•&nbsp;&nbsp;&nbsp; 12 Cuotas sin Interés
            &nbsp;&nbsp;&nbsp;•&nbsp;&nbsp;&nbsp; Stock Entrega inmediata
        </marquee>
    </div>
  );
};
export default Marquee;





