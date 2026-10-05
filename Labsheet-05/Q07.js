# Create multiple buckets and insert records

# Students bucket
curl -X PUT \
  -H "Content-Type: application/json" \
  -d '{"id":101,"name":"Aditya Gupta","course":"BCA"}' \
  http://localhost:8098/buckets/students_scale/keys/101

curl -X PUT \
  -H "Content-Type: application/json" \
  -d '{"id":102,"name":"Rahul Sharma","course":"BCA"}' \
  http://localhost:8098/buckets/students_scale/keys/102

# Employees bucket
curl -X PUT \
  -H "Content-Type: application/json" \
  -d '{"id":201,"name":"Amit Kumar","department":"IT"}' \
  http://localhost:8098/buckets/employees_scale/keys/201

curl -X PUT \
  -H "Content-Type: application/json" \
  -d '{"id":202,"name":"Neha Sharma","department":"HR"}' \
  http://localhost:8098/buckets/employees_scale/keys/202

# Products bucket
curl -X PUT \
  -H "Content-Type: application/json" \
  -d '{"id":301,"name":"Laptop","price":60000}' \
  http://localhost:8098/buckets/products_scale/keys/301

curl -X PUT \
  -H "Content-Type: application/json" \
  -d '{"id":302,"name":"Mobile","price":30000}' \
  http://localhost:8098/buckets/products_scale/keys/302

# Retrieve records
curl http://localhost:8098/buckets/students_scale/keys/101
curl http://localhost:8098/buckets/employees_scale/keys/201
curl http://localhost:8098/buckets/products_scale/keys/301

# Riak distributes data across nodes using its
# distributed hash ring and supports horizontal scaling.
# More nodes can be added to increase storage and capacity.
