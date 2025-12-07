--Subquery Retake Exam On 7 Mistake's

-- Retrieve the tasks that are the newest task inside their own project. (Solved)

WITH newest_tasks_date_per_project AS (
	SELECT project_id,MAX(created_at) AS created_at
	FROM tasks
	GROUP BY project_id
)

SELECT project_id,title,id
FROM tasks t
WHERE EXISTS (
	SELECT 1
	FROM newest_tasks_date_per_project AS ntdpp
	WHERE ntdpp.project_id=t.project_id AND ntdpp.created_at=t.created_at
)
ORDER BY project_id ASC
LIMIT 10;

-- Find all users who do NOT have any activity logs.

SELECT *
FROM users u
WHERE NOT EXISTS (
	SELECT 1
	FROM activity_logs al
	WHERE al.user_id=u.id
)
LIMIT 10;

-- Show the earliest created task (return full row).

SELECT *
FROM tasks
WHERE created_at = (
	SELECT MIN(created_at)
	FROM tasks
)
LIMIT 1
;

-- Find users who created more tasks than the average (tasks per user).

WITH computed_user_and_task_count AS (
	SELECT COUNT(id) AS task_count, COUNT(DISTINCT created_by) user_count
	FROM tasks
),


avg_tasks_per_user AS (
	SELECT cuat.task_count::FLOAT/cuat.user_count::FLOAT AS avg_tasks
	FROM computed_user_and_task_count AS cuat
)

SELECT created_by
FROM tasks t
GROUP BY created_by
HAVING COUNT(id)> (
	SELECT avpu.avg_tasks
	FROM avg_tasks_per_user AS avpu
)
LIMIT 10;

-- Select tasks that have the highest priority in their own project. (Solved)

SELECT *
FROM tasks AS t1
WHERE (project_id,priority) IN (
	SELECT project_id,priority
	FROM tasks
	GROUP BY project_id,priority
	HAVING priority='HIGH'
)

-- Show all users who HAVE at least one task created by them. (Solved)

SELECT *
FROM users AS u
WHERE EXISTS (
	SELECT 1
	FROM tasks AS t
	WHERE u.id=t.created_by
	GROUP BY t.created_by
	HAVING COUNT(t.id)>0
)
LIMIT 10;


-- In the tasks table, list all days (date only) where the number of tasks created on that day is greater than 5. (Solved)

SELECT DISTINCT Date(created_at)
FROM tasks AS t1
WHERE Date(created_at) IN (
	SELECT DISTINCT Date(created_at)
	FROM tasks 
	GROUP BY Date(created_at)
	HAVING COUNT(id)>5
);

