# MongoDB Single Server

sudo systemctl start mongod
sudo systemctl status mongod

mongosh

use SingleServerDB

db.createCollection("Students")

db.Students.insertMany([
{Student_ID:1,Name:"Aditya Gupta",Course:"BCA",Marks:90},
{Student_ID:2,Name:"Rahul Sharma",Course:"BCA",Marks:85},
{Student_ID:3,Name:"Priya Singh",Course:"MCA",Marks:92},
{Student_ID:4,Name:"Aman Verma",Course:"BCA",Marks:80},
{Student_ID:5,Name:"Neha Joshi",Course:"MCA",Marks:88}
])

db.Students.find()

db.Students.findOne({Student_ID:1})

db.Students.updateOne(
{Student_ID:1},
{$set:{Marks:95}}
)

db.Students.deleteOne({Student_ID:5})

db.Students.find()
