// MySQL

CREATE DATABASE CollegeDB;
USE CollegeDB;

CREATE TABLE Student (
    Student_ID INT PRIMARY KEY,
    Name VARCHAR(50),
    Course VARCHAR(50),
    Semester INT,
    Marks INT
);

INSERT INTO Student VALUES
(1, 'Aditya Gupta', 'BCA', 5, 90),
(2, 'Rahul Sharma', 'BCA', 5, 85),
(3, 'Priya Singh', 'BCA', 5, 92),
(4, 'Aman Verma', 'BCA', 4, 80),
(5, 'Neha Joshi', 'BCA', 4, 88);

SELECT * FROM Student;

// MongoDB

use CollegeDB

db.Students.insertMany([
{Student_ID:1,Name:"Aditya Gupta",Course:"BCA",Semester:5,Marks:90},
{Student_ID:2,Name:"Rahul Sharma",Course:"BCA",Semester:5,Marks:85},
{Student_ID:3,Name:"Priya Singh",Course:"BCA",Semester:5,Marks:92},
{Student_ID:4,Name:"Aman Verma",Course:"BCA",Semester:4,Marks:80},
{Student_ID:5,Name:"Neha Joshi",Course:"BCA",Semester:4,Marks:88}
])

db.Students.find()
