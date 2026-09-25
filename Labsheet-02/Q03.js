use CollegeDB

db.Orders.insertMany([
  {
    Order_ID: 1,
    Customer: {Customer_ID: 101, Name: "Aditya Gupta"},
    Products: [
      {Name: "Laptop", Quantity: 1, Price: 50000},
      {Name: "Mouse", Quantity: 2, Price: 500}
    ]
  },
  {
    Order_ID: 2,
    Customer: {Customer_ID: 102, Name: "Rahul Sharma"},
    Products: [
      {Name: "Keyboard", Quantity: 1, Price: 1200},
      {Name: "Mouse", Quantity: 1, Price: 500}
    ]
  },
  {
    Order_ID: 3,
    Customer: {Customer_ID: 103, Name: "Priya Singh"},
    Products: [
      {Name: "Monitor", Quantity: 1, Price: 15000}
    ]
  },
  {
    Order_ID: 4,
    Customer: {Customer_ID: 104, Name: "Aman Verma"},
    Products: [
      {Name: "Laptop", Quantity: 1, Price: 55000}
    ]
  },
  {
    Order_ID: 5,
    Customer: {Customer_ID: 105, Name: "Neha Joshi"},
    Products: [
      {Name: "Headphones", Quantity: 2, Price: 2000}
    ]
  }
])

db.Orders.find({"Customer.Name":"Aditya Gupta"})

db.Orders.updateOne(
  {Order_ID:1,"Products.Name":"Mouse"},
  {$set:{"Products.$.Quantity":3}}
)

db.Orders.aggregate([
  {$project:{
    Order_ID:1,
    Customer:1,
    TotalAmount:{
      $sum:{
        $map:{
          input:"$Products",
          as:"p",
          in:{$multiply:["$$p.Quantity","$$p.Price"]}
        }
      }
    }
  }}
])

db.Orders.aggregate([
  {$project:{
    Order_ID:1,
    Customer:1,
    TotalAmount:{
      $sum:{
        $map:{
          input:"$Products",
          as:"p",
          in:{$multiply:["$$p.Quantity","$$p.Price"]}
        }
      }
    }
  }},
  {$match:{TotalAmount:{$gt:10000}}}
])
