# MongoDB Sharding

mongod --configsvr --replSet configRS --port 27019 --dbpath /data/configdb

mongod --shardsvr --replSet shardRS1 --port 27018 --dbpath /data/shard1

mongod --shardsvr --replSet shardRS2 --port 27020 --dbpath /data/shard2

mongosh --port 27019

rs.initiate({
_id:"configRS",
configsvr:true,
members:[{_id:0,host:"localhost:27019"}]
})

mongosh --port 27018

rs.initiate({
_id:"shardRS1",
members:[{_id:0,host:"localhost:27018"}]
})

mongosh --port 27020

rs.initiate({
_id:"shardRS2",
members:[{_id:0,host:"localhost:27020"}]
})

mongos --configdb configRS/localhost:27019 --port 27017

mongosh --port 27017

sh.addShard("shardRS1/localhost:27018")
sh.addShard("shardRS2/localhost:27020")

sh.enableSharding("CollegeDB")

use CollegeDB

db.Students.insertMany([
{Student_ID:1,Name:"Student1",Course:"BCA",Marks:81},
{Student_ID:2,Name:"Student2",Course:"BCA",Marks:82},
{Student_ID:3,Name:"Student3",Course:"BCA",Marks:83},
{Student_ID:4,Name:"Student4",Course:"BCA",Marks:84},
{Student_ID:5,Name:"Student5",Course:"BCA",Marks:85},
{Student_ID:6,Name:"Student6",Course:"BCA",Marks:86},
{Student_ID:7,Name:"Student7",Course:"BCA",Marks:87},
{Student_ID:8,Name:"Student8",Course:"BCA",Marks:88},
{Student_ID:9,Name:"Student9",Course:"BCA",Marks:89},
{Student_ID:10,Name:"Student10",Course:"BCA",Marks:90},
{Student_ID:11,Name:"Student11",Course:"BCA",Marks:91},
{Student_ID:12,Name:"Student12",Course:"BCA",Marks:92},
{Student_ID:13,Name:"Student13",Course:"BCA",Marks:93},
{Student_ID:14,Name:"Student14",Course:"BCA",Marks:94},
{Student_ID:15,Name:"Student15",Course:"BCA",Marks:95},
{Student_ID:16,Name:"Student16",Course:"BCA",Marks:80},
{Student_ID:17,Name:"Student17",Course:"BCA",Marks:81},
{Student_ID:18,Name:"Student18",Course:"BCA",Marks:82},
{Student_ID:19,Name:"Student19",Course:"BCA",Marks:83},
{Student_ID:20,Name:"Student20",Course:"BCA",Marks:84}
])

sh.shardCollection(
"CollegeDB.Students",
{Student_ID:1}
)

sh.status()

db.Students.find()
