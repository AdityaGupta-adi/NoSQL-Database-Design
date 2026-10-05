# Create shopping cart for user
curl -X PUT \
  -H "Content-Type: application/json" \
  -d '{"userId":"U101","products":[{"productId":"P101","quantity":1,"price":60000},{"productId":"P102","quantity":2,"price":500}]}' \
  http://localhost:8098/buckets/shopping_carts/keys/U101

# Retrieve shopping cart
curl http://localhost:8098/buckets/shopping_carts/keys/U101

# Add a product to the cart
curl -X PUT \
  -H "Content-Type: application/json" \
  -d '{"userId":"U101","products":[{"productId":"P101","quantity":1,"price":60000},{"productId":"P102","quantity":2,"price":500},{"productId":"P103","quantity":1,"price":1200}]}' \
  http://localhost:8098/buckets/shopping_carts/keys/U101

# Update product quantity
curl -X PUT \
  -H "Content-Type: application/json" \
  -d '{"userId":"U101","products":[{"productId":"P101","quantity":1,"price":60000},{"productId":"P102","quantity":3,"price":500},{"productId":"P103","quantity":1,"price":1200}]}' \
  http://localhost:8098/buckets/shopping_carts/keys/U101

# Retrieve updated cart
curl http://localhost:8098/buckets/shopping_carts/keys/U101

# Remove a product from the cart
curl -X PUT \
  -H "Content-Type: application/json" \
  -d '{"userId":"U101","products":[{"productId":"P101","quantity":1,"price":60000},{"productId":"P103","quantity":1,"price":1200}]}' \
  http://localhost:8098/buckets/shopping_carts/keys/U101

# Retrieve final cart
curl http://localhost:8098/buckets/shopping_carts/keys/U101
