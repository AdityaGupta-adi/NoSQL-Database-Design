# Create initial shopping cart
curl -X PUT \
  -H "Content-Type: application/json" \
  -d '{"userId":"U101","products":[],"cartTotal":0}' \
  http://localhost:8098/buckets/transaction_cart/keys/U101

# Operation 1: Add item to cart
curl -X PUT \
  -H "Content-Type: application/json" \
  -d '{"userId":"U101","products":[{"productId":"P101","name":"Laptop","quantity":1,"price":60000}],"cartTotal":60000}' \
  http://localhost:8098/buckets/transaction_cart/keys/U101

# Operation 2: Update quantity
curl -X PUT \
  -H "Content-Type: application/json" \
  -d '{"userId":"U101","products":[{"productId":"P101","name":"Laptop","quantity":2,"price":60000}],"cartTotal":120000}' \
  http://localhost:8098/buckets/transaction_cart/keys/U101

# Operation 3: Add another item and update total
curl -X PUT \
  -H "Content-Type: application/json" \
  -d '{"userId":"U101","products":[{"productId":"P101","name":"Laptop","quantity":2,"price":60000},{"productId":"P102","name":"Mouse","quantity":2,"price":500}],"cartTotal":121000}' \
  http://localhost:8098/buckets/transaction_cart/keys/U101

# Retrieve final cart
curl http://localhost:8098/buckets/transaction_cart/keys/U101

# Riak KV does not provide traditional multi-key ACID transactions
# like a relational database.
# Related operations may require application-level coordination.
# Partial failures can leave related data in different states.
