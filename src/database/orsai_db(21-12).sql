-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Server version:               10.4.27-MariaDB - mariadb.org binary distribution
-- Server OS:                    Win64
-- HeidiSQL Version:             12.3.0.6589
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Dumping database structure for orsai_db
DROP DATABASE IF EXISTS `orsai_db`;
CREATE DATABASE IF NOT EXISTS `orsai_db` /*!40100 DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci */;
USE `orsai_db`;

-- Dumping structure for table orsai_db.categories
DROP TABLE IF EXISTS `categories`;
CREATE TABLE IF NOT EXISTS `categories` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Dumping data for table orsai_db.categories: ~3 rows (approximately)
DELETE FROM `categories`;
INSERT INTO `categories` (`id`, `name`) VALUES
	(1, 'Pizza'),
	(2, 'Empanada'),
	(3, 'Offer');

-- Dumping structure for table orsai_db.orders
DROP TABLE IF EXISTS `orders`;
CREATE TABLE IF NOT EXISTS `orders` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `id_products` int(11) NOT NULL,
  `quantity` int(11) NOT NULL,
  `id_user` varchar(20) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `id_products` (`id_products`),
  KEY `orders_FK_1` (`id_user`),
  CONSTRAINT `orders_FK_1` FOREIGN KEY (`id_user`) REFERENCES `users` (`id`),
  CONSTRAINT `orders_ibfk_2` FOREIGN KEY (`id_products`) REFERENCES `products` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Dumping data for table orsai_db.orders: ~0 rows (approximately)
DELETE FROM `orders`;

-- Dumping structure for table orsai_db.products
DROP TABLE IF EXISTS `products`;
CREATE TABLE IF NOT EXISTS `products` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `description` text DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `price` decimal(10,2) DEFAULT NULL,
  `id_category` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `id_category` (`id_category`),
  CONSTRAINT `products_ibfk_1` FOREIGN KEY (`id_category`) REFERENCES `categories` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=46 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Dumping data for table orsai_db.products: ~15 rows (approximately)
DELETE FROM `products`;
INSERT INTO `products` (`id`, `name`, `description`, `image`, `price`, `id_category`) VALUES
	(31, 'La Scaloneta', 'Salsa de Tomate, Rúcula, Aceite de Oliva y Burrata', 'PRODUCT-pizza-1.jpg', 1300.00, 1),
	(32, 'Diego Armando Maradona', 'Mozzarella, Salsa de Tomate, Pepperoni, Champiñones, Pimiento Morrón y Aceitunas Negras.', 'PRODUCT-pizza-2.jpg', 1400.00, 1),
	(33, 'Lionel Andres Messi', 'Provolone, Salsa de Tomate, Cantimpalo, Salchicha Italiana y Carne Molida.', 'PRODUCT-pizza-3.jpg', 1500.00, 1),
	(34, 'Orsai', 'Salsa de Tomate, Mozzarella, Champiñones, Tomates Secos, Chorizo Colorado y Burrata', 'PRODUCT-pizza-7.jpg', 1600.00, 1),
	(35, 'La Albiceleste', 'Fugazzeta Clásica: Mozzarella, Cebolla, Oregano, Pimienta y Aceitunas Negras.', 'PRODUCT-pizza-5.jpg', 1200.00, 1),
	(36, 'Tango', 'Muzzarella, Morrones, Aceitunas Negras, Tomates Cherry, Jamón Serrano, Semillas de Sésamo y Masa Integral.', 'PRODUCT-pizza-6.jpg', 500.00, 1),
	(37, 'Doctor Bilardo', 'Queso Parmesano, Salsa de Tomate, Rodajas de Tomates Secos y Pimienta Negra.', 'PRODUCT-pizza-4.jpg', 1300.00, 1),
	(38, 'Matador Kempes', 'Salsa de Tomate, Albahaca, Tomates Cherry, Jitomate Amarillo, Aceite de Oliva y Burrata.', 'PRODUCT-pizza-8.jpg', 1000.00, 1),
	(39, 'Carne a Cuchillo', 'Carne Cortada a Cuchillo.', 'PRODUCT-empanada.jpg', 200.00, 2),
	(40, 'Jamon y Queso', 'Jamon Cocido y Queso Mozzarella.', 'PRODUCT-empanada.jpg', 200.00, 2),
	(41, 'Humita', 'Pasta de Maíz y Crema.', 'PRODUCT-empanada.jpg', 200.00, 2),
	(42, 'Pollo', 'Pollo braseado a la cerveza.', 'PRODUCT-empanada.jpg', 200.00, 2),
	(43, 'Pizza a Elección + Bebida', 'Pizza a elección mas una cerveza o gaseosa.', 'PRODUCT-pizza-1.jpg', 2200.00, 3),
	(44, 'Docena de Empanadas + Bebida', 'Docena de empanadas a elección más una cerveza o gasesosa', 'PRODUCT-pizza-5.jpg', 2000.00, 3),
	(45, 'Pizza + Docena de Empanadas + Bebida', 'Pizza a elección acompañado de una docena de empanadas con una cerveza o gaseosa.', 'PRODUCT-pizza-2.jpg', 3100.00, 3);

