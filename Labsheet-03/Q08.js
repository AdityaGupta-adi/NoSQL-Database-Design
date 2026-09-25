use LabSheet3DB

db.Carts.insertOne({
  userId:101,
  products:[
    {name:"Laptop",price:60000,quantity:1},
    {name:"Mouse",price:500,quantity:2}
  ]
})

db.Carts.updateOne(
  {userId:101},
  {$push:{
    products:{
      name:"Keyboard",
      price:1200,
      quantity:1
    }
  }}
)

db.Carts.updateOne(
  {userId:101,"products.name":"Mouse"},
  {$set:{"products.$.quantity":3}}
)

db.Carts.updateOne(
  {userId:101},
  {$pull:{products:{name:"Keyboard"}}}
)

db.Carts.aggregate([
  {$match:{userId:101}},
  {$unwind:"$products"},
  {$group:{
    _id:"$userId",
    cartValue:{
      $sum:{
        $multiply:[
          "$products.price",
          "$products.quantity"
        ]
      }
    }
  }}
])
