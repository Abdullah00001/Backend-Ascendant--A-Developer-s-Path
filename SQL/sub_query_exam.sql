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

