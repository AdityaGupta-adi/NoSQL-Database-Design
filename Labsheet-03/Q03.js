use LabSheet3DB

db.Blogs.insertMany([
  {
    title:"MongoDB Basics",
    author:"Aditya",
    category:"Database",
    tags:["MongoDB","NoSQL"],
    comments:[
      {user:"Rahul",text:"Good article"}
    ],
    published:true,
    date:new Date()
  },
  {
    title:"Python Programming",
    author:"Priya",
    category:"Programming",
    tags:["Python","Coding"],
    comments:[
      {user:"Aman",text:"Useful"}
    ],
    published:true,
    date:new Date()
  },
  {
    title:"NoSQL Database Design",
    author:"Aditya",
    category:"Database",
    tags:["NoSQL","MongoDB"],
    comments:[],
    published:false,
    date:new Date()
  }
])

db.Blogs.find({tags:"MongoDB"})

db.Blogs.find({
  category:"Database",
  tags:"NoSQL"
})

db.Blogs.find({
  tags:{$all:["MongoDB","NoSQL"]}
})
