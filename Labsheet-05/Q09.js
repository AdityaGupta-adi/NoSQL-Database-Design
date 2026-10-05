# Store user JSON documents

curl -X PUT \
  -H "Content-Type: application/json" \
  -d '{"id":101,"name":"Aditya Gupta","age":21,"city":"Roorkee","preferences":["AI","MongoDB"]}' \
  http://localhost:8098/buckets/query_users/keys/U101

curl -X PUT \
  -H "Content-Type: application/json" \
  -d '{"id":102,"name":"Rahul Sharma","age":22,"city":"Delhi","preferences":["Java","NoSQL"]}' \
  http://localhost:8098/buckets/query_users/keys/U102

curl -X PUT \
  -H "Content-Type: application/json" \
  -d '{"id":103,"name":"Priya Singh","age":21,"city":"Roorkee","preferences":["Python","AI"]}' \
  http://localhost:8098/buckets/query_users/keys/U103

curl -X PUT \
  -H "Content-Type: application/json" \
  -d '{"id":104,"name":"Aman Verma","age":23,"city":"Haridwar","preferences":["MongoDB","Python"]}' \
  http://localhost:8098/buckets/query_users/keys/U104

# Retrieve individual users
curl http://localhost:8098/buckets/query_users/keys/U101
curl http://localhost:8098/buckets/query_users/keys/U102
curl http://localhost:8098/buckets/query_users/keys/U103
curl http://localhost:8098/buckets/query_users/keys/U104

# Application-level query by city
curl http://localhost:8098/buckets/query_users/keys/U101 | jq 'select(.city=="Roorkee")'
curl http://localhost:8098/buckets/query_users/keys/U102 | jq 'select(.city=="Roorkee")'
curl http://localhost:8098/buckets/query_users/keys/U103 | jq 'select(.city=="Roorkee")'
curl http://localhost:8098/buckets/query_users/keys/U104 | jq 'select(.city=="Roorkee")'

# Application-level query by age
curl http://localhost:8098/buckets/query_users/keys/U101 | jq 'select(.age==21)'
curl http://localhost:8098/buckets/query_users/keys/U102 | jq 'select(.age==21)'
curl http://localhost:8098/buckets/query_users/keys/U103 | jq 'select(.age==21)'
curl http://localhost:8098/buckets/query_users/keys/U104 | jq 'select(.age==21)'

# Application-level query by preference
curl http://localhost:8098/buckets/query_users/keys/U101 | jq 'select(.preferences | index("AI"))'
curl http://localhost:8098/buckets/query_users/keys/U102 | jq 'select(.preferences | index("AI"))'
curl http://localhost:8098/buckets/query_users/keys/U103 | jq 'select(.preferences | index("AI"))'
curl http://localhost:8098/buckets/query_users/keys/U104 | jq 'select(.preferences | index("AI"))'
