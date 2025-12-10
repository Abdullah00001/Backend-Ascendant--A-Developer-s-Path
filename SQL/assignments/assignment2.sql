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


-- Hard Level 4

-- Count how many tasks were created per day (group by created_at::date).

SELECT created_at,COUNT(id)
FROM tasks
GROUP BY created_at
LIMIT 50 OFFSET 50;

-- Group tasks by due_date month and count tasks per month.

SELECT TO_CHAR(due_date::date,'MM') AS DueMonth,COUNT(id) AS Count
FROM tasks
GROUP BY DueMonth;

-- Find the day with the highest number of new users.

SELECT DATE(created_at),COUNT(id)
FROM users
GROUP BY created_at
ORDER BY COUNT(id) DESC
LIMIT 1
;

-- Count how many activity logs each action type has.

SELECT action as ActionType,COUNT(id)
FROM activity_logs
GROUP BY action;

-- Find which actions occurred more than 500 times (HAVING).

SELECT DISTINCT(action) as ActionType
FROM activity_logs
GROUP BY action
HAVING COUNT(id)>500
LIMIT 1;

-- Extra Hard

-- For each project_id in tasks table, count total tasks.

SELECT project_id AS ProjectId,COUNT(id) AS COUNT
FROM tasks
GROUP BY project_id
LIMIT 10 OFFSET 0;

-- Find project_ids that have more than 5 HIGH priority tasks. (insted of 50 here i use 5 cause db havent that much task in any project)

SELECT project_id AS ProjectId,COUNT(id) AS COUNT
FROM tasks
WHERE priority='HIGH'
GROUP BY project_id
HAVING COUNT(id)>5;

-- Find the top 3 users who created the most tasks.

SELECT created_by,COUNT(id)
FROM tasks
GROUP BY created_by
ORDER BY COUNT(id) DESC
LIMIT 3;

-- Count tasks per due_date and show only dates that have more than 5 tasks.(same here also for database records and result i reduce 20 to 5)

SELECT DATE(due_date)
FROM tasks
GROUP BY due_date
HAVING COUNT(id)>5
LIMIT 10;


-- From activity_logs, group by user_id and show users who have at least 5 logs.(for get results i reduce 100 to 5)

SELECT user_id AS UserId
FROM activity_logs
GROUP BY user_id
HAVING COUNT(id)>5
LIMIT 10 OFFSET 0;