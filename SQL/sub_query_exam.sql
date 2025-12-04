-- Level 1

-- Find the oldest task (by created_at) using a subquery.

SELECT *
FROM tasks
WHERE id in (
	SELECT id
	FROM taks
	WHERE created_at
	ORDER BY  ASC
);

-- Show all tasks whose created_at = the earliest task’s created_at.

SELECT *
FROM tasks
WHERE created_at=(
	SELECT created_at
	FROM tasks
	ORDER BY created_at DESC
	LIMIT 1
)
LIMIT 10;

-- Show users who created more tasks than the average tasks per user.


WITH task_and_user_count AS (
	SELECT COUNT(DISTINCT created_by) AS toal_users, COUNT(*) AS total_tasks
	FROM tasks
)

,avg_tasks_per_user AS (
	SELECT tuc.total_tasks/tuc.toal_users AS avg_task
	FROM task_and_user_count tuc
)

SELECT created_by
FROM tasks t
GROUP BY created_by
HAVING COUNT(t.id)>(
	SELECT avg_task FROM avg_tasks_per_user
)
ORDER BY created_by ASC
LIMIT 10;


-- Level 2

-- For each user, show their total tasks in a subquery column.

SELECT u.id as user_id,(
SELECT count(*)
FROM tasks t
WHERE t.created_by=u.id
) AS task_count
FROM users u
LIMIT 10;

-- OPTIMIZED

SELECT created_by,COUNT(id)
FROM tasks
GROUP BY created_by
LIMIT 10;

-- For each user, show the total activity logs they generated.


SELECT u.id as user_id,(
SELECT count(*)
FROM activity_logs a
WHERE a.user_id=u.id
) AS activity_count
FROM users u
LIMIT 10;

-- OPTIMIZED

SELECT user_id,COUNT(id)
FROM activity_logs
GROUP BY user_id
LIMIT 10;

-- Level 3

-- Show tasks whose project_id exists in the tasks table more than 5 times.

SELECT *
FROM tasks
WHERE project_id IN (
	SELECT DISTINCT project_id
	FROM tasks
	GROUP BY project_id
	HAVING COUNT(project_id)>5
)
LIMIT 20;

-- Show users who have never created a task (using NOT IN).

SELECT full_name
FROM users u
WHERE u.id NOT IN (
	SELECT DISTINCT t.created_by
	FROM tasks t
	GROUP BY created_by
)
LIMIT 10;

-- Level 4

-- Show users who have at least 1 activity log.

SELECT id,full_name
FROM users u
WHERE EXISTS (
	SELECT 1
	FROM activity_logs al
	WHERE u.id=al.user_id
)
LIMIT 10;

-- Show users who have no activity logs.

SELECT id,full_name
FROM users u
WHERE EXISTS (
	SELECT 0
	FROM activity_logs al
	WHERE u.id=al.user_id
)
LIMIT 10;


