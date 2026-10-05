# Store user profile and preferences
curl -X PUT \
  -H "Content-Type: application/json" \
  -d '{"name":"Aditya Gupta","email":"aditya@example.com","city":"Roorkee","language":"English","theme":"Dark","notifications":true}' \
  http://localhost:8098/buckets/user_profiles/keys/U101

# Store another user profile
curl -X PUT \
  -H "Content-Type: application/json" \
  -d '{"name":"Rahul Sharma","email":"rahul@example.com","city":"Delhi","language":"Hindi","theme":"Light","notifications":false}' \
  http://localhost:8098/buckets/user_profiles/keys/U102

# Retrieve user profile
curl http://localhost:8098/buckets/user_profiles/keys/U101

# Update user preferences
curl -X PUT \
  -H "Content-Type: application/json" \
  -d '{"name":"Aditya Gupta","email":"aditya@example.com","city":"Roorkee","language":"Hindi","theme":"Light","notifications":true}' \
  http://localhost:8098/buckets/user_profiles/keys/U101

# Retrieve updated profile
curl http://localhost:8098/buckets/user_profiles/keys/U101
