# Start HBase shell
hbase shell

# Create session table with TTL of 300 seconds
create 'UserSessions',
  {NAME => 'session', TTL => 300}

# Insert session records
put 'UserSessions', 'S101', 'session:user_id', 'U101'
put 'UserSessions', 'S101', 'session:username', 'Aditya'
put 'UserSessions', 'S101', 'session:status', 'Active'

put 'UserSessions', 'S102', 'session:user_id', 'U102'
put 'UserSessions', 'S102', 'session:username', 'Rahul'
put 'UserSessions', 'S102', 'session:status', 'Active'

put 'UserSessions', 'S103', 'session:user_id', 'U103'
put 'UserSessions', 'S103', 'session:username', 'Priya'
put 'UserSessions', 'S103', 'session:status', 'Active'

# Display current session data
scan 'UserSessions'

# Check table schema and TTL configuration
describe 'UserSessions'

# Retrieve a session
get 'UserSessions', 'S101'

# After TTL expires, scan again to verify expiration
scan 'UserSessions'
