use LabSheet3DB

db.Reviews.insertMany([
  {
    product:"Laptop",
    customer:"Aditya",
    rating:5,
    review:"Excellent"
  },
  {
    product:"Laptop",
    customer:"Rahul",
    rating:4,
    review:"Good"
  },
  {
    product:"Laptop",
    customer:"Priya",
    rating:5,
    review:"Very good"
  },
  {
    product:"Mobile",
    customer:"Aman",
    rating:4,
    review:"Good"
  },
  {
    product:"Mobile",
    customer:"Neha",
    rating:3,
    review:"Average"
  }
])

db.Reviews.aggregate([
  {
    $group:{
      _id:"$product",
      averageRating:{$avg:"$rating"},
      numberOfReviews:{$sum:1}
    }
  }
])
