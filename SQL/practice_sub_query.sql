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
WHERE salary in (
		SELECT DISTINCT salary
		FROM EMPLOYEES
		ORDER BY salary ASC
		LIMIT 10
	)
	ORDER BY salary ASC
	LIMIT 10;


SELECT DISTINCT *
FROM EMPLOYEES
WHERE salary=(
	SELECT DISTINCT salary
	FROM EMPLOYEES
	GROUP BY salary
	ORDER BY salary ASC
	LIMIT 1 OFFSET 2
)
LIMIT 1 ;