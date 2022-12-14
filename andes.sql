-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:3306
-- Tiempo de generación: 26-08-2022 a las 07:20:51
-- Versión del servidor: 5.7.36
-- Versión de PHP: 7.4.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `andes`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `novedades`
--

DROP TABLE IF EXISTS `novedades`;
CREATE TABLE IF NOT EXISTS `novedades` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `titulo` varchar(250) NOT NULL,
  `cuerpo` text NOT NULL,
  `id_img` varchar(250) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=27 DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `novedades`
--

INSERT INTO `novedades` (`id`, `titulo`, `cuerpo`, `id_img`) VALUES
(23, '4 de Agosto', 'Al anochecer, el planeta Mercurio se ubicará 1° al este de la estrella Regulus, de la constelación de Leo. La curiosa conjunción se verá a baja altura (menos de 10º) sobre el horizonte del oeste. Podrá observarse a simple vista, aunque recomendamos el uso de binoculares.  (19:00 hs)', 'fdzkd28tkgsnws9oqe9l'),
(24, '11 de Agosto', 'Saturno a 4º al noreste de la Luna. La conjunción podrá verse a simple vista y con binoculares. Con la Luna como “guía”, será una excelente oportunidad para identificar en el cielo al sexto planeta del Sistema Solar (21:00 hs). ', 'gvm34mv4praorhguzhuy'),
(25, '14 de Agosto', 'Oposición de Saturno: el planeta se ubica en dirección exactamente opuesta al Sol en el cielo (de ahí el término). En torno a la oposición, la distancia entre la Tierra y un planeta externo es la menor en todo el año. En la noche de hoy, puntualmente, la distancia Tierra-Saturno será de “solo” 1.325 millones de kilómetros (en otros momentos puede ser de más de 1.600 millones de km.).', 'nqulavgdwl1ythxgb8i8'),
(26, '15 de Agosto', 'Durante la madrugada, el brillantísimo Júpiter (mag -2.7) se verá a 3º al este-noreste de la Luna. Una impactante conjunción para disfrutar a simple vista y con binoculares (1:00 hs). ', 'ulldaezwnypp9jettpbs');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
CREATE TABLE IF NOT EXISTS `usuarios` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `usuario` varchar(250) NOT NULL,
  `password` varchar(250) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `usuario`, `password`) VALUES
(1, 'ben', '81dc9bdb52d04dc20036dbd8313ed055'),
(2, 'juan', '81dc9bdb52d04dc20036dbd8313ed055'),
(3, 'pepe', '6074c6aa3488f3c2dddff2a7ca821aab'),
(4, 'flavia', '81dc9bdb52d04dc20036dbd8313ed055');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
