-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:3306
-- Tiempo de generación: 15-08-2022 a las 13:24:34
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
  `subtitulo` text NOT NULL,
  `cuerpo` text NOT NULL,
  `id_img` varchar(250) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=13 DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `novedades`
--

INSERT INTO `novedades` (`id`, `titulo`, `subtitulo`, `cuerpo`, `id_img`) VALUES
(1, '15 de julio', 'esta noche podremos ver a Saturno 4º al noroeste de la Luna. Una conjunción ideal para ver a simple vista y con binoculares. (23:00 hs)', 'esta noche podremos ver a Saturno 4º al noroeste de la Luna. Una conjunción ideal para ver a simple vista y con binoculares. (23:00 hs)', 'c8dw1cvddhw3iaeg5ggo'),
(2, '19 de julio', 'durante la madrugada, Júpiter estará a solo 2,5º al oeste de la Luna. Otra notable conjunción para observar a ojo desnudo y con binoculares. (3:00 hs)', 'durante la madrugada, Júpiter estará a solo 2,5º al oeste de la Luna. Otra notable conjunción para observar a ojo desnudo y con binoculares. (3:00 hs)', 'lb3txuetznitkulkfknm'),
(3, '21 de julio', 'una nueva conjunción en la alta madrugada: Marte se ubica a 3º al este la Luna. La escena ocurre a mediana altura sobre el cielo oriental y, por supuesto, podrá verse a simple vista.  (5:00 hs)', 'una nueva conjunción en la alta madrugada: Marte se ubica a 3º al este la Luna. La escena ocurre a mediana altura sobre el cielo oriental y, por supuesto, podrá verse a simple vista.  (5:00 hs)', 'wwsnuoyp190frdo254uo'),
(4, '26 de julio', 'poco antes del amanecer, la Luna y Venus (separados por 4º) protagonizan una bonita conjunción a poca altura sobre el horizonte noroeste. Dada la claridad del crepúsculo matutino, se recomienda el uso de binoculares para una mejor observación. (7:15 hs)', 'poco antes del amanecer, la Luna y Venus (separados por 4º) protagonizan una bonita conjunción a poca altura sobre el horizonte noroeste. Dada la claridad del crepúsculo matutino, se recomienda el uso de binoculares para una mejor observación. (7:15 hs)', 'njeyv7snl5zkypfs2lfj');

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
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `usuario`, `password`) VALUES
(1, 'ben', '81dc9bdb52d04dc20036dbd8313ed055'),
(2, 'juan', '81dc9bdb52d04dc20036dbd8313ed055'),
(3, 'pepe', '6074c6aa3488f3c2dddff2a7ca821aab');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
