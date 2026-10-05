# Write with quorum settings
curl -X PUT \
  -H "Content-Type: application/json" \
  -d '{"name":"Aditya Gupta","course":"BCA","cgpa":9.5}' \
  "http://localhost:8098/buckets/consistency_demo/keys/S101?w=quorum"

# Read using quorum
curl \
  "http://localhost:8098/buckets/consistency_demo/keys/S101?r=quorum"

# Write with ONE consistency level
curl -X PUT \
  -H "Content-Type: application/json" \
  -d '{"name":"Rahul Sharma","course":"BCA","cgpa":8.7}' \
  "http://localhost:8098/buckets/consistency_demo/keys/S102?w=one"

# Read using ONE consistency level
curl \
  "http://localhost:8098/buckets/consistency_demo/keys/S102?r=one"

# Write with ALL consistency level
curl -X PUT \
  -H "Content-Type: application/json" \
  -d '{"name":"Priya Singh","course":"BCA","cgpa":9.1}' \
  "http://localhost:8098/buckets/consistency_demo/keys/S103?w=all"

# Read using ALL consistency level
curl \
  "http://localhost:8098/buckets/consistency_demo/keys/S103?r=all"

# Riak quorum values:
# ONE    - operation requires one replica
# QUORUM - operation requires a majority of replicas
# ALL    - operation requires all replicas
