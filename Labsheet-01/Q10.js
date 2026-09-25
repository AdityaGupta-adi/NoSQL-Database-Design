use StudentDB

db.Students.updateMany(
    { Department: "BCA" },
    { $set: { Semester: 6 } }
)
