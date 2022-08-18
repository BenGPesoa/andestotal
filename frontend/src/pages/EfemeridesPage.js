import React from "react";
import Iframe from 'react-iframe'
import "../styles/components/pages/EfemeridesPage.css";
import { useState, useEffect } from "react";
import axios from 'axios';
import NovedadItem from '../components/novedades/NovedadItem';

const EfemeridesPage = (props) => {
 
  const [loading, setLoading] = useState(false);
  const [novedades, setNovedades] = useState([]);

  useEffect(() => {
    const cargarNovedades = async () => {
      setLoading = true;
      const response = await axios.get('http://localhost:3000/api/novedades');
      setNovedades(response.data);
      setLoading = false;
    };

    cargarNovedades();

  }, []);

  return (
    <div className="efemerides">
      <div className="introPaginas">
        <h3>Efemérides Astronómicas del mes</h3>
        <p>
          Estas efemérides han sido elaboradas cuidadosamente por el Área de
          Divulgación Científica del Planetario de la Ciudad de Buenos Aires. El
          criterio adoptado ha sido destacar, especialmente, los fenómenos
          astronómicos fácilmente observables a simple vista, o con largavistas
          y pequeños telescopios, desde nuestra ciudad (y generalmente en toda
          la Argentina) durante este mes, con las fechas y horas indicadas.
        </p>
      </div>
      <div className="novedades">
      { loading ? (
        <p>Cargando...</p>
      ) : (
        novedades.map(item => <NovedadItem key={item.id}
          title={item.titulo} subtitle={item.subtitulo}
          body={item.cuerpo} image={item.imagen} />)
      )
      }
      </div>
      <div className="fasesLuna">
        <h3>Estas son las fases de la luna de este mes</h3>
        <Iframe src="https://www.tutiempo.net/s-widget/moon/000000l1s/" scrolling="no" frameborder="0"
        className="fasesIframe"
            style="border:none; overflow:hidden; "></Iframe>
    </div>
    </div>
  );
}
export default EfemeridesPage;
