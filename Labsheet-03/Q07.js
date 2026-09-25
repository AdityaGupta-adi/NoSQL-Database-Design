use LabSheet3DB

db.Articles.insertMany([
  {
    title:"MongoDB Tutorial",
    author:"Aditya",
    category:"Database",
    tags:["MongoDB","NoSQL"],
    status:"Published"
  },
  {
    title:"Python Basics",
    author:"Rahul",
    category:"Programming",
    tags:["Python"],
    status:"Published"
  },
  {
    title:"AI Introduction",
    author:"Priya",
    category:"AI",
    tags:["AI","ML"],
    status:"Unpublished"
  }
])

db.Articles.find({status:"Published"})

db.Articles.find({
  status:"Published",
  category:"Database"
})

db.Articles.find({status:"Unpublished"})
