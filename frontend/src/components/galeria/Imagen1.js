import React from 'react';
import { LightgalleryItem } from "react-lightgallery";

const Imagen1 = () => (
    <div>
        <LightgalleryItem group="any" src="/img/galeria/img1.jpg">
            <a href="/img/galeria/img1.jpg">
                <img src="/img/galeria/img1.jpg" />                
            </a>
        </LightgalleryItem>
    </div>
);

export default Imagen1;