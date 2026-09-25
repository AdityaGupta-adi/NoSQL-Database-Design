// MongoDB

use CollegeDB

db.Students.insertMany([
{Student_ID:1,Name:"Aditya Gupta",Course:"BCA",Marks:90},
{Student_ID:2,Name:"Rahul Sharma",Course:"BCA",Marks:85},
{Student_ID:3,Name:"Priya Singh",Course:"MCA",Marks:92},
{Student_ID:4,Name:"Aman Verma",Course:"BCA",Marks:80},
{Student_ID:5,Name:"Neha Joshi",Course:"MCA",Marks:88}
])

db.Students.find()

// Cassandra

CREATE KEYSPACE CollegeDB
WITH replication={
'class':'SimpleStrategy',
'replication_factor':1
};

USE CollegeDB;

CREATE TABLE Students(
Student_ID INT PRIMARY KEY,
Name TEXT,
Course TEXT,
Marks INT
);

INSERT INTO Students VALUES(1,'Aditya Gupta','BCA',90);
INSERT INTO Students VALUES(2,'Rahul Sharma','BCA',85);
INSERT INTO Students VALUES(3,'Priya Singh','MCA',92);
INSERT INTO Students VALUES(4,'Aman Verma','BCA',80);
INSERT INTO Students VALUES(5,'Neha Joshi','MCA',88);

SELECT * FROM Students;

// Neo4j

CREATE
(s1:Student {Student_ID:1,Name:"Aditya Gupta",Course:"BCA",Marks:90}),
(s2:Student {Student_ID:2,Name:"Rahul Sharma",Course:"BCA",Marks:85}),
(s3:Student {Student_ID:3,Name:"Priya Singh",Course:"MCA",Marks:92}),
(s4:Student {Student_ID:4,Name:"Aman Verma",Course:"BCA",Marks:80}),
(s5:Student {Student_ID:5,Name:"Neha Joshi",Course:"MCA",Marks:88});

MATCH (s:Student)
RETURN s;
