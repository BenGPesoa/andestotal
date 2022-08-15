import React from 'react';
import Carrousel from '../components/Carrousel';
import '../styles/components/pages/GaleriaPage.css';




const GaleriaPage = (props) => {
    return (
        <div className='galeriaPagina'>
            <div className="introPaginas">
            <h3>Galeria de imágenes</h3>
            </div>
            <div className="pics">
                <Carrousel />           
            </div>
        </div>    
    
    );
};
export default GaleriaPage;