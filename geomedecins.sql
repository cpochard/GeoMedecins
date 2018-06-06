CREATE DATABASE IF NOT EXISTS GeoMedecins /*!40100 DEFAULT CHARACTER SET utf8 */;
USE GeoMedecins;

DROP TABLE IF EXISTS Medecin;
CREATE TABLE Medecin (
id int(10) NOT NULL AUTO_INCREMENT, 
prenom varchar(100) NOT NULL,
nom varchar(100) NOT NULL,
profession varchar(100) DEFAULT NULL,
lattitude decimal(10,8) NOT NULL,
longitude decimal(10,8) NOT NULL,
photo varchar(100) DEFAULT NULL,
email varchar(150) NOT NULL,
PRIMARY KEY (`id`)
 )
 ENGINE=INNODB;
 INSERT INTO Medecin (prenom, nom, profession, lattitude, longitude, photo, email) VALUES ('Gilles', 'Boulon', 'medecin generaliste', 47.458769, -1.8563214, 'doc1.jpg', 'boulon@mail.com'), ('Celine', 'Truc', 'chirurgienne', 47.553658, -2.156987, 'doc2.jpg', 'truc@mail.com');

DROP TABLE IF EXISTS Requete;
CREATE TABLE Requete (
id int(10) NOT NULL AUTO_INCREMENT,
sujet varchar(200) NOT NULL,
`date` date NOT NULL,
patient varchar(100) NOT NULL,
lat decimal(10,8) NOT NULL,
lon decimal(10,8) NOT NULL,
PRIMARY KEY (`id`)
)
ENGINE=INNODB;
INSERT INTO Requete (sujet, `date`, patient, lat, lon) VALUES ('accident 1', '2018-03-24', 'patient 1', 47.2737829, -2.2603029), ('accident 2', '2018-05-15', 'patient 2', 47.239367, -1.7199081);

SELECT * FROM Medecin;
SELECT * FROM Requete;