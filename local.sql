-- --------------------------------------------------------
-- Host:                         localhost
-- Versión del servidor:         5.7.24 - MySQL Community Server (GPL)
-- SO del servidor:              Win64
-- HeidiSQL Versión:             10.2.0.5599
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;


-- Volcando estructura de base de datos para occupation_indicators
DROP DATABASE IF EXISTS `occupation_indicators`;
CREATE DATABASE IF NOT EXISTS `occupation_indicators` /*!40100 DEFAULT CHARACTER SET latin1 */;
USE `occupation_indicators`;

-- Volcando estructura para tabla occupation_indicators.activities
DROP TABLE IF EXISTS `activities`;
CREATE TABLE IF NOT EXISTS `activities` (
  `act_id` int(11) NOT NULL AUTO_INCREMENT,
  `por_id` int(11) DEFAULT NULL,
  `act_title` longtext NOT NULL,
  `act_description` longtext,
  `cli_id` int(11) NOT NULL,
  `act_portfolio` int(11) DEFAULT NULL,
  `act_status` int(11) DEFAULT NULL,
  `act_clockify_task` varchar(225) DEFAULT NULL,
  PRIMARY KEY (`act_id`),
  KEY `idPorfolio_idx` (`por_id`),
  KEY `idClient_idx` (`cli_id`),
  CONSTRAINT `idClient` FOREIGN KEY (`cli_id`) REFERENCES `clients` (`cli_id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `idPorfolio` FOREIGN KEY (`por_id`) REFERENCES `portfolio_requests` (`por_id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=248 DEFAULT CHARSET=latin1;

-- Volcando datos para la tabla occupation_indicators.activities: ~228 rows (aproximadamente)
DELETE FROM `activities`;
/*!40000 ALTER TABLE `activities` DISABLE KEYS */;
INSERT INTO `activities` (`act_id`, `por_id`, `act_title`, `act_description`, `cli_id`, `act_portfolio`, `act_status`, `act_clockify_task`) VALUES
	(2, 1, '1', '3', 1, 1, 1, NULL),
	(4, NULL, 'Prueba 1', 'Actividad de Prueba', 2, 0, 1, NULL),
	(6, NULL, 'Prueba 23', 'Actividad de Prueba', 2, 0, 1, NULL),
	(7, NULL, 'Prueba 2', 'Actividad de Prueba', 2, 0, 1, NULL),
	(8, NULL, 'Prueba 23', 'Actividad de Prueba', 2, 0, 1, NULL),
	(9, NULL, 'Prueba 23', 'Actividad de Prueba', 1, 0, 1, NULL),
	(10, NULL, 'Prueba 23', 'Actividad de Prueba', 1, 0, 1, NULL),
	(11, NULL, 'Prueba 23', 'Actividad de Prueba', 1, 0, 1, NULL),
	(12, NULL, 'Prueba 23', 'Actividad de Prueba', 1, 0, 1, NULL),
	(13, NULL, 'Prueba 23', 'Actividad de Prueba', 1, 0, 1, NULL),
	(14, NULL, 'Prueba 23', 'Actividad de Prueba', 1, 0, 1, NULL),
	(15, NULL, 'Prueba 23', 'Actividad de Prueba', 1, 0, 1, NULL),
	(16, NULL, 'Prueba 23', 'Actividad de Prueba', 1, 0, 1, NULL),
	(17, NULL, 'Prueba 23', 'Actividad de Prueba', 1, 0, 1, NULL),
	(18, NULL, 'Prueba 23', 'Actividad de Prueba', 1, 0, 1, NULL),
	(19, NULL, 'Prueba 23', 'Actividad de Prueba', 1, 0, 1, NULL),
	(20, NULL, 'Prueba 23', 'Actividad de Prueba', 1, 0, 1, NULL),
	(21, NULL, 'Prueba 23', 'Actividad de Prueba', 1, 0, 1, NULL),
	(22, NULL, 'Prueba 23', 'Actividad de Prueba', 1, 0, 1, NULL),
	(23, NULL, 'Prueba 23', 'Actividad de Prueba', 1, 0, 1, NULL),
	(24, NULL, 'Prueba 23', 'Actividad de Prueba', 1, 0, 1, NULL),
	(25, NULL, 'Prueba 23', 'Actividad de Prueba', 1, 0, 1, NULL),
	(26, NULL, 'Prueba 23', 'Actividad de Prueba', 1, 0, 1, NULL),
	(27, NULL, 'Prueba 23', 'Actividad de Prueba', 1, 0, 1, NULL),
	(28, NULL, 'Prueba 23', 'Actividad de Prueba', 1, 0, 1, NULL),
	(29, NULL, 'Prueba 23', 'Actividad de Prueba', 1, 0, 1, NULL),
	(30, NULL, 'Prueba 23', 'Actividad de Prueba', 1, 0, 1, NULL),
	(31, 1, '1', '3', 1, 1, 1, NULL),
	(32, NULL, 'Prueba 1', 'Actividad de Prueba', 1, 0, 1, NULL),
	(33, NULL, 'Prueba 23', 'Actividad de Prueba', 1, 0, 1, NULL),
	(34, NULL, 'Prueba 23', 'Actividad de Prueba', 1, 0, 1, NULL),
	(35, NULL, 'Prueba 23', 'Actividad de Prueba', 1, 0, 1, NULL),
	(36, NULL, 'Prueba 23', 'Actividad de Prueba', 1, 0, 1, NULL),
	(37, NULL, 'Prueba 23', 'Actividad de Prueba', 1, 0, 1, NULL),
	(38, NULL, 'Prueba 23', 'Actividad de Prueba', 1, 0, 1, NULL),
	(39, NULL, 'Prueba 23', 'Actividad de Prueba', 1, 0, 1, NULL),
	(40, NULL, 'Prueba 23', 'Actividad de Prueba', 1, 0, 1, NULL),
	(41, NULL, 'Prueba 23', 'Actividad de Prueba', 1, 0, 1, NULL),
	(42, NULL, 'Prueba 23', 'Actividad de Prueba', 1, 0, 1, NULL),
	(43, NULL, 'Prueba 23', 'Actividad de Prueba', 1, 0, 1, NULL),
	(44, NULL, 'Prueba 23', 'Actividad de Prueba', 1, 0, 1, NULL),
	(45, NULL, 'Prueba 23', 'Actividad de Prueba', 1, 0, 1, NULL),
	(46, NULL, 'Prueba 23', 'Actividad de Prueba', 1, 0, 1, NULL),
	(47, NULL, 'Prueba 23', 'Actividad de Prueba', 1, 0, 1, NULL),
	(48, NULL, 'Prueba 23', 'Actividad de Prueba', 1, 0, 1, NULL),
	(49, NULL, 'Prueba 23', 'Actividad de Prueba', 1, 0, 1, NULL),
	(50, NULL, 'Prueba 23', 'Actividad de Prueba', 1, 0, 1, NULL),
	(51, NULL, 'Prueba 23', 'Actividad de Prueba', 1, 0, 1, NULL),
	(52, NULL, 'Prueba 23', 'Actividad de Prueba', 1, 0, 1, NULL),
	(53, NULL, 'Prueba 23', 'Actividad de Prueba', 1, 0, 1, NULL),
	(54, NULL, 'Prueba 23', 'Actividad de Prueba', 1, 0, 1, NULL),
	(55, NULL, 'Prueba 23', 'Actividad de Prueba', 1, 0, 1, NULL),
	(56, NULL, 'Prueba 23', 'Actividad de Prueba', 1, 0, 1, NULL),
	(57, NULL, 'Prueba 23', 'Actividad de Prueba', 1, 0, 1, NULL),
	(62, 1, '1', '3', 1, 1, 1, NULL),
	(63, NULL, 'Prueba 1', 'Actividad de Prueba', 1, 0, 1, NULL),
	(64, NULL, 'Prueba 23', 'Actividad de Prueba', 1, 0, 1, NULL),
	(65, NULL, 'Prueba 23', 'Actividad de Prueba', 1, 0, 1, NULL),
	(66, NULL, 'Prueba 23', 'Actividad de Prueba', 1, 0, 1, NULL),
	(67, NULL, 'Prueba 23', 'Actividad de Prueba', 1, 0, 1, NULL),
	(68, NULL, 'Prueba 23', 'Actividad de Prueba', 1, 0, 1, NULL),
	(69, NULL, 'Prueba 23', 'Actividad de Prueba', 1, 0, 1, NULL),
	(70, NULL, 'Prueba 23', 'Actividad de Prueba', 1, 0, 1, NULL),
	(71, NULL, 'Prueba 23', 'Actividad de Prueba', 1, 0, 1, NULL),
	(72, NULL, 'Prueba 23', 'Actividad de Prueba', 1, 0, 1, NULL),
	(73, NULL, 'Prueba 23', 'Actividad de Prueba', 1, 0, 1, NULL),
	(74, NULL, 'Prueba 23', 'Actividad de Prueba', 1, 0, 1, NULL),
	(75, NULL, 'Prueba 23', 'Actividad de Prueba', 1, 0, 1, NULL),
	(76, NULL, 'Prueba 23', 'Actividad de Prueba', 1, 0, 1, NULL),
	(77, NULL, 'Prueba 23', 'Actividad de Prueba', 1, 0, 1, NULL),
	(78, NULL, 'Prueba 23', 'Actividad de Prueba', 1, 0, 1, NULL),
	(79, NULL, 'Prueba 23', 'Actividad de Prueba', 1, 0, 1, NULL),
	(80, NULL, 'Prueba 23', 'Actividad de Prueba', 1, 0, 1, NULL),
	(81, NULL, 'Prueba 23', 'Actividad de Prueba', 1, 0, 1, NULL),
	(82, NULL, 'Prueba 23', 'Actividad de Prueba', 1, 0, 1, NULL),
	(83, NULL, 'Prueba 23', 'Actividad de Prueba', 1, 0, 1, NULL),
	(84, NULL, 'Prueba 23', 'Actividad de Prueba', 1, 0, 1, NULL),
	(85, NULL, 'Prueba 23', 'Actividad de Prueba', 1, 0, 1, NULL),
	(86, NULL, 'Prueba 23', 'Actividad de Prueba', 1, 0, 1, NULL),
	(87, NULL, 'Prueba 23', 'Actividad de Prueba', 1, 0, 1, NULL),
	(88, NULL, 'Prueba 23', 'Actividad de Prueba', 1, 0, 1, NULL),
	(89, 1, '1', '3', 1, 1, 1, NULL),
	(90, NULL, 'Prueba 1', 'Actividad de Prueba', 1, 0, 1, NULL),
	(91, NULL, 'Prueba 23', 'Actividad de Prueba', 1, 0, 1, NULL),
	(92, NULL, 'Prueba 23', 'Actividad de Prueba', 1, 0, 1, NULL),
	(93, NULL, 'Prueba 23', 'Actividad de Prueba', 1, 0, 1, NULL),
	(94, NULL, 'Prueba 23', 'Actividad de Prueba', 1, 0, 1, NULL),
	(95, NULL, 'Prueba 23', 'Actividad de Prueba', 1, 0, 1, NULL),
	(96, NULL, 'Prueba 23', 'Actividad de Prueba', 1, 0, 1, NULL),
	(97, NULL, 'Prueba 23', 'Actividad de Prueba', 1, 0, 1, NULL),
	(98, NULL, 'Prueba 23', 'Actividad de Prueba', 1, 0, 1, NULL),
	(99, NULL, 'Prueba 23', 'Actividad de Prueba', 1, 0, 1, NULL),
	(100, NULL, 'Prueba 23', 'Actividad de Prueba', 1, 0, 1, NULL),
	(101, NULL, 'Prueba 23', 'Actividad de Prueba', 1, 0, 1, NULL),
	(102, NULL, 'Prueba 23', 'Actividad de Prueba', 1, 0, 1, NULL),
	(103, NULL, 'Prueba 23', 'Actividad de Prueba', 1, 0, 1, NULL),
	(104, NULL, 'Prueba 23', 'Actividad de Prueba', 1, 0, 1, NULL),
	(105, NULL, 'Prueba 23', 'Actividad de Prueba', 1, 0, 1, NULL),
	(106, NULL, 'Prueba 23', 'Actividad de Prueba', 1, 0, 1, NULL),
	(107, NULL, 'Prueba 23', 'Actividad de Prueba', 1, 0, 1, NULL),
	(108, NULL, 'Prueba 23', 'Actividad de Prueba', 1, 0, 1, NULL),
	(109, NULL, 'Prueba 23', 'Actividad de Prueba', 1, 0, 1, NULL),
	(110, NULL, 'Prueba 23', 'Actividad de Prueba', 1, 0, 1, NULL),
	(111, NULL, 'Prueba 23', 'Actividad de Prueba', 1, 0, 1, NULL),
	(112, NULL, 'Prueba 23', 'Actividad de Prueba', 1, 0, 1, NULL),
	(113, NULL, 'Prueba 23', 'Actividad de Prueba', 1, 0, 1, NULL),
	(114, NULL, 'Prueba 23', 'Actividad de Prueba', 1, 0, 1, NULL),
	(115, NULL, 'Prueba 23', 'Actividad de Prueba', 1, 0, 1, NULL),
	(125, 1, '1', '3', 1, 1, 1, NULL),
	(126, NULL, 'Prueba 1', 'Actividad de Prueba', 1, 0, 1, NULL),
	(127, NULL, 'Prueba 23', 'Actividad de Prueba', 1, 0, 1, NULL),
	(128, NULL, 'Prueba 23', 'Actividad de Prueba', 1, 0, 1, NULL),
	(129, NULL, 'Prueba 23', 'Actividad de Prueba', 1, 0, 1, NULL),
	(130, NULL, 'Prueba 23', 'Actividad de Prueba', 1, 0, 1, NULL),
	(131, NULL, 'Prueba 23', 'Actividad de Prueba', 1, 0, 1, NULL),
	(132, NULL, 'Prueba 23', 'Actividad de Prueba', 1, 0, 1, NULL),
	(133, NULL, 'Prueba 23', 'Actividad de Prueba', 1, 0, 1, NULL),
	(134, NULL, 'Prueba 23', 'Actividad de Prueba', 1, 0, 1, NULL),
	(135, NULL, 'Prueba 23', 'Actividad de Prueba', 1, 0, 1, NULL),
	(136, NULL, 'Prueba 23', 'Actividad de Prueba', 1, 0, 1, NULL),
	(137, NULL, 'Prueba 23', 'Actividad de Prueba', 1, 0, 1, NULL),
	(138, NULL, 'Prueba 23', 'Actividad de Prueba', 1, 0, 1, NULL),
	(139, NULL, 'Prueba 23', 'Actividad de Prueba', 1, 0, 1, NULL),
	(140, NULL, 'Prueba 23', 'Actividad de Prueba', 1, 0, 1, NULL),
	(141, NULL, 'Prueba 23', 'Actividad de Prueba', 1, 0, 1, NULL),
	(142, NULL, 'Prueba 23', 'Actividad de Prueba', 1, 0, 1, NULL),
	(143, NULL, 'Prueba 23', 'Actividad de Prueba', 1, 0, 1, NULL),
	(144, NULL, 'Prueba 23', 'Actividad de Prueba', 1, 0, 1, NULL),
	(145, NULL, 'Prueba 23', 'Actividad de Prueba', 1, 0, 1, NULL),
	(146, NULL, 'Prueba 23', 'Actividad de Prueba', 1, 0, 1, NULL),
	(147, NULL, 'Prueba 23', 'Actividad de Prueba', 1, 0, 1, NULL),
	(148, NULL, 'Prueba 23', 'Actividad de Prueba', 1, 0, 1, NULL),
	(149, NULL, 'Prueba 23', 'Actividad de Prueba', 1, 0, 1, NULL),
	(150, NULL, 'Prueba 23', 'Actividad de Prueba', 1, 0, 1, NULL),
	(151, NULL, 'Prueba 23', 'Actividad de Prueba', 1, 0, 1, NULL),
	(152, 1, '1', '3', 1, 1, 1, NULL),
	(153, NULL, 'Prueba 1', 'Actividad de Prueba', 1, 0, 1, NULL),
	(154, NULL, 'Prueba 23', 'Actividad de Prueba', 1, 0, 1, NULL),
	(155, NULL, 'Prueba 23', 'Actividad de Prueba', 1, 0, 1, NULL),
	(156, NULL, 'Prueba 23', 'Actividad de Prueba', 1, 0, 1, NULL),
	(157, NULL, 'Prueba 23', 'Actividad de Prueba', 1, 0, 1, NULL),
	(158, NULL, 'Prueba 23', 'Actividad de Prueba', 1, 0, 1, NULL),
	(159, NULL, 'Prueba 23', 'Actividad de Prueba', 1, 0, 1, NULL),
	(160, NULL, 'Prueba 23', 'Actividad de Prueba', 1, 0, 1, NULL),
	(161, NULL, 'Prueba 23', 'Actividad de Prueba', 1, 0, 1, NULL),
	(162, NULL, 'Prueba 23', 'Actividad de Prueba', 1, 0, 1, NULL),
	(163, NULL, 'Prueba 23', 'Actividad de Prueba', 1, 0, 1, NULL),
	(164, NULL, 'Prueba 23', 'Actividad de Prueba', 1, 0, 1, NULL),
	(165, NULL, 'Prueba 23', 'Actividad de Prueba', 1, 0, 1, NULL),
	(166, NULL, 'Prueba 23', 'Actividad de Prueba', 1, 0, 1, NULL),
	(167, NULL, 'Prueba 23', 'Actividad de Prueba', 1, 0, 1, NULL),
	(168, NULL, 'Prueba 23', 'Actividad de Prueba', 1, 0, 1, NULL),
	(169, NULL, 'Prueba 23', 'Actividad de Prueba', 1, 0, 1, NULL),
	(170, NULL, 'Prueba 23', 'Actividad de Prueba', 1, 0, 1, NULL),
	(171, NULL, 'Prueba 23', 'Actividad de Prueba', 1, 0, 1, NULL),
	(172, NULL, 'Prueba 23', 'Actividad de Prueba', 1, 0, 1, NULL),
	(173, NULL, 'Prueba 23', 'Actividad de Prueba', 1, 0, 1, NULL),
	(174, NULL, 'Prueba 23', 'Actividad de Prueba', 1, 0, 1, NULL),
	(175, NULL, 'Prueba 23', 'Actividad de Prueba', 1, 0, 1, NULL),
	(176, NULL, 'Prueba 23', 'Actividad de Prueba', 1, 0, 1, NULL),
	(177, NULL, 'Prueba 23', 'Actividad de Prueba', 1, 0, 1, NULL),
	(178, NULL, 'Prueba 23', 'Actividad de Prueba', 1, 0, 1, NULL),
	(179, 1, '1', '3', 1, 1, 0, NULL),
	(180, NULL, 'Prueba 1', 'Actividad de Prueba', 1, 0, 1, NULL),
	(181, NULL, 'Prueba 23', 'Actividad de Prueba', 1, 0, 1, NULL),
	(182, NULL, 'Prueba 23', 'Actividad de Prueba', 1, 0, 1, NULL),
	(183, NULL, 'Prueba 23', 'Actividad de Prueba', 1, 0, 1, NULL),
	(184, NULL, 'Prueba 23', 'Actividad de Prueba', 1, 0, 1, NULL),
	(185, NULL, 'Prueba 23', 'Actividad de Prueba', 1, 0, 1, NULL),
	(186, NULL, 'Prueba 23', 'Actividad de Prueba', 1, 0, 1, NULL),
	(187, NULL, 'Prueba 23', 'Actividad de Prueba', 1, 0, 1, NULL),
	(188, NULL, 'Prueba 23', 'Actividad de Prueba', 1, 0, 1, NULL),
	(189, NULL, 'Prueba 23', 'Actividad de Prueba', 1, 0, 1, NULL),
	(190, NULL, 'Prueba 23', 'Actividad de Prueba', 1, 0, 1, NULL),
	(191, NULL, 'Prueba 23', 'Actividad de Prueba', 1, 0, 1, NULL),
	(192, NULL, 'Prueba 23', 'Actividad de Prueba', 1, 0, 1, NULL),
	(193, NULL, 'Prueba 23', 'Actividad de Prueba', 1, 0, 1, NULL),
	(194, NULL, 'Prueba 23', 'Actividad de Prueba', 1, 0, 1, NULL),
	(195, NULL, 'Prueba 23', 'Actividad de Prueba', 1, 0, 1, NULL),
	(196, NULL, 'Prueba 23', 'Actividad de Prueba', 1, 0, 1, NULL),
	(197, NULL, 'Prueba 23', 'Actividad de Prueba', 1, 0, 1, NULL),
	(198, NULL, 'Prueba 23', 'Actividad de Prueba', 1, 0, 1, NULL),
	(199, NULL, 'Prueba 23', 'Actividad de Prueba', 1, 0, 1, NULL),
	(200, NULL, 'Prueba 23', 'Actividad de Prueba', 1, 0, 1, NULL),
	(201, NULL, 'Prueba 23', 'Actividad de Prueba', 1, 0, 1, NULL),
	(202, NULL, 'Prueba 23', 'Actividad de Prueba', 1, 0, 1, NULL),
	(203, NULL, 'Prueba 23', 'Actividad de Prueba', 1, 0, 1, NULL),
	(204, NULL, 'Prueba 23', 'Actividad de Prueba', 1, 0, 1, NULL),
	(205, NULL, 'Prueba 23', 'Actividad de Prueba', 1, 0, 1, NULL),
	(206, 1, '1', '3', 1, 1, 1, NULL),
	(207, NULL, 'Prueba 1', 'Actividad de Prueba', 1, 0, 1, NULL),
	(208, NULL, 'Prueba 23', 'Actividad de Prueba', 1, 0, 1, NULL),
	(209, NULL, 'Prueba 23', 'Actividad de Prueba', 1, 0, 1, NULL),
	(210, NULL, 'Prueba 23', 'Actividad de Prueba', 1, 0, 1, NULL),
	(211, NULL, 'Prueba 23', 'Actividad de Prueba', 1, 0, 1, NULL),
	(212, NULL, 'Prueba 23', 'Actividad de Prueba', 1, 0, 1, NULL),
	(213, NULL, 'Prueba 23', 'Actividad de Prueba', 1, 0, 1, NULL),
	(214, NULL, 'Prueba 23', 'Actividad de Prueba', 1, 0, 1, NULL),
	(215, NULL, 'Prueba 23', 'Actividad de Prueba', 1, 0, 1, NULL),
	(216, NULL, 'Prueba 23', 'Actividad de Prueba', 1, 0, 1, NULL),
	(217, NULL, 'Prueba 23', 'Actividad de Prueba', 1, 0, 1, NULL),
	(218, NULL, 'Prueba 23', 'Actividad de Prueba', 1, 0, 1, NULL),
	(219, NULL, 'Prueba 23', 'Actividad de Prueba', 1, 0, 1, NULL),
	(220, NULL, 'Prueba 23', 'Actividad de Prueba', 1, 0, 1, NULL),
	(221, NULL, 'Prueba 23', 'Actividad de Prueba', 1, 0, 1, NULL),
	(222, NULL, 'Prueba 23', 'Actividad de Prueba', 1, 0, 1, NULL),
	(223, NULL, 'Prueba 23', 'Actividad de Prueba', 1, 0, 1, NULL),
	(224, NULL, 'Prueba 23', 'Actividad de Prueba', 1, 0, 1, NULL),
	(225, NULL, 'Prueba 23', 'Actividad de Prueba', 1, 0, 1, NULL),
	(226, NULL, 'Prueba 23', 'Actividad de Prueba', 1, 0, 1, NULL),
	(227, NULL, 'Prueba 23', 'Actividad de Prueba', 1, 0, 1, NULL),
	(228, NULL, 'Prueba 23', 'Actividad de Prueba', 1, 0, 1, NULL),
	(229, NULL, 'Prueba 23', 'Actividad de Prueba', 1, 0, 1, NULL),
	(230, NULL, 'SSSSS', 'Actividad de Prueba', 1, 0, 1, '606b1bdadda0d336c6f2307f'),
	(231, NULL, 'Prueba 23', 'Actividad de Prueba', 1, 0, 0, '60101307afcebe46f87aef1b'),
	(232, NULL, 'Prueba', '12345567988', 2, 0, 1, '5eff8ae1060ecb299fb23873'),
	(233, NULL, 'aaa', 'avada', 1, 0, 1, NULL),
	(234, NULL, 'aaa', 'avada', 1, 0, 1, NULL),
	(235, NULL, '1', '2', 1, 0, 1, NULL),
	(236, NULL, 'caa', 's', 2, 0, 1, NULL),
	(237, NULL, 'Prueba', 'Actividad de Prueba', 1, 0, 1, NULL),
	(239, NULL, 'Prueba', 'Actividad de Prueba', 1, 0, 1, NULL),
	(240, NULL, 'Prueba', 'Actividad de Prueba', 1, 0, 1, NULL),
	(241, NULL, 'Prueba', 'Actividad de Prueba', 1, 0, 1, NULL),
	(242, NULL, 'Prueba', 'Actividad de Prueba', 1, 0, 1, NULL),
	(243, NULL, 'Prueba', 'Actividad de Prueba', 1, 0, 1, NULL),
	(244, NULL, 'Prueba3', 'Test', 1, 0, 1, NULL);
/*!40000 ALTER TABLE `activities` ENABLE KEYS */;

-- Volcando estructura para tabla occupation_indicators.clients
DROP TABLE IF EXISTS `clients`;
CREATE TABLE IF NOT EXISTS `clients` (
  `cli_id` int(11) NOT NULL AUTO_INCREMENT,
  `cli_name` varchar(45) NOT NULL,
  `cli_description` varchar(225) DEFAULT NULL,
  `cli_icon` longtext,
  `cli_status` int(11) NOT NULL,
  PRIMARY KEY (`cli_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

-- Volcando datos para la tabla occupation_indicators.clients: ~0 rows (aproximadamente)
DELETE FROM `clients`;
/*!40000 ALTER TABLE `clients` DISABLE KEYS */;
INSERT INTO `clients` (`cli_id`, `cli_name`, `cli_description`, `cli_icon`, `cli_status`) VALUES
	(1, 'Cli1', 'Cli1......', 'http://www.febeca.com/assets/front/img/xfebeca_logo.png.pagespeed.ic.4So8pFrGKe.png', 1),
	(2, 'Cli2', 'Cli2......', 'Cli2Icon', 1);
/*!40000 ALTER TABLE `clients` ENABLE KEYS */;

-- Volcando estructura para tabla occupation_indicators.collaborators
DROP TABLE IF EXISTS `collaborators`;
CREATE TABLE IF NOT EXISTS `collaborators` (
  `col_id_file` int(11) NOT NULL,
  `col_name` varchar(45) NOT NULL,
  `col_last_name` varchar(45) NOT NULL,
  `col_identification` varchar(20) NOT NULL,
  `col_email` varchar(45) DEFAULT NULL,
  `col_campus` varchar(45) DEFAULT NULL,
  `col_position` varchar(45) DEFAULT NULL,
  `col_management` varchar(45) DEFAULT NULL,
  `col_status` int(11) NOT NULL,
  PRIMARY KEY (`col_id_file`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Volcando datos para la tabla occupation_indicators.collaborators: ~0 rows (aproximadamente)
DELETE FROM `collaborators`;
/*!40000 ALTER TABLE `collaborators` DISABLE KEYS */;
INSERT INTO `collaborators` (`col_id_file`, `col_name`, `col_last_name`, `col_identification`, `col_email`, `col_campus`, `col_position`, `col_management`, `col_status`) VALUES
	(1, 'Enmanuel', 'Leon', '001', 'eleon@intelix.biz', 'a', 'b', 'c', 0);
/*!40000 ALTER TABLE `collaborators` ENABLE KEYS */;

-- Volcando estructura para tabla occupation_indicators.non_working_days
DROP TABLE IF EXISTS `non_working_days`;
CREATE TABLE IF NOT EXISTS `non_working_days` (
  `non_id` int(11) NOT NULL AUTO_INCREMENT,
  `non_date` date NOT NULL,
  PRIMARY KEY (`non_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Volcando datos para la tabla occupation_indicators.non_working_days: ~0 rows (aproximadamente)
DELETE FROM `non_working_days`;
/*!40000 ALTER TABLE `non_working_days` DISABLE KEYS */;
/*!40000 ALTER TABLE `non_working_days` ENABLE KEYS */;

-- Volcando estructura para tabla occupation_indicators.occupations
DROP TABLE IF EXISTS `occupations`;
CREATE TABLE IF NOT EXISTS `occupations` (
  `occ_id` int(11) NOT NULL AUTO_INCREMENT,
  `col_id_file` int(11) DEFAULT NULL,
  `act_id` int(11) DEFAULT NULL,
  `occ_percentage` int(11) DEFAULT NULL,
  `occ_start_date` date DEFAULT NULL,
  `occ_end_date` date DEFAULT NULL,
  PRIMARY KEY (`occ_id`),
  KEY `idCollaboratorOcuppations_idx` (`col_id_file`),
  KEY `idActivities_idx` (`act_id`),
  CONSTRAINT `idActivities` FOREIGN KEY (`act_id`) REFERENCES `activities` (`act_id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `idCollaboratorOcuppations` FOREIGN KEY (`col_id_file`) REFERENCES `collaborators` (`col_id_file`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

-- Volcando datos para la tabla occupation_indicators.occupations: ~2 rows (aproximadamente)
DELETE FROM `occupations`;
/*!40000 ALTER TABLE `occupations` DISABLE KEYS */;
INSERT INTO `occupations` (`occ_id`, `col_id_file`, `act_id`, `occ_percentage`, `occ_start_date`, `occ_end_date`) VALUES
	(1, 1, 231, 0, '2021-03-10', '2021-03-17'),
	(2, 1, 4, 0, '2021-03-10', '2021-03-17');
/*!40000 ALTER TABLE `occupations` ENABLE KEYS */;

-- Volcando estructura para tabla occupation_indicators.portfolio_requests
DROP TABLE IF EXISTS `portfolio_requests`;
CREATE TABLE IF NOT EXISTS `portfolio_requests` (
  `por_id` int(11) NOT NULL,
  `por_company` varchar(45) DEFAULT NULL,
  `por_commercial_area` varchar(45) DEFAULT NULL,
  `por_title` longtext,
  `por_descripcion` longtext,
  `por_responsable` varchar(45) DEFAULT NULL,
  `por_order_priority` varchar(45) DEFAULT NULL,
  `por_application_date` varchar(45) DEFAULT NULL,
  `por_start_date` varchar(45) DEFAULT NULL,
  `por_end_date` varchar(45) DEFAULT NULL,
  `por_plan_end_date` varchar(45) DEFAULT NULL,
  `por_estimated_date` varchar(45) DEFAULT NULL,
  `por_condition` varchar(45) DEFAULT NULL,
  `por_advance` varchar(45) DEFAULT NULL,
  `por_deviation` varchar(45) DEFAULT NULL,
  `por_cli_deliverables_comp` longtext,
  `por_cli_pending_activities` longtext,
  `por_cli_comments` longtext,
  `por_int_deliverables_comp` longtext,
  `por_int_pending_activities` longtext,
  `por_int_comments` longtext,
  `por_status_upd_date` varchar(45) DEFAULT NULL,
  `por_type_req` varchar(45) DEFAULT NULL,
  `por_technical_area` varchar(45) DEFAULT NULL,
  `por_category` varchar(45) DEFAULT NULL,
  `por_various_points` varchar(45) DEFAULT NULL,
  `por_solver_group` varchar(45) DEFAULT NULL,
  `por_client` varchar(45) DEFAULT NULL,
  `por_status` int(11) DEFAULT NULL,
  PRIMARY KEY (`por_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Volcando datos para la tabla occupation_indicators.portfolio_requests: ~0 rows (aproximadamente)
DELETE FROM `portfolio_requests`;
/*!40000 ALTER TABLE `portfolio_requests` DISABLE KEYS */;
INSERT INTO `portfolio_requests` (`por_id`, `por_company`, `por_commercial_area`, `por_title`, `por_descripcion`, `por_responsable`, `por_order_priority`, `por_application_date`, `por_start_date`, `por_end_date`, `por_plan_end_date`, `por_estimated_date`, `por_condition`, `por_advance`, `por_deviation`, `por_cli_deliverables_comp`, `por_cli_pending_activities`, `por_cli_comments`, `por_int_deliverables_comp`, `por_int_pending_activities`, `por_int_comments`, `por_status_upd_date`, `por_type_req`, `por_technical_area`, `por_category`, `por_various_points`, `por_solver_group`, `por_client`, `por_status`) VALUES
	(1, 'a', 'b', 'c', 'd', 'e', 'f', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', 0);
/*!40000 ALTER TABLE `portfolio_requests` ENABLE KEYS */;

-- Volcando estructura para tabla occupation_indicators.summary_time_card
DROP TABLE IF EXISTS `summary_time_card`;
CREATE TABLE IF NOT EXISTS `summary_time_card` (
  `sum_id` int(11) NOT NULL AUTO_INCREMENT,
  `occ_id` int(11) DEFAULT NULL,
  `sum_moth` int(11) DEFAULT NULL,
  `sum_year` int(11) DEFAULT NULL,
  `sum_hh` int(11) DEFAULT NULL,
  PRIMARY KEY (`sum_id`),
  KEY `idOccupationSum_idx` (`occ_id`),
  CONSTRAINT `idOccupationSum` FOREIGN KEY (`occ_id`) REFERENCES `occupations` (`occ_id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Volcando datos para la tabla occupation_indicators.summary_time_card: ~0 rows (aproximadamente)
DELETE FROM `summary_time_card`;
/*!40000 ALTER TABLE `summary_time_card` DISABLE KEYS */;
/*!40000 ALTER TABLE `summary_time_card` ENABLE KEYS */;

-- Volcando estructura para tabla occupation_indicators.users
DROP TABLE IF EXISTS `users`;
CREATE TABLE IF NOT EXISTS `users` (
  `usr_id` int(11) NOT NULL AUTO_INCREMENT,
  `col_id_file` int(11) NOT NULL,
  `usr_rol` int(11) NOT NULL,
  `usr_status` int(11) NOT NULL,
  PRIMARY KEY (`usr_id`),
  KEY `idUserCollaborator_idx` (`col_id_file`),
  CONSTRAINT `idUserCollaborator` FOREIGN KEY (`col_id_file`) REFERENCES `collaborators` (`col_id_file`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

-- Volcando datos para la tabla occupation_indicators.users: ~0 rows (aproximadamente)
DELETE FROM `users`;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` (`usr_id`, `col_id_file`, `usr_rol`, `usr_status`) VALUES
	(1, 1, 0, 0);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
