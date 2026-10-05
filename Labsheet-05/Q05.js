# Store a string value
curl -X PUT \
  -H "Content-Type: text/plain" \
  --data "Aditya Gupta" \
  http://localhost:8098/buckets/data_types/keys/string_value

# Retrieve string value
curl http://localhost:8098/buckets/data_types/keys/string_value

# Store a JSON document
curl -X PUT \
  -H "Content-Type: application/json" \
  -d '{"name":"Aditya","course":"BCA","semester":5}' \
  http://localhost:8098/buckets/data_types/keys/json_value

# Retrieve JSON document
curl http://localhost:8098/buckets/data_types/keys/json_value

# Store a list as JSON
curl -X PUT \
  -H "Content-Type: application/json" \
  -d '["MongoDB","Riak","Cassandra","Neo4j"]' \
  http://localhost:8098/buckets/data_types/keys/list_value

# Retrieve list
curl http://localhost:8098/buckets/data_types/keys/list_value

# Data structure:
# Bucket = data_types
# Key    = string_value / json_value / list_value
# Value  = stored data associated with the key
