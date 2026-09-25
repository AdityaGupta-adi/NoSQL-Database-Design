CREATE KEYSPACE CollegeDB
WITH replication = {
    'class': 'SimpleStrategy',
    'replication_factor': 1
};

USE CollegeDB;

CREATE TABLE Students (
    Student_ID INT PRIMARY KEY,
    Name TEXT,
    Course TEXT,
    Semester INT,
    Marks INT
);

INSERT INTO Students VALUES (1,'Aditya Gupta','BCA',5,90);
INSERT INTO Students VALUES (2,'Rahul Sharma','BCA',5,85);
INSERT INTO Students VALUES (3,'Priya Singh','MCA',3,92);
INSERT INTO Students VALUES (4,'Aman Verma','BCA',4,80);
INSERT INTO Students VALUES (5,'Neha Joshi','MCA',2,88);

SELECT * FROM Students;

SELECT * FROM Students
WHERE Course='BCA' ALLOW FILTERING;

UPDATE Students
SET Marks=95
WHERE Student_ID=1;

DELETE FROM Students
WHERE Student_ID=5;
