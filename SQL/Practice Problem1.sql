DROP DATABASE IF EXISTS Xelvato;
CREATE DATABASE IF NOT EXISTS Xelvato;
USE Xelvato;

CREATE TABLE IF NOT EXISTS Employees(
id INT PRIMARY KEY,
name varchar(50),
salary INT
);

INSERT INTO Employees VALUES (1,'Sujoy Paul',25000), (2,'Abdullah Chowdhury',30000), (3,'Alif Emran Emon',35000),(4,'Nairit Ahmed',40000) ;

SELECT * FROM Employees;