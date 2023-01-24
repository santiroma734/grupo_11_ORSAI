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
CREATE DATABASE IF NOT EXISTS `orsai_db` /*!40100 DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci */;
USE `orsai_db`;

-- Dumping structure for table orsai_db.categories
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
CREATE TABLE IF NOT EXISTS `orders` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `id_product` int(11) NOT NULL,
  `quantity` int(11) NOT NULL,
  `id_user` varchar(20) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `orders_FK_1` (`id_user`),
  KEY `id_products` (`id_product`) USING BTREE,
  CONSTRAINT `orders_FK_1` FOREIGN KEY (`id_user`) REFERENCES `users` (`id`),
  CONSTRAINT `orders_ibfk_2` FOREIGN KEY (`id_product`) REFERENCES `products` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Dumping data for table orsai_db.orders: ~0 rows (approximately)
DELETE FROM `orders`;

-- Dumping structure for table orsai_db.products
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
CREATE TABLE IF NOT EXISTS `users` (
  `id` varchar(50) NOT NULL,
  `first_name` varchar(50) NOT NULL,
  `last_name` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(100) NOT NULL,
  `image` varchar(255) DEFAULT NULL,
  `phone` varchar(11) DEFAULT NULL,
  `id_user_category` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `id_user_category` (`id_user_category`) USING BTREE,
  CONSTRAINT `FK1_id_user_category` FOREIGN KEY (`id_user_category`) REFERENCES `user_categories` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Dumping data for table orsai_db.users: ~33 rows (approximately)
DELETE FROM `users`;
INSERT INTO `users` (`id`, `first_name`, `last_name`, `email`, `password`, `image`, `phone`, `id_user_category`) VALUES
	('1', 'Johan', 'Rawet', 'jrawet0@github.com', 'N4UPvbc', 'usuario1', '2034348475', 2),
	('10', 'Kermie', 'Whyteman', 'kwhyteman9@vkontakte.ru', 'OOFN8cq', 'usuario10', '4378486336', 2),
	('11', 'Ag', 'Normandale', 'anormandalea@boston.com', 'x63pxh7', 'usuario11', '2716324911', 2),
	('12', 'Carmela', 'Martinie', 'cmartinieb@ucla.edu', 'QtIwo2h7d', 'usuario12', '3568645351', 2),
	('13', 'Teodora', 'Hovee', 'thoveec@omniture.com', 'mpsi7ZoB8HVu', 'usuario13', '2355711457', 2),
	('14', 'Fedora', 'Bitterton', 'fbittertond@foxnews.com', 'TRoqn1tgp', 'usuario14', '9767161737', 2),
	('15', 'Darda', 'Sayer', 'dsayere@wsj.com', 'Q7V1rri70', 'usuario15', '6899299374', 2),
	('16', 'Winn', 'Teager', 'wteagerf@bluehost.com', 'spO6u3GV3', 'usuario16', '1839576258', 2),
	('1669768692701', 'Maximo', 'Cozzetti', 'maxcozetti@gmail.com', '$2a$07$y4K0iGxZv/MNjplZvGS8..e9zD2zLqB5r5SAMCbgHGRFu0BUe7DDa', 'Luis_Alberto_Spinetta_en_1976.jpg', '1145493558', 1),
	('1669773319029', 'Santi', 'Leklere', 'santileklere@gmail.com', '$2a$07$NySE2TLl/McO5drkyMTFCuJ/mKTgQwnKtvalxgL2FPCb8LgZR.2RS', 'USUARIO-1669773318872.jpg', '111111111', 1),
	('1673471832694', 'Luis', 'Spinetta', 'luispinetta@gmail.com', '$2a$07$EDIBvHPy8BWLLjPdNyaZSuDiyCki3cw0qxtsANJwI7D.XjdzvWaKS', 'USUARIO-1673471832564.jpg', '1100000000', 1),
	('17', 'Dicky', 'Rzehor', 'drzehorg@quantcast.com', 'O4azRlbBf', 'usuario17', '8193886982', 2),
	('18', 'Rosie', 'Braganza', 'rbraganzah@hao123.com', 'YwIOVeyMdL', 'usuario18', '9982958680', 2),
	('19', 'Mei', 'Ivanishchev', 'mivanishchevi@addthis.com', 'NmRhgBpt', 'usuario19', '9888283425', 2),
	('2', 'Susy', 'McKenney', 'smckenney1@weibo.com', 'YYQZD31', 'usuario2', '3765407546', 2),
	('20', 'Rianon', 'Hixley', 'rhixleyj@ftc.gov', 'N7c6ZrHe', 'usuario20', '756900949', 2),
	('21', 'Cirilo', 'Reynoollds', 'creynoolldsk@plala.or.jp', 'oMizSBZUjh1', 'usuario21', '8521838532', 2),
	('22', 'Filberto', 'Oppie', 'foppiel@google.pl', '4KMtDMEvX', 'usuario22', '5923297625', 2),
	('23', 'Briggs', 'Nuton', 'bnutonm@ucsd.edu', 'JS8NBl', 'usuario23', '7747660640', 2),
	('24', 'Lonnie', 'Pauls', 'lpaulsn@comsenz.com', 'OHsPzkVQK', 'usuario24', '7914831752', 2),
	('25', 'Claiborne', 'Wildsmith', 'cwildsmitho@sakura.ne.jp', 'Gjpswn8', 'usuario25', '3323407254', 2),
	('26', 'Amalita', 'Clayhill', 'aclayhillp@washington.edu', 'a2ydiID7v2', 'usuario26', '6739246918', 2),
	('27', 'Dael', 'Cuffley', 'dcuffleyq@issuu.com', 'iHDOcNUSQ', 'usuario27', '6187101559', 2),
	('28', 'Pate', 'Wareing', 'pwareingr@arizona.edu', 'N4NSZL9yMp', 'usuario28', '1006696947', 2),
	('29', 'Clarissa', 'Richford', 'crichfords@google.cn', 'cx4Yw1DDmq', 'usuario29', '9512893758', 2),
	('3', 'Ella', 'Paylor', 'epaylor2@nydailynews.com', '0XniG2Zk9', 'usuario3', '8045759175', 2),
	('30', 'Janine', 'Albion', 'jalbiont@hugedomains.com', 'ad6mbv', 'usuario30', '1081978879', 2),
	('4', 'Ingelbert', 'Najera', 'inajera3@baidu.com', 'W7457XnGvHMm', 'usuario4', '2636482173', 2),
	('5', 'Lorrie', 'Fidilis', 'lfidilis4@businessinsider.com', 'wGaDDqIG4', 'usuario5', '9376639806', 2),
	('6', 'Heall', 'Charnley', 'hcharnley5@marketwatch.com', 'sZF1Oa5J3', 'usuario6', '3584638045', 2),
	('7', 'Arline', 'Ateridge', 'aateridge6@redcross.org', '1n3OoK', 'usuario7', '5773717016', 2),
	('8', 'Tiffany', 'Cankett', 'tcankett7@sciencedaily.com', '40uf1U', 'usuario8', '6041367869', 2),
	('9', 'Katha', 'Climson', 'kclimson8@aol.com', 'b1JTut', 'usuario9', '9115754002', 2);

-- Dumping structure for table orsai_db.user_categories
CREATE TABLE IF NOT EXISTS `user_categories` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Dumping data for table orsai_db.user_categories: ~2 rows (approximately)
DELETE FROM `user_categories`;
INSERT INTO `user_categories` (`id`, `name`) VALUES
	(1, 'admin'),
	(2, 'user');

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
