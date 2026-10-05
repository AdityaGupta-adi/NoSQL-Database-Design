# Start HBase shell
hbase shell

# Create EventLogs table
create 'EventLogs', 'event', 'user', 'status'

# Insert sample events
put 'EventLogs', 'EV101', 'event:event_id', 'EV101'
put 'EventLogs', 'EV101', 'event:timestamp', '2026-10-05 10:00:00'
put 'EventLogs', 'EV101', 'event:type', 'login'
put 'EventLogs', 'EV101', 'user:user_id', 'U101'
put 'EventLogs', 'EV101', 'user:name', 'Aditya Gupta'
put 'EventLogs', 'EV101', 'status:status', 'success'

put 'EventLogs', 'EV102', 'event:event_id', 'EV102'
put 'EventLogs', 'EV102', 'event:timestamp', '2026-10-05 10:05:00'
put 'EventLogs', 'EV102', 'event:type', 'file-upload'
put 'EventLogs', 'EV102', 'user:user_id', 'U102'
put 'EventLogs', 'EV102', 'user:name', 'Rahul Sharma'
put 'EventLogs', 'EV102', 'status:status', 'success'

put 'EventLogs', 'EV103', 'event:event_id', 'EV103'
put 'EventLogs', 'EV103', 'event:timestamp', '2026-10-05 10:10:00'
put 'EventLogs', 'EV103', 'event:type', 'failed-login'
put 'EventLogs', 'EV103', 'user:user_id', 'U103'
put 'EventLogs', 'EV103', 'user:name', 'Priya Singh'
put 'EventLogs', 'EV103', 'status:status', 'failed'

# Retrieve event using row key
get 'EventLogs', 'EV101'

# Display all events
scan 'EventLogs'
