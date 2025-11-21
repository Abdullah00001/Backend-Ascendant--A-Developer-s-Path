-- Group users by role and show how many users per role.

SELECT role,COUNT(id)
FROM users
GROUP BY role;

-- Group tasks by status and count how many tasks in each status.
SELECT status,COUNT(id)
FROM tasks
GROUP BY status;

-- Group tasks by priority and count priority distribution.

SELECT priority,COUNT(id)
FROM tasks
GROUP BY priority;

-- Group tasks by created_by to show how many tasks each user created.

SELECT created_by,COUNT(id)
FROM tasks
GROUP BY created_by
LIMIT 10 OFFSET 0;

-- Group comments by user_id and count number of comments each user posted.

SELECT user_id,COUNT(id)
FROM task_comments
GROUP BY user_id
LIMIT 10 OFFSET 0;