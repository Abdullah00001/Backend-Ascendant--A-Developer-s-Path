-- Hard Level 2

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

-- Hard Level 3

-- Find users who created more than 10 tasks.

SELECT created_by,COUNT(id)
FROM tasks
GROUP BY created_by
HAVING COUNT(id)>5
LIMIT 10 OFFSET 0;

-- Find tasks that have more than 5 comments.

SELECT task_id AS Tasks,COUNT(id) AS Comments
FROM task_comments
GROUP BY task_id
HAVING COUNT(id)>5
LIMIT 10 OFFSET 0;

-- Find task_ids that have more than 2 attachments.

SELECT task_id AS Tasks, COUNT(id) AS ATttachments
FROM attachments
GROUP BY task_id
HAVING COUNT(id)>2
LIMIT 10 OFFSET 0;

-- Show task statuses that have at least 100 tasks.

SELECT status As Status,COUNT(id)
FROM tasks
GROUP BY status
HAVING COUNT(id)>100
LIMIT 10 OFFSET 0;

-- Show users who posted at least 20 comments.

SELECT user_id,COUNT(id)
FROM task_comments
GROUP BY user_id
HAVING COUNT(id)>20
LIMIT 10 OFFSET 0;