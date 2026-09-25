use StudentDB

db.createCollection("Faculty")
db.createCollection("Courses")

printjson(db.getCollectionNames())
