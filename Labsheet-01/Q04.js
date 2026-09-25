use StudentDB

db.Students.insertMany([
    {
        RollNumber: 102,
        Name: "Rahul Sharma",
        Department: "BCA",
        Semester: 5,
        CGPA: 8.7
    },
    {
        RollNumber: 103,
        Name: "Priya Singh",
        Department: "BCA",
        Semester: 5,
        CGPA: 9.1
    },
    {
        RollNumber: 104,
        Name: "Aman Verma",
        Department: "BCA",
        Semester: 4,
        CGPA: 8.4
    },
    {
        RollNumber: 105,
        Name: "Neha Joshi",
        Department: "BCA",
        Semester: 4,
        CGPA: 9.0
    }
])
