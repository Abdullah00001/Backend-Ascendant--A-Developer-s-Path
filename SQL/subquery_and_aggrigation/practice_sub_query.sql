-- Determine the third highest salary and which employee receives it?

SELECT *
FROM EMPLOYEES
WHERE salary=(
	SELECT DISTINCT salary
	FROM EMPLOYEES
	GROUP BY salary
	ORDER BY salary DESC
	LIMIT 1 OFFSET 2
);


-- Determine the third lowest salary and which employee receives it?


SELECT *
FROM EMPLOYEES
WHERE salary=(
	SELECT DISTINCT salary
	FROM EMPLOYEES
	GROUP BY salary
	ORDER BY salary ASC
	LIMIT 1 OFFSET 2
)
LIMIT 1;


-- Which employee has been hired after Steven?

SELECT *
FROM EMPLOYEES
WHERE hire_date > (
	SELECT DISTINCT(hire_date)
	FROM EMPLOYEES
	WHERE first_name LIKE '%Steven%' OR last_name LIKE '%Steven%'
	LIMIT 1
)
LIMIT 1;

-- With common table expression solve the question 1 and 2
-- Question 1 : Determine the third highest salary and which employee receives it?

WITH third_lowes_salary AS (
	SELECT DISTINCT salary 
	FROM EMPLOYEES
	GROUP BY salary
	ORDER BY salary DESC
	LIMIT 1 OFFSET 2
)

SELECT *
FROM EMPLOYEES AS E
WHERE E.salary = (
	SELECT salary
	FROM third_lowes_salary
);

-- Question 2 : Determine the third lowest salary and which employee receives it?

WITH third_lowest_salary AS (
SELECT DISTINCT salary
	FROM EMPLOYEES
	GROUP BY salary
	ORDER BY salary ASC
	LIMIT 1 OFFSET 2
)

SELECT *
FROM EMPLOYEES AS E
WHERE E.salary=(
	SELECT salary
	FROM third_lowest_salary
)
LIMIT 1;