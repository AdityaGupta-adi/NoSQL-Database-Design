use LabSheet3DB

db.StudentActivities.insertMany([
  {
    studentId:101,
    name:"Aditya Gupta",
    courses:["NoSQL","Python"],
    attendance:85,
    skills:["MongoDB","Python"],
    activities:["Lab","Assignment","Quiz"]
  },
  {
    studentId:102,
    name:"Rahul Sharma",
    courses:["NoSQL","Java"],
    attendance:92,
    skills:["Java","MongoDB"],
    activities:["Lab","Project"]
  },
  {
    studentId:103,
    name:"Priya Singh",
    courses:["NoSQL","AI"],
    attendance:78,
    skills:["Python","AI"],
    activities:["Quiz","Assignment"]
  }
])

db.StudentActivities.find({attendance:{$gte:80}})
db.StudentActivities.find({activities:"Project"})
db.StudentActivities.find({skills:"MongoDB"})
