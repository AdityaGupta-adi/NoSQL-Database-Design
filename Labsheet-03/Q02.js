use LabSheet3DB

db.EventLogs.insertMany([
  {userId:101,event:"login",time:new Date()},
  {userId:101,event:"failed-login",time:new Date()},
  {userId:101,event:"failed-login",time:new Date()},
  {userId:102,event:"login",time:new Date()},
  {userId:102,event:"file-upload",time:new Date()},
  {userId:103,event:"password-change",time:new Date()},
  {userId:103,event:"failed-login",time:new Date()}
])

db.EventLogs.aggregate([
  {$match:{event:"failed-login"}},
  {$group:{_id:"$userId",attempts:{$sum:1}}},
  {$match:{attempts:{$gte:2}}}
])

db.EventLogs.aggregate([
  {$group:{_id:"$event",count:{$sum:1}}},
  {$sort:{count:-1}}
])