-- Dumping structure for table orsai_db.users
DROP TABLE IF EXISTS `users`;
CREATE TABLE IF NOT EXISTS `users` (
  `id` varchar(20) NOT NULL,
  `first_name` varchar(50) NOT NULL,
  `last_name` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(100) NOT NULL,
  `image` varchar(255) DEFAULT NULL,
  `is_admin` tinyint(1) DEFAULT NULL,
  `phone` varchar(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Dumping data for table orsai_db.users: ~32 rows (approximately)
DELETE FROM `users`;
INSERT INTO `users` (`id`, `first_name`, `last_name`, `email`, `password`, `image`, `is_admin`, `phone`) VALUES
	('1', 'Johan', 'Rawet', 'jrawet0@github.com', 'N4UPvbc', 'usuario1', 1, '2034348475'),
	('10', 'Kermie', 'Whyteman', 'kwhyteman9@vkontakte.ru', 'OOFN8cq', 'usuario10', 0, '4378486336'),
	('11', 'Ag', 'Normandale', 'anormandalea@boston.com', 'x63pxh7', 'usuario11', 0, '2716324911'),
	('12', 'Carmela', 'Martinie', 'cmartinieb@ucla.edu', 'QtIwo2h7d', 'usuario12', 0, '3568645351'),
	('13', 'Teodora', 'Hovee', 'thoveec@omniture.com', 'mpsi7ZoB8HVu', 'usuario13', 0, '2355711457'),
	('14', 'Fedora', 'Bitterton', 'fbittertond@foxnews.com', 'TRoqn1tgp', 'usuario14', 0, '9767161737'),
	('15', 'Darda', 'Sayer', 'dsayere@wsj.com', 'Q7V1rri70', 'usuario15', 0, '6899299374'),
	('16', 'Winn', 'Teager', 'wteagerf@bluehost.com', 'spO6u3GV3', 'usuario16', 0, '1839576258'),
	('1669768692701', 'Maximo', 'Cozzetti', 'maxcozetti@gmail.com', '$2a$07$y4K0iGxZv/MNjplZvGS8..e9zD2zLqB5r5SAMCbgHGRFu0BUe7DDa', 'Luis_Alberto_Spinetta_en_1976.jpg', 1, '1145493558'),
	('1669773319029', 'Santi', 'Leklere', 'santileklere@gmail.com', '$2a$07$NySE2TLl/McO5drkyMTFCuJ/mKTgQwnKtvalxgL2FPCb8LgZR.2RS', 'USUARIO-1669773318872.jpg', 1, '111111111'),
	('17', 'Dicky', 'Rzehor', 'drzehorg@quantcast.com', 'O4azRlbBf', 'usuario17', 0, '8193886982'),
	('18', 'Rosie', 'Braganza', 'rbraganzah@hao123.com', 'YwIOVeyMdL', 'usuario18', 0, '9982958680'),
	('19', 'Mei', 'Ivanishchev', 'mivanishchevi@addthis.com', 'NmRhgBpt', 'usuario19', 0, '9888283425'),
	('2', 'Susy', 'McKenney', 'smckenney1@weibo.com', 'YYQZD31', 'usuario2', 1, '3765407546'),
	('20', 'Rianon', 'Hixley', 'rhixleyj@ftc.gov', 'N7c6ZrHe', 'usuario20', 0, '756900949'),
	('21', 'Cirilo', 'Reynoollds', 'creynoolldsk@plala.or.jp', 'oMizSBZUjh1', 'usuario21', 0, '8521838532'),
	('22', 'Filberto', 'Oppie', 'foppiel@google.pl', '4KMtDMEvX', 'usuario22', 0, '5923297625'),
	('23', 'Briggs', 'Nuton', 'bnutonm@ucsd.edu', 'JS8NBl', 'usuario23', 0, '7747660640'),
	('24', 'Lonnie', 'Pauls', 'lpaulsn@comsenz.com', 'OHsPzkVQK', 'usuario24', 0, '7914831752'),
	('25', 'Claiborne', 'Wildsmith', 'cwildsmitho@sakura.ne.jp', 'Gjpswn8', 'usuario25', 0, '3323407254'),
	('26', 'Amalita', 'Clayhill', 'aclayhillp@washington.edu', 'a2ydiID7v2', 'usuario26', 0, '6739246918'),
	('27', 'Dael', 'Cuffley', 'dcuffleyq@issuu.com', 'iHDOcNUSQ', 'usuario27', 0, '6187101559'),
	('28', 'Pate', 'Wareing', 'pwareingr@arizona.edu', 'N4NSZL9yMp', 'usuario28', 0, '1006696947'),
	('29', 'Clarissa', 'Richford', 'crichfords@google.cn', 'cx4Yw1DDmq', 'usuario29', 0, '9512893758'),
	('3', 'Ella', 'Paylor', 'epaylor2@nydailynews.com', '0XniG2Zk9', 'usuario3', 1, '8045759175'),
	('30', 'Janine', 'Albion', 'jalbiont@hugedomains.com', 'ad6mbv', 'usuario30', 0, '1081978879'),
	('4', 'Ingelbert', 'Najera', 'inajera3@baidu.com', 'W7457XnGvHMm', 'usuario4', 1, '2636482173'),
	('5', 'Lorrie', 'Fidilis', 'lfidilis4@businessinsider.com', 'wGaDDqIG4', 'usuario5', 0, '9376639806'),
	('6', 'Heall', 'Charnley', 'hcharnley5@marketwatch.com', 'sZF1Oa5J3', 'usuario6', 0, '3584638045'),
	('7', 'Arline', 'Ateridge', 'aateridge6@redcross.org', '1n3OoK', 'usuario7', 0, '5773717016'),
	('8', 'Tiffany', 'Cankett', 'tcankett7@sciencedaily.com', '40uf1U', 'usuario8', 0, '6041367869'),
	('9', 'Katha', 'Climson', 'kclimson8@aol.com', 'b1JTut', 'usuario9', 0, '9115754002');

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
