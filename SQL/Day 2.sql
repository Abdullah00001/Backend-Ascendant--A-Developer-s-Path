create database if not exists College;
use College;

create table if not exists Departments(
id int auto_increment,
name varchar(80),
primary key(id)
);

create table if not exists Students(
id int auto_increment,
name varchar(80),
age int,
gender enum('male','female'),
email varchar(160) unique,
adsress varchar(180),
departmentId int,
primary key(id),
foreign key(departmentId) references Departments(id)
);

create table if not exists Instructors(
id int auto_increment,
name varchar(80),
age int,
designation varchar(80), 
gender enum('male','female'),
email varchar(160) unique,
adsress varchar(180),
departmentId int,
primary key(id),
foreign key(departmentId) references Departments(id)
);

create table if not exists Courses(
id int auto_increment,
title varchar(80),
credit int,
departmentId int,
foreign key(departmentId) references Departments(id),
primary key(id)
);

create table if not exists Teaches(
id int auto_increment,
instructorId int,
departmentId int,
foreign key(instructorId) references Instructors(id),
foreign key(departmentId) references Departments(id),
primary key(id)
);

create table if not exists Enrolments(
id int auto_increment,
studentId int,
courseId int,
enrolmentDate timestamp default current_timestamp,
foreign key(studentId) references Students(id),
foreign key(courseId) references Courses(id),
primary key(id)
);

INSERT INTO Departments (name) VALUES
('Computer Science'),
('Mathematics'),
('Physics'),
('Chemistry'),
('Biology'),
('Economics'),
('History'),
('Philosophy'),
('Engineering'),
('Business');

INSERT INTO Students (name, age, gender, email, adsress, departmentId) VALUES
('Alice Smith', 20, 'female', 'alice@example.com', '123 Main St', 1),
('Bob Johnson', 22, 'male', 'bob@example.com', '456 Elm St', 2),
('Carol White', 21, 'female', 'carol@example.com', '789 Oak St', 3),
('David Lee', 23, 'male', 'david@example.com', '321 Pine St', 4),
('Eva Green', 20, 'female', 'eva@example.com', '654 Maple St', 5),
('Frank Black', 24, 'male', 'frank@example.com', '987 Birch St', 6),
('Grace Hill', 22, 'female', 'grace@example.com', '159 Cedar St', 7),
('Henry Adams', 21, 'male', 'henry@example.com', '753 Ash St', 8),
('Ivy Clark', 23, 'female', 'ivy@example.com', '258 Spruce St', 9),
('Jack Turner', 20, 'male', 'jack@example.com', '951 Walnut St', 10);

INSERT INTO Students (name, age, gender, email, adsress, departmentId) VALUES
('Liam Bennett', 21, 'male', 'liam@example.com', '100 Pine St', 1),
('Mia Walker', 22, 'female', 'mia@example.com', '101 Oak St', 2),
('Noah Hall', 23, 'male', 'noah@example.com', '102 Elm St', 3),
('Olivia Young', 20, 'female', 'olivia@example.com', '103 Cedar St', 4),
('Paul Allen', 24, 'male', 'paul@example.com', '104 Birch St', 5),
('Quinn Martin', 21, 'female', 'quinn@example.com', '105 Spruce St', 6),
('Ryan Lewis', 22, 'male', 'ryan@example.com', '106 Maple St', 7),
('Sophia Scott', 20, 'female', 'sophia@example.com', '107 Walnut St', 8),
('Thomas Harris', 23, 'male', 'thomas@example.com', '108 Chestnut St', 9),
('Uma King', 21, 'female', 'uma@example.com', '109 Poplar St', 10);


INSERT INTO Instructors (name, age, designation, gender, email, adsress, departmentId) VALUES
('Dr. Alan', 45, 'Professor', 'male', 'alan@example.com', '12 Prof Ln', 1),
('Dr. Brenda', 50, 'Lecturer', 'female', 'brenda@example.com', '34 Faculty Rd', 2),
('Dr. Carl', 40, 'Assistant Professor', 'male', 'carl@example.com', '56 Univ St', 3),
('Dr. Diane', 38, 'Associate Professor', 'female', 'diane@example.com', '78 Campus Blvd', 4),
('Dr. Ethan', 55, 'Professor', 'male', 'ethan@example.com', '90 Dean Ave', 5),
('Dr. Fiona', 43, 'Lecturer', 'female', 'fiona@example.com', '21 Scholar Way', 6),
('Dr. George', 39, 'Assistant Professor', 'male', 'george@example.com', '43 Grad Dr', 7),
('Dr. Helen', 41, 'Associate Professor', 'female', 'helen@example.com', '65 College Cir', 8),
('Dr. Ian', 48, 'Professor', 'male', 'ian@example.com', '87 Research Ct', 9),
('Dr. Julia', 37, 'Lecturer', 'female', 'julia@example.com', '109 Study Pl', 10);

INSERT INTO Courses (title, credit, departmentId) VALUES
('Intro to Programming', 3, 1),
('Calculus I', 4, 2),
('Classical Mechanics', 3, 3),
('Organic Chemistry', 4, 4),
('Genetics', 3, 5),
('Microeconomics', 3, 6),
('World History', 3, 7),
('Ethics in Philosophy', 2, 8),
('Engineering Design', 4, 9),
('Marketing 101', 3, 10);

INSERT INTO Teaches (instructorId, departmentId) VALUES
(1, 1),
(2, 2),
(3, 3),
(4, 4),
(5, 5),
(6, 6),
(7, 7),
(8, 8),
(9, 9),
(10, 10);

INSERT INTO Enrolments (studentId, courseId) VALUES
(1, 1),
(2, 2),
(3, 3),
(4, 4),
(5, 5),
(6, 6),
(7, 7),
(8, 8),
(9, 9),
(10, 10);




select *
from Students;

select *
from Departments;

select *
from Instructors;

select *
from Courses;

select *
from Students as s
where s.departmentId IN(select id
from Departments
);

update Students as s
set s.name = 'Alice Jonson'
where s.id=1;

select *
from Students as s
where s.id=1;
set sql_safe_updates=0;

delete from Enrolments
where studentId=1;
delete from Students
where id=1;

select *
from Students;

select *
from Departments as d
inner join Students as s
on d.id=s.departmentId
where s.id=3;

select *
from Students as s
left join Enrolments as e
on s.id=e.courseId;

select *
from Students as s
inner join Enrolments as e
on s.id=e.courseId;

-- Students with no enrolments
SELECT *
FROM Students s
LEFT JOIN Enrolments e ON s.id = e.studentId
WHERE e.id IS NULL

UNION

-- Enrolments with no student (shouldn’t happen, but just in case)
SELECT *
FROM Students s
RIGHT JOIN Enrolments e ON s.id = e.studentId
WHERE s.id IS NULL;

