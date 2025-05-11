USE Xelvato;

CREATE TABLE IF NOT EXISTS Staffs(
id INT AUTO_INCREMENT,
name VARCHAR(50) NOT NULL,
email VARCHAR(80) UNIQUE NOT NULL ,
city VARCHAR(150) NOT NULL ,
designation VARCHAR(150) NOT NULL ,
salary INT NOT NULL ,
joinedAt DATE NOT NULL,
gender ENUM('Male','Female'),
createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
PRIMARY KEY(id)
); 

INSERT INTO Staffs (name, email, city, designation, salary, joinedAt, gender) VALUES
('Miranda Morales', 'kathy74@yahoo.com', 'Jeffreymouth', 'Sales', 78303, '2023-03-27', 'Female'),
('Daniel Gates', 'kelsey26@gmail.com', 'West Jessica', 'HR', 118074, '2023-05-06', 'Female'),
('Anthony Campbell', 'johnjenkins@mercer-rios.com', 'Jasonville', 'HR', 65923, '2023-07-02', 'Female'),
('Tracy Carpenter', 'jcampbell@mitchell.com', 'Amandamouth', 'Manager', 79903, '2024-02-25', 'Male'),
('Billy Burke', 'jeffreysuarez@braun.com', 'North Christine', 'Designer', 104836, '2023-07-23', 'Male'),
('Samantha Raymond', 'nstark@thomas-martin.biz', 'South Dennisport', 'Developer', 109672, '2021-02-15', 'Female'),
('Jason Williams', 'benitezlauren@yahoo.com', 'Waltonfurt', 'Designer', 72074, '2020-09-25', 'Female'),
('Alexis Lewis', 'holmespatrick@weber-brown.com', 'North Saraside', 'Manager', 92149, '2023-08-29', 'Female'),
('Kaitlin Powers', 'edward74@anthony.net', 'Port Mark', 'Manager', 85835, '2020-10-06', 'Male'),
('Blake Brooks', 'anthonysmith@tran.com', 'South Michaelville', 'Sales', 92224, '2024-08-14', 'Male'),
('Sally Fox', 'jacqueline47@yahoo.com', 'Moniqueton', 'Designer', 41107, '2020-08-31', 'Male'),
('Paul Carpenter', 'cookmatthew@hotmail.com', 'South Kendra', 'Designer', 94338, '2024-03-14', 'Female'),
('Pamela Jones', 'maria37@rogers-allen.com', 'Pennyton', 'HR', 66933, '2020-10-23', 'Female'),
('Patty Carter', 'lward@hotmail.com', 'East Scott', 'HR', 118399, '2025-02-03', 'Female'),
('Timothy Chase', 'jeffreyjohnson@willis.com', 'Melissaborough', 'Developer', 108202, '2023-10-22', 'Male'),
('Jesus Li', 'scott20@yahoo.com', 'Charlesstad', 'Designer', 55062, '2024-03-14', 'Female'),
('Darren Allen', 'johnsonjudy@chandler.com', 'South Reginastad', 'Sales', 88419, '2022-10-20', 'Male'),
('Robin Mcintyre', 'samuel59@gmail.com', 'Lindsaystad', 'Developer', 88162, '2024-12-13', 'Female'),
('Jamie Garcia', 'aprilbennett@simmons.info', 'Nicoleville', 'HR', 41284, '2021-03-29', 'Male'),
('Sydney Williams', 'smithbrian@shaw-anderson.com', 'West Mallory', 'Manager', 105272, '2024-03-02', 'Female'),
('Susan Moody', 'anna55@yahoo.com', 'West Sandra', 'Sales', 51919, '2021-06-05', 'Female'),
('Margaret Long', 'joannarogers@gmail.com', 'East Jefferyberg', 'Manager', 60307, '2022-06-14', 'Female'),
('Christine Tucker', 'baileybrett@hotmail.com', 'East Kimberly', 'Developer', 60638, '2020-07-10', 'Female'),
('Meagan Ray', 'fbrown@hotmail.com', 'Hilltown', 'Manager', 101761, '2022-11-01', 'Male'),
('Katherine Reeves', 'hendrixsarah@fleming.com', 'West Stevenborough', 'Developer', 87800, '2020-03-28', 'Female'),
('Craig Jefferson', 'singhdavid@hudson-park.com', 'Port Leahfurt', 'Developer', 84492, '2024-07-27', 'Female'),
('Jade Lane', 'uanderson@yahoo.com', 'Port Victoria', 'Sales', 104585, '2022-10-27', 'Female'),
('John Fields', 'danielwilliams@johnson.info', 'West Joshua', 'Sales', 108577, '2023-06-10', 'Male'),
('Daniel Mcguire', 'bandrews@gmail.com', 'East Carlybury', 'HR', 75921, '2024-04-13', 'Male'),
('Teresa Mcknight', 'hchapman@yahoo.com', 'West Michellefort', 'Manager', 96453, '2020-12-13', 'Male'),
('Peter Carpenter', 'williamsheather@gmail.com', 'North Jacobport', 'Developer', 109229, '2022-03-02', 'Female'),
('Anne Combs', 'whitney91@hotmail.com', 'Adamchester', 'Sales', 82365, '2024-07-01', 'Female'),
('Nicholas Allen', 'brooke63@gmail.com', 'Kelseystad', 'Manager', 81237, '2022-11-05', 'Female'),
('Nicholas Lopez', 'xdalton@orr.com', 'Garzabury', 'Sales', 114679, '2023-08-08', 'Female'),
('Phillip Francis', 'kathleen05@yahoo.com', 'East Micheal', 'Developer', 107760, '2021-03-28', 'Male'),
('Richard Perez', 'samanthamiller@yahoo.com', 'East Jonathan', 'HR', 70804, '2023-04-09', 'Female'),
('Nicole Neal', 'andersonscott@newman-brown.biz', 'Lake Coreytown', 'HR', 116024, '2024-01-10', 'Male'),
('Jessica Peterson', 'lauraspencer@roth.com', 'Port Erikfort', 'Sales', 43458, '2025-03-09', 'Female'),
('Michael Green', 'james.smith@wright.com', 'East Patrick', 'Designer', 75050, '2024-07-01', 'Male'),
('Joshua Clark', 'todd.morris@jackson.com', 'North Hazel', 'Manager', 82347, '2022-04-22', 'Male'),
('Oliver Wood', 'sean.hernandez@kim.com', 'South Markport', 'Sales', 103712, '2023-03-13', 'Female'),
('Benjamin Scott', 'matthewthomas@lee.com', 'East Linda', 'Manager', 89872, '2024-09-21', 'Male'),
('Abigail Jackson', 'emily.collins@jackson.com', 'South Jefferytown', 'HR', 79461, '2021-06-10', 'Female'),
('Olivia Wright', 'brian.james@roberts.com', 'West Francis', 'Designer', 64838, '2022-10-12', 'Male'),
('David King', 'mary.bernard@brown.com', 'Port Colton', 'HR', 91267, '2023-05-05', 'Male'),
('Charlotte Turner', 'emily.martin@taylor.com', 'West Alexander', 'Sales', 92384, '2023-02-28', 'Female'),
('Grace Walker', 'james@adams.com', 'Central Jessica', 'Developer', 76000, '2021-09-30', 'Female'),
('Isaac Young', 'luiscunningham@ford.com', 'South Rachel', 'Sales', 84100, '2024-11-12', 'Male'),
('Henry Lee', 'thomas.mitchell@collins.com', 'North Raytown', 'HR', 89520, '2024-05-21', 'Male'),
('Sarah Hill', 'lucy.wilson@brown.com', 'East Juliette', 'Designer', 118350, '2022-12-07', 'Female'),
('James Robinson', 'james@garcia.com', 'South Robertston', 'Sales', 64056, '2022-01-23', 'Male'),
('Victoria Walker', 'morgan@allen.com', 'West Cassandra', 'HR', 79260, '2021-08-19', 'Female'),
('Emma Walker', 'olivia@jacobs.com', 'North Monicatown', 'Sales', 94110, '2020-11-05', 'Female'),
('Elizabeth Adams', 'kyle.carter@johnson.com', 'East Bridgetport', 'Manager', 83550, '2023-06-30', 'Female');


