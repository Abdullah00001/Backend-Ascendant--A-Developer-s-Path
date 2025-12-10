-- Database creation & Database Deletion
DROP DATABASE IF EXISTS university;

CREATE DATABASE IF NOT EXISTS university;

USE university;

-- Creating Table
CREATE TABLE department(
id INT NOT NUll,
departmentName VARCHAR(450) NOT NULL UNIQUE,
departmentCode INT NOT NULL UNIQUE,
departmentDescription VARCHAR(1500) DEFAULT NULL,
departmentBanner VARCHAR(700) DEFAULT NULL,
PRIMARY KEY (id)
);

-- Insert data on Table

INSERT INTO department (id,departmentName,departmentCode)
VALUES 
(1,'Computer Science & Engineering',101),
(2,'Mechanical Engineering',102),
(3,'Electrical & Electronic Engineering',103),
(4,'Civil Engineering',104)
;

-- Retrieve data from table

SELECT d.id,d.departmentName
FROM department d
ORDER BY (d.id) ASC;

-- Update one row data on table

UPDATE department
SET departmentDescription='The primary goal of a CSE demo is to provide students with an opportunity to showcase their technical skills, creativity, and ability to solve real-world problems using the knowledge gained in their coursework. It bridges the gap between theoretical knowledge and practical application, often drawing interest from faculty, industry experts, and potential employers.'
WHERE departmentCode=101;

-- Retrieve One Row

SELECT *
FROM department
WHERE id=1;

-- Update many base on id

UPDATE department
SET departmentDescription= CASE id
	WHEN 2 THEN 'The discipline that applies engineering physics and materials science principles.'
    WHEN 3 THEN 'Focuses on electricity, electronics, and electromagnetism.'
    WHEN 4 THEN 'Deals with the design, construction, and maintenance of the built environment.'
END
WHERE id IN (2,3,4);

-- Retrieve limited rows

SELECT *
FROM department
LIMIT 4;

-- Delete one row

DELETE FROM department
WHERE id=4;

-- Delete Table

DROP TABLE IF EXISTS department;