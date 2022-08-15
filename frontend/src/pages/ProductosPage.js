import React from 'react';
import '../styles/components/pages/ProductosPage.css';

const ProductosPage = (props) => {
    return (
        <div className="productos">
        <div className="listaProductos">
            <ul>
                <li><a href="">Telescopios</a></li>
                <li><a href="">Accesorios</a></li>
                <li><a href="">Fundas</a></li>
            </ul>
        </div>
        <div className="cardsProductos">
            <div className="introPaginas">
                <h3>Productos</h3>
                <p>Instrumentos Ópticos Andes es sinónimo de excelencia. Desde 1978 fabricamos los mejores telescopios y accesorios.</p>
                <p>Todos nuestros productos son manufacturados con los mas estrictos estandares de calidad, asegurando un optimo desempeño.</p>
                <p>Tanto astrónomos profesionales, como hobbistas, recomiendan Andes.</p>
            </div>
            <div className="card">
                <a href="">
                    <div className="fotoProducto">
                        <img src="img/productos/p1.jpg" alt="producto #1" />
                    </div>
                    <h4>840065</h4>
                    <h5>Telescopio Refractor</h5>
                </a>
            </div>
            <div className="card">
                <a href="">
                    <div className="fotoProducto">
                        <img src="img/productos/p2.jpg" alt="producto #1" />
                    </div>
                    <h4>416570</h4>
                    <h5>Ocular 1,25" Angel wide</h5>
                </a>
            </div>
            <div className="card">
                <a href="">
                    <div className="fotoProducto">
                        <img src="img/productos/p3.jpg" alt="producto #1" />
                    </div>
                    <h4>140398</h4>
                    <h5>Estuche de aluminio</h5>
                </a>
            </div>
            <div className="card">
                <a href="">
                    <div className="fotoProducto">
                        <img src="img/productos/p2.jpg" alt="producto #1" />
                    </div>
                    <h4>416570</h4>
                    <h5>Ocular 1,25" Angel wide</h5>
                </a>
            </div>
            <div className="card">
                <a href="">
                    <div className="fotoProducto">
                        <img src="img/productos/p3.jpg" alt="producto #1" />
                    </div>
                    <h4>140398</h4>
                    <h5>Estuche de aluminio</h5>
                </a>
            </div>
            <div className="card">
                <a href="">
                    <div className="fotoProducto">
                        <img src="img/productos/p1.jpg" alt="producto #1" />
                    </div>
                    <h4>840065</h4>
                    <h5>Telescopio Refractor</h5>
                </a>
            </div>
            <div className="card">
                <a href="">
                    <div className="fotoProducto">
                        <img src="img/productos/p2.jpg" alt="producto #1" />
                    </div>
                    <h4>416570</h4>
                    <h5>Ocular 1,25" Angel wide</h5>
                </a>
            </div>
            <div className="card">
                <a href="">
                    <div className="fotoProducto">
                        <img src="img/productos/p1.jpg" alt="producto #1" />
                    </div>
                    <h4>840065</h4>
                    <h5>Telescopio Refractor</h5>
                </a>
            </div>
            <div className="card">
                <a href="">
                    <div className="fotoProducto">
                        <img src="img/productos/p3.jpg" alt="producto #1" />
                    </div>
                    <h4>140398</h4>
                    <h5>Estuche de aluminio</h5>
                </a>
            </div>
            <div className="card">
                <a href="">
                    <div className="fotoProducto">
                        <img src="img/productos/p3.jpg" alt="producto #1" />
                    </div>
                    <h4>140398</h4>
                    <h5>Estuche de aluminio</h5>
                </a>
            </div>
            <div className="card">
                <a href="">
                    <div className="fotoProducto">
                        <img src="img/productos/p1.jpg" alt="producto #1" />
                    </div>
                    <h4>840065</h4>
                    <h5>Telescopio Refractor</h5>
                </a>
            </div>
            <div className="card">
                <a href="">
                    <div className="fotoProducto">
                        <img src="img/productos/p2.jpg" alt="producto #1" />
                    </div>
                    <h4>416570</h4>
                    <h5>Ocular 1,25" Angel wide</h5>
                </a>
            </div>
        </div>
    </div>    
    
    );
};
export default ProductosPage;