# Install Riak KV on Linux
sudo apt update
sudo apt install -y curl

# Start Riak KV service
sudo systemctl start riak

# Check Riak status
riak-admin status

# Create and store student record
curl -X PUT \
  -H "Content-Type: application/json" \
  -d '{"rollNumber":101,"name":"Aditya Gupta","department":"BCA","semester":5,"cgpa":9.5}' \
  http://localhost:8098/buckets/students/keys/101

# Retrieve student record
curl http://localhost:8098/buckets/students/keys/101

# Update student record
curl -X PUT \
  -H "Content-Type: application/json" \
  -d '{"rollNumber":101,"name":"Aditya Gupta","department":"BCA","semester":6,"cgpa":9.5}' \
  http://localhost:8098/buckets/students/keys/101

# Retrieve updated record
curl http://localhost:8098/buckets/students/keys/101

# Delete student record
curl -X DELETE \
  http://localhost:8098/buckets/students/keys/101
