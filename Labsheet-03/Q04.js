use LabSheet3DB

db.Products.insertMany([
  {
    name:"Laptop",
    category:"Laptop",
    price:60000,
    processor:"Intel i5",
    ram:"16GB"
  },
  {
    name:"Mobile",
    category:"Mobile",
    price:30000,
    storage:"128GB",
    camera:"50MP"
  },
  {
    name:"Camera",
    category:"Camera",
    price:45000,
    lens:"24MP",
    zoom:"10x"
  }
])

db.Products.find({
  category:"Laptop",
  ram:"16GB"
})

db.Products.find({
  category:"Mobile",
  storage:"128GB"
})

db.Products.find({
  category:"Camera",
  camera:"50MP"
})
