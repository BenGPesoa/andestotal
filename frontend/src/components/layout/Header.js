import React from 'react';
import '../../styles/components/layout/header.css';
const Header = (props) => {
    return (
        
    <header>
        <img src="img/logomira.png" alt="logo" />
        <div className="slogan">
            <h1 className="slogan">Andes</h1>
            <h2>Instrumentos ópticos</h2>
        </div>
    </header>
    );
};
export default Header;