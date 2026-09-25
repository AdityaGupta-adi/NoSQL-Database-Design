use StudentDB

db.Students.updateOne(
    { RollNumber: 102 },
    { $set: { Department: "MCA" } }
)
