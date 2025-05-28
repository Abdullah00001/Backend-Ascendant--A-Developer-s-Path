create database if not exists day2prc;

use day2prc;

create table if not exists employee(
id int auto_increment,
firstName varchar(60) not null,
lastName varchar(60) not null,
age int not null,
department varchar(80) not null,
primary key(id)
);

INSERT INTO employee (firstName, lastName, age, department)
VALUES 
('John', 'Doe', 30, 'Engineering'),
('Jane', 'Smith', 28, 'Marketing'),
('Michael', 'Brown', 45, 'Finance'),
('Emily', 'Davis', 35, 'Human Resources'),
('David', 'Wilson', 40, 'Engineering'),
('Sarah', 'Johnson', 32, 'Marketing'),
('Chris', 'Taylor', 29, 'Sales'),
('Laura', 'Martinez', 38, 'Customer Support'),
('James', 'Anderson', 41, 'Engineering'),
('Linda', 'Thomas', 36, 'Finance'),
('Daniel', 'Jackson', 33, 'Sales'),
('Nancy', 'White', 27, 'Customer Support'),
('Kevin', 'Harris', 50, 'Human Resources'),
('Karen', 'Martin', 31, 'Finance'),
('Brian', 'Lee', 44, 'Engineering'),
('Rebecca', 'Clark', 26, 'Marketing'),
('Steven', 'Lewis', 39, 'Sales'),
('Amy', 'Young', 34, 'Customer Support'),
('Paul', 'Walker', 42, 'Finance'),
('Lisa', 'Hall', 37, 'Human Resources');

select *
from employee;

-- Write a query to show the distinct department names

select distinct(department)
from employee;

-- Write a query to show the LastNames of the employees sorted by  descending ages

select lastName
from employee
order by age desc;
