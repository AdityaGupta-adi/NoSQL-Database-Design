use CollegeDB

db.createCollection("Students")

db.Students.insertMany([
{Student_ID:1,Name:"Aditya Gupta",Course:"BCA",Semester:5,Marks:90},
{Student_ID:2,Name:"Rahul Sharma",Course:"BCA",Semester:5,Marks:85},
{Student_ID:3,Name:"Priya Singh",Course:"MCA",Semester:3,Marks:92},
{Student_ID:4,Name:"Aman Verma",Course:"BCA",Semester:4,Marks:80},
{Student_ID:5,Name:"Neha Joshi",Course:"MCA",Semester:2,Marks:88}
])

db.Students.find()

db.Students.find({Course:"BCA"})

db.Students.updateOne(
{Student_ID:1},
{$set:{Marks:95}}
)

db.Students.deleteOne({Student_ID:5})

db.Students.countDocuments()