SELECT COUNT(id)
FROM Staffs;

-- total gender count base on gender 
SELECT COUNT(id)
FROM Staffs
WHERE gender='female';

-- total salary and total gender count base on gender 
SELECT gender ,COUNT(id) as count,SUM(salary) as totalSalary
FROM Staffs
GROUP BY gender;

-- Average Salary In Each City In Ascending Order

SELECT city,ROUND(AVG(salary)) as averageSalary
FROM Staffs
GROUP BY city
ORDER BY averageSalary ASC;

-- max salary 10 person who lives in same city

SELECT city,name,email,salary
FROM Staffs
WHERE city=(
SELECT city
FROM Staffs
ORDER BY salary DESC
LIMIT 1
)
ORDER BY salary DESC
LIMIT 10;

-- find the total payment base on payment method

CREATE TABLE IF NOT EXISTS Payments(
id INT AUTO_INCREMENT,
customerName VARCHAR(80) NOT NULL,
customerEmail VARCHAR(120) NOT NULL UNIQUE,
customerAddress VARCHAR(180) NOT NULL,
paymentMethod VARCHAR(200) NOT NULL,
productName VARCHAR(200) NOT NULL,
productQuantity INT NOT NULL,
productPrice INT NOT NULL,
deliveryCharge INT NOT NULL,
netPrice INT NOT NULL,
PRIMARY KEY(id)
);