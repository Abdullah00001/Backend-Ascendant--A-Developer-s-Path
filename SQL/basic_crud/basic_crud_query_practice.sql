DROP DATABASE IF EXISTS university_management;

CREATE DATABASE IF NOT EXISTS university_management;

USE university_management;

CREATE TABLE IF NOT EXISTS faculty(
uuid INT NOT NULL UNIQUE,
facultyName VARCHAR(300) NOT NULL UNIQUE,
facultyDescription VARCHAR(600) DEFAULT NULL,
facultyBanner VARCHAR(1000) DEFAULT NULL,
PRIMARY KEY (uuid)
);

INSERT INTO faculty (uuid, facultyName, facultyDescription)
VALUES
(1001, 'Electrical & Electronic Engineering', 'Focuses on electricity, electronics, and electromagnetism.'),
(1002, 'Mechanical Engineering', 'The discipline that applies engineering physics and materials science principles.'),
(1003, 'Civil Engineering', 'Deals with the design, construction, and maintenance of the built environment.'),
(1004, 'Business Administration', 'Covers all aspects of overseeing and supervising business operations.'),
(1005, 'Faculty of Arts & Humanities', 'Includes subjects like history, literature, philosophy, and modern languages.'),
(1006, 'Faculty of Social Sciences', 'Studies society and human relationships, including sociology, psychology, and economics.'),
(1007, 'Faculty of Law', 'Dedicated to the study of law, legal systems, and jurisprudence.'),
(1008, 'Faculty of Medicine', 'Trains future doctors, surgeons, and medical researchers.'),
(1009, 'Faculty of Dentistry', 'Focuses on oral health, diagnosis, prevention, and treatment of dental diseases.'),
(1010, 'Faculty of Pharmacy', 'The science and practice of discovering, producing, preparing, and dispensing drugs.'),
(1011, 'Architecture', 'The art and science of designing buildings and other physical structures.'),
(1012, 'Textile Engineering', 'Covers the principles of engineering and science in textile manufacturing and processing.'),
(1013, 'Physics', 'The natural science that studies matter, its fundamental constituents, its motion and behavior.'),
(1015, 'Mathematics', 'The abstract study of numbers, quantity, structure, space, and change.'),
(1016, 'Islamic Studies', 'Focuses on the academic study of Islam, including theology, law, and history.'),
(1017, 'English Language & Literature', 'Studies the English language and literature written in English across the world.'),
(1018, 'Marketing', 'The study and management of exchange relationships and business promotion.'),
(1019, 'Finance & Banking', 'Focuses on financial management, markets, investments, and banking institutions.'),
(1020, 'Environmental Science', 'An interdisciplinary field integrating physical, biological, and information sciences to study the environment.');

SELECT *
FROM faculty;

SELECT *
FROM faculty f
WHERE f.facultyName = 'Finance & Banking';

ALTER TABLE faculty
ADD facultyCode INT UNIQUE DEFAULT NULL;

UPDATE faculty SET facultyCode = 101 WHERE uuid = 1001;
UPDATE faculty SET facultyCode = 102 WHERE uuid = 1002;
UPDATE faculty SET facultyCode = 103 WHERE uuid = 1003;
UPDATE faculty SET facultyCode = 104 WHERE uuid = 1004;
UPDATE faculty SET facultyCode = 105 WHERE uuid = 1005;
UPDATE faculty SET facultyCode = 106 WHERE uuid = 1006;
UPDATE faculty SET facultyCode = 107 WHERE uuid = 1007;
UPDATE faculty SET facultyCode = 108 WHERE uuid = 1008;
UPDATE faculty SET facultyCode = 109 WHERE uuid = 1009;
UPDATE faculty SET facultyCode = 110 WHERE uuid = 1010;
UPDATE faculty SET facultyCode = 111 WHERE uuid = 1011;
UPDATE faculty SET facultyCode = 112 WHERE uuid = 1012;
UPDATE faculty SET facultyCode = 113 WHERE uuid = 1013;
UPDATE faculty SET facultyCode = 115 WHERE uuid = 1015;
UPDATE faculty SET facultyCode = 116 WHERE uuid = 1016;
UPDATE faculty SET facultyCode = 117 WHERE uuid = 1017;
UPDATE faculty SET facultyCode = 118 WHERE uuid = 1018;
UPDATE faculty SET facultyCode = 119 WHERE uuid = 1019;
UPDATE faculty SET facultyCode = 120 WHERE uuid = 1020;