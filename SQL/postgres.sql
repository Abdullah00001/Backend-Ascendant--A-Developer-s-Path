CREATE TABLE users (
id INT NOT NULL,
firstName VARCHAR(300) NOT NULL,
lastName VARCHAR(300) NOT NULL,
email VARCHAR(600) NOT NULL UNIQUE,
PRIMARY KEY (id)
);

INSERT INTO users (firstName,lastName,id,email)
VALUES
('Abdullah','Chowdhury',1,'abdullah@gmail.com');

SELECT *
FROM users;

UPDATE users
SET 
email='abdullahbinomarchowdhury@gmail.com',
firstName='Abdullah Bin',
lastName='Omar Chowdhury'
WHERE id=1;

DELETE FROM users
WHERE id=1;