import React from "react";
import "../styles/components/pages/ContactoPage.css";

const ContactoPage = (props) => {
  return (
    <div className="contacto">
      <div className="introPaginas">
        <h3>Contacto</h3>
        <p>Escribenos con tus preguntas, opiniones y comentarios.</p>
      </div>
      <div className="contactoForm">
        <form action="">
          <div className="lineaContacto">
            <label for="nombre" className="labelContacto">
              Nombre
            </label>
            <input type="text" name="nombre" className="inputContacto" />
          </div>
          <div className="lineaContacto">
            <label for="mail" className="labelContacto">
              Email
            </label>
            <input type="email" name="mail" className="inputContacto" />
          </div>
          <div className="lineaContacto">
            <label for="mensaje" className="labelContacto">
              Mensaje
            </label>
            <textarea name="mensaje" className="areaContacto"></textarea>
          </div>
          <div className="lineaContacto">
            <button type="submit" className="btnContacto">
              Enviar
            </button>
          </div>

          
        </form>
      </div>
      <div className="sociales">
        <div className="texto">
            <h3>Seguinos en nuestras redes sociales</h3>
          </div>
        <div className="container iconos">
          <div className="row fila">
            <div className="col-4 sm">
              <a href="mailto:andesinstrumentos@gmail.com">
                <img src="img/email.png" width="150" alt="Email" />
              </a>
            </div>
            <div className="col-4 sm">
              <a href="http://www.facebook.com/andesinstrumentos">
                <img src="img/facebook.png" width="100" alt="Facebook" />
              </a>
            </div>
            <div className="col-4 sm">
              <a href="http://www.linkedin.com/andesinstrumentos">
                <img src="img/linkedin.png" width="100" alt="Linkedin" />
              </a>
            </div>
          </div>
          <div className="row">
            <div className="col-4 sm">
              <a href="http://www.twitter.com/@andesinstrumentos">
                <img src="img/twitter.png" width="100" alt="Twitter" />
              </a>
            </div>
            <div className="col-4 sm">
              <a href="http://www.instagram.com/andesinstrumentos">
                <img src="img/instagram.png" width="100" alt="Instagram" />
              </a>
            </div>
            <div className="col-4 sm">
              <a href="https://api.whatsapp.com/send?phone=5492948498157">
                <img src="img/whatsapp.png" width="60" alt="whatsapp" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ContactoPage;
