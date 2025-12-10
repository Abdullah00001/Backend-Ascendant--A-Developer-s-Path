-- Write a query to show the distinct department names

SELECT DISTINCT Department
FROM employees;

-- Write a query to show the LastNames of the employees sorted by  descending ages

SELECT LastName
FROM employees
ORDER BY age DESC;

-- Write a query to show the employee LastName whose age is greater than 30 and works in Marketing department.

SELECT LastName
FROM employees
WHERE age>30 AND Department='Marketing';

-- Write a query to select all the employees.

SELECT *
FROM employees;

-- Write a query to get employees whose names includes ‘son'.

SELECT *
FROM employees
WHERE  FirstName LIKE '%son%' OR LastName LIKE '%son%';

-- Write a query to get the engineers.

SELECT *
FROM employees
WHERE Department LIKE OR '%Engineer%';