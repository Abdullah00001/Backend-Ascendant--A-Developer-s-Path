--Subquery Retake Exam On 7 Mistake's

-- Retrieve the tasks that are the newest task inside their own project.

SELECT project_id,title,id
FROM tasks
WHERE created_at = (
	SELECT MAX(created_at)
	FROM tasks
)
GROUP BY project_id,title,id
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

-- Select tasks that have the highest priority in their own project.

SELECT t.project_id AS project_id, t.id AS task_id, t.priority AS priority
FROM tasks AS t
GROUP BY t.project_id,t.id,t.priority
HAVING t.priority = (
	SELECT MAX(priority)
	FROM tasks
)
ORDER BY project_id ASC
LIMIT 50;

-- Show all users who HAVE at least one task created by them.

SELECT t.created_by
FROM tasks AS t
GROUP BY t.created_by
HAVING COUNT(t.id)>1
LIMIT 10;

-- In the tasks table, list all days (date only) where the number of tasks created on that day is greater than 5.

SELECT t.created_at
FROM tasks t
GROUP BY t.created_at
HAVING COUNT(t.id)>5
;
