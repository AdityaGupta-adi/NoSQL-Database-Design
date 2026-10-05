# Create and store user session
curl -X PUT \
  -H "Content-Type: application/json" \
  -d '{"sessionId":"S101","userId":"U101","loginTime":"2026-10-05 10:00:00","status":"Active"}' \
  http://localhost:8098/buckets/user_sessions/keys/S101

# Store another session
curl -X PUT \
  -H "Content-Type: application/json" \
  -d '{"sessionId":"S102","userId":"U102","loginTime":"2026-10-05 10:15:00","status":"Active"}' \
  http://localhost:8098/buckets/user_sessions/keys/S102

# Retrieve session using its key
curl http://localhost:8098/buckets/user_sessions/keys/S101

# Update session status
curl -X PUT \
  -H "Content-Type: application/json" \
  -d '{"sessionId":"S101","userId":"U101","loginTime":"2026-10-05 10:00:00","status":"Logged-Out"}' \
  http://localhost:8098/buckets/user_sessions/keys/S101

# Retrieve updated session
curl http://localhost:8098/buckets/user_sessions/keys/S101
