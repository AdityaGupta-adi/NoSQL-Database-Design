use StudentDB

db.Students.find(
    {},
    {
        _id: 0,
        Name: 1,
        Department: 1
    }
)
