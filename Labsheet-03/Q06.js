use LabSheet3DB

db.PageVisits.insertMany([
  {
    page:"Home",
    userId:101,
    device:"Mobile",
    browser:"Chrome",
    location:"Roorkee",
    time:new Date()
  },
  {
    page:"Home",
    userId:102,
    device:"Laptop",
    browser:"Chrome",
    location:"Delhi",
    time:new Date()
  },
  {
    page:"Products",
    userId:103,
    device:"Mobile",
    browser:"Firefox",
    location:"Roorkee",
    time:new Date()
  },
  {
    page:"Home",
    userId:104,
    device:"Mobile",
    browser:"Chrome",
    location:"Haridwar",
    time:new Date()
  },
  {
    page:"Products",
    userId:105,
    device:"Laptop",
    browser:"Edge",
    location:"Delhi",
    time:new Date()
  }
])

db.PageVisits.aggregate([
  {$group:{
    _id:"$page",
    visits:{$sum:1}
  }},
  {$sort:{visits:-1}}
])

db.PageVisits.aggregate([
  {$group:{
    _id:"$device",
    count:{$sum:1}
  }},
  {$sort:{count:-1}}
])
