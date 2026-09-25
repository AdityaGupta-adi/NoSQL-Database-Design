use LabSheet3DB

db.Inventory.insertMany([
  {
    product:"Laptop",
    stock:5,
    minimumStock:10,
    supplier:"ABC Electronics",
    restockingDate:new Date("2026-10-01")
  },
  {
    product:"Mobile",
    stock:20,
    minimumStock:10,
    supplier:"XYZ Mobiles",
    restockingDate:new Date("2026-10-10")
  },
  {
    product:"Camera",
    stock:3,
    minimumStock:8,
    supplier:"Camera World",
    restockingDate:new Date("2026-09-28")
  }
])

db.Inventory.find({
  $expr:{
    $lte:["$stock","$minimumStock"]
  }
})

db.Inventory.find({
  $expr:{
    $lt:["$stock","$minimumStock"]
  }
})
