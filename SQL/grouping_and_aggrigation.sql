SELECT *
FROM team_members
WHERE team_id=48869
ORDER BY id DESC
LIMIT 100;

SELECT team_id, COUNT(id)
FROM projects
GROUP BY team_id
ORDER BY team_id DESC
LIMIT 10;

SELECT created_by,COUNT(id)
FROM tasks
GROUP BY created_by
HAVING COUNT(id)>5
LIMIT 10;
