var express = require('express');
var router = express.Router();
var novedadesModel = require('./../models/novedadesModel');
var cloudinary = require('cloudinary').v2;
var nodemailer = require('nodemailer');

router.get('/novedades', async function (req, res, next) {
    let novedades = await novedadesModel.getNovedades();

    novedades = novedades.map(novedades => {
        if (novedades.id_img) {
            const imagen = cloudinary.url(novedades.id_img, {
                width: 1920,
                height: 1050,
                crop: 'fill'
            });
            return {
                ...novedades,
                imagen
            }
        } else {
            return {
                ...novedades,
                imagen: ''
            }
        }
    });

    res.json(novedades);
});


router.post('/contacto', async (req, res) => {
    const mail = {
        to: 'benpesoa@gmail.com',
        subject: 'Andes - Nuevo mensaje',
        html: `${req.body.nombre} ha dejado un mensaje en la web de Andes. Su direccion de correo es: ${req.body.mail} <br> El mensaje es el siguiente: ${req.body.mensaje}`
    }

    var transport = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS
        }
      });

    await transport.sendMail(mail)

    res.status(201).json({
        error: false,
        message: 'Mensaje enviado'
    });
});

module.exports = router;