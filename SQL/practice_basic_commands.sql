DROP DATABASE IF EXISTS school;
CREATE DATABASE IF NOT EXISTS school;

USE school;

DROP TABLE IF EXISTS faculty;
DROP TABLE IF EXISTS students;

CREATE TABLE IF NOT EXISTS faculty (
    uuid INT UNIQUE NOT NULL,
    name VARCHAR(350) NOT NULL UNIQUE
);

CREATE TABLE IF NOT EXISTS students (
    uuid INT UNIQUE NOT NULL,
    name VARCHAR(200) NOT NULL,
    email VARCHAR(300) NOT NULL UNIQUE,
    studentId INT UNIQUE,
    address VARCHAR(500) NOT NULL
);

CREATE INDEX faculty_index
ON students (uuid,name);

CREATE INDEX students_index
ON students (email,studentId);