import React, { useState } from 'react';
import axios from 'axios';
import "../styles/components/pages/ContactoPage.css";

const ContactoPage = (props) => {

  const initialForm = {
    nombre: '',
    mail: '',
    mensaje: ''
  }

  const [sending, setSending] = useState(false);
  const [msg, setMsg] = useState('');
  const [formData, setFormData] = useState(initialForm);

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(oldData => ({
      ...oldData,
      [name]: value
    }));
  }

  const handleSubmit = async e => {
    e.preventDefault();
    setMsg('');
    setSending(true);
    const response = await axios.post('http://localhost:3000/api/contacto', formData);
    setSending(false);
    setMsg(response.data.message);
    if (response.data.error === false) {
      setFormData(initialForm)
    }
  }



  return (
    <div className="contacto">
      <div className="introPaginas">
        <h3>Contacto</h3>
        <p>Escribenos con tus preguntas, opiniones y comentarios.</p>
      </div>
      <div className="contactoForm">
        <form action="/contacto" method='post' onSubmit={handleSubmit}>
          <div className="lineaContacto">
            <label for="nombre" className="labelContacto">
              Nombre
            </label>
            <input type="text" name="nombre" value={formData.nombre} onChange={handleChange} className="inputContacto" />
          </div>
          <div className="lineaContacto">
            <label for="mail" className="labelContacto">
              Email
            </label>
            <input type="email" name="mail" value={formData.mail} onChange={handleChange} className="inputContacto" />
          </div>
          <div className="lineaContacto">
            <label for="mensaje" className="labelContacto">
              Mensaje
            </label>
            <textarea name="mensaje" value={formData.mensaje} onChange={handleChange} className="areaContacto"></textarea>
          </div>
          <div className="lineaContacto">
            <button type="submit" className="btnContacto">
              Enviar
            </button>
          </div>          
        </form>
        {sending ? <p>Enviando...</p> : null}
        {msg ? <p>{msg}</p> : null}
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
