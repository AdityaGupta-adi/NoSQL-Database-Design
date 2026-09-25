use LabSheet3DB

db.Orders.insertMany([
  {
    orderId:1,
    customer:"Aditya",
    products:[
      {name:"Laptop",quantity:1,price:60000},
      {name:"Mouse",quantity:2,price:500}
    ]
  },
  {
    orderId:2,
    customer:"Rahul",
    products:[
      {name:"Mobile",quantity:1,price:30000}
    ]
  },
  {
    orderId:3,
    customer:"Aditya",
    products:[
      {name:"Keyboard",quantity:1,price:1200}
    ]
  }
])

db.Orders.find({customer:"Aditya"})

db.Orders.aggregate([
  {$unwind:"$products"},
  {$group:{
    _id:"$orderId",
    total:{
      $sum:{
        $multiply:[
          "$products.quantity",
          "$products.price"
        ]
      }
    }
  }}
])
