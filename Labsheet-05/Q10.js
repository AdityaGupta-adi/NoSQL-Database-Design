# Create and activate a Riak Set bucket type
riak-admin bucket-type create user_sets '{"props":{"datatype":"set"}}'
riak-admin bucket-type activate user_sets

# Add user interests to a set
curl -X POST \
  -H "Content-Type: application/json" \
  -d '{"add":["AI","Python","MongoDB"]}' \
  http://localhost:8098/types/user_sets/buckets/interests/datatypes/U101

# Retrieve the set
curl http://localhost:8098/types/user_sets/buckets/interests/datatypes/U101

# Add more interests
curl -X POST \
  -H "Content-Type: application/json" \
  -d '{"add":["NoSQL","Java"]}' \
  http://localhost:8098/types/user_sets/buckets/interests/datatypes/U101

# Retrieve updated set
curl http://localhost:8098/types/user_sets/buckets/interests/datatypes/U101

# Remove an element
# The Riak response provides the context required for
# context-aware set modifications.
curl -X POST \
  -H "Content-Type: application/json" \
  -d '{"remove":["Java"]}' \
  http://localhost:8098/types/user_sets/buckets/interests/datatypes/U101

# Retrieve set after removal
curl http://localhost:8098/types/user_sets/buckets/interests/datatypes/U101

# Check membership through application-level logic
curl http://localhost:8098/types/user_sets/buckets/interests/datatypes/U101

# Create another user's interest set
curl -X POST \
  -H "Content-Type: application/json" \
  -d '{"add":["Python","MongoDB","AI"]}' \
  http://localhost:8098/types/user_sets/buckets/interests/datatypes/U102

# Retrieve second set
curl http://localhost:8098/types/user_sets/buckets/interests/datatypes/U102

# Common elements between U101 and U102
# The returned JSON sets can be compared by application logic
# to find common interests.
