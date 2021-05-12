-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Versión del servidor:         5.7.24 - MySQL Community Server (GPL)
-- SO del servidor:              Win64
-- HeidiSQL Versión:             11.1.0.6116
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Volcando estructura de base de datos para occupation_indicators
CREATE DATABASE IF NOT EXISTS `occupation_indicators` /*!40100 DEFAULT CHARACTER SET latin1 */;
USE `occupation_indicators`;

-- Volcando estructura para tabla occupation_indicators.activities
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
) ENGINE=InnoDB AUTO_INCREMENT=269 DEFAULT CHARSET=latin1;

-- Volcando datos para la tabla occupation_indicators.activities: ~8 rows (aproximadamente)
/*!40000 ALTER TABLE `activities` DISABLE KEYS */;
INSERT INTO `activities` (`act_id`, `por_id`, `act_title`, `act_description`, `cli_id`, `act_portfolio`, `act_status`, `act_clockify_task`) VALUES
	(1, NULL, 'act prueba', 'Actividad de Prueba', 1, 0, 1, NULL),
	(2, 1, '1', '3', 1, 1, 1, NULL),
	(4, NULL, 'Prueba 1', 'Actividad de Prueba', 2, 0, 1, NULL),
	(6, NULL, 'Prueba 23', 'Actividad de Prueba', 2, 0, 1, NULL),
	(7, NULL, 'Prueba 2', 'Actividad de Prueba', 2, 0, 1, NULL),
	(8, NULL, 'Prueba 23', 'Actividad de Prueba', 2, 0, 1, NULL),
	(9, NULL, 'Prueba 23', 'Actividad de Prueba', 1, 0, 1, NULL),
	(10, NULL, 'Prueba 23', 'Actividad de Prueba', 1, 0, 1, NULL);
/*!40000 ALTER TABLE `activities` ENABLE KEYS */;

-- Volcando estructura para tabla occupation_indicators.clients
CREATE TABLE IF NOT EXISTS `clients` (
  `cli_id` int(11) NOT NULL AUTO_INCREMENT,
  `cli_name` varchar(45) NOT NULL,
  `cli_description` varchar(225) DEFAULT NULL,
  `cli_icon` longtext,
  `cli_status` int(11) NOT NULL,
  PRIMARY KEY (`cli_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

-- Volcando datos para la tabla occupation_indicators.clients: ~2 rows (aproximadamente)
/*!40000 ALTER TABLE `clients` DISABLE KEYS */;
INSERT INTO `clients` (`cli_id`, `cli_name`, `cli_description`, `cli_icon`, `cli_status`) VALUES
	(1, 'Cli1', 'Cli1......', 'http://www.febeca.com/assets/front/img/xfebeca_logo.png.pagespeed.ic.4So8pFrGKe.png', 1),
	(2, 'Cli2', 'Cli2......', 'Cli2Icon', 1);
/*!40000 ALTER TABLE `clients` ENABLE KEYS */;

-- Volcando estructura para tabla occupation_indicators.collaborators
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

-- Volcando datos para la tabla occupation_indicators.collaborators: ~2 rows (aproximadamente)
/*!40000 ALTER TABLE `collaborators` DISABLE KEYS */;
INSERT INTO `collaborators` (`col_id_file`, `col_name`, `col_last_name`, `col_identification`, `col_email`, `col_campus`, `col_position`, `col_management`, `col_status`) VALUES
	(1, 'Enmanuel', 'Leon', '001', 'eleon@intelix.biz', 'a', 'b', 'c', 0),
	(2, 'Alejandro', 'Sanchez', '002', 'asanchezb@intelix.biz', NULL, NULL, NULL, 1);
/*!40000 ALTER TABLE `collaborators` ENABLE KEYS */;

-- Volcando estructura para tabla occupation_indicators.non_working_days
CREATE TABLE IF NOT EXISTS `non_working_days` (
  `non_id` int(11) NOT NULL AUTO_INCREMENT,
  `non_date` date NOT NULL,
  PRIMARY KEY (`non_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Volcando datos para la tabla occupation_indicators.non_working_days: ~0 rows (aproximadamente)
/*!40000 ALTER TABLE `non_working_days` DISABLE KEYS */;
/*!40000 ALTER TABLE `non_working_days` ENABLE KEYS */;

-- Volcando estructura para tabla occupation_indicators.occupations
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
) ENGINE=InnoDB AUTO_INCREMENT=145 DEFAULT CHARSET=latin1;

-- Volcando datos para la tabla occupation_indicators.occupations: ~1 rows (aproximadamente)
/*!40000 ALTER TABLE `occupations` DISABLE KEYS */;
INSERT INTO `occupations` (`occ_id`, `col_id_file`, `act_id`, `occ_percentage`, `occ_start_date`, `occ_end_date`) VALUES
	(1, 1, 1, 10, '2020-03-16', '2025-03-16');
/*!40000 ALTER TABLE `occupations` ENABLE KEYS */;

-- Volcando estructura para tabla occupation_indicators.portfolio_requests
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

-- Volcando datos para la tabla occupation_indicators.portfolio_requests: ~1 rows (aproximadamente)
/*!40000 ALTER TABLE `portfolio_requests` DISABLE KEYS */;
INSERT INTO `portfolio_requests` (`por_id`, `por_company`, `por_commercial_area`, `por_title`, `por_descripcion`, `por_responsable`, `por_order_priority`, `por_application_date`, `por_start_date`, `por_end_date`, `por_plan_end_date`, `por_estimated_date`, `por_condition`, `por_advance`, `por_deviation`, `por_cli_deliverables_comp`, `por_cli_pending_activities`, `por_cli_comments`, `por_int_deliverables_comp`, `por_int_pending_activities`, `por_int_comments`, `por_status_upd_date`, `por_type_req`, `por_technical_area`, `por_category`, `por_various_points`, `por_solver_group`, `por_client`, `por_status`) VALUES
	(1, 'a', 'b', 'c', 'd', 'e', 'f', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', 0);
/*!40000 ALTER TABLE `portfolio_requests` ENABLE KEYS */;

-- Volcando estructura para tabla occupation_indicators.summary_time_card
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
/*!40000 ALTER TABLE `summary_time_card` DISABLE KEYS */;
/*!40000 ALTER TABLE `summary_time_card` ENABLE KEYS */;

-- Volcando estructura para tabla occupation_indicators.users
CREATE TABLE IF NOT EXISTS `users` (
  `usr_id` int(11) NOT NULL AUTO_INCREMENT,
  `col_id_file` int(11) NOT NULL,
  `usr_rol` int(11) NOT NULL,
  `usr_status` int(11) NOT NULL,
  PRIMARY KEY (`usr_id`),
  KEY `idUserCollaborator_idx` (`col_id_file`),
  CONSTRAINT `idUserCollaborator` FOREIGN KEY (`col_id_file`) REFERENCES `collaborators` (`col_id_file`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

-- Volcando datos para la tabla occupation_indicators.users: ~1 rows (aproximadamente)
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` (`usr_id`, `col_id_file`, `usr_rol`, `usr_status`) VALUES
	(1, 1, 0, 0);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
