# Start HBase shell
hbase shell

# Create Student table
create 'Student', 'personal', 'academic'

# Insert five student records
put 'Student', '101', 'personal:name', 'Aditya Gupta'
put 'Student', '101', 'personal:department', 'BCA'
put 'Student', '101', 'academic:semester', '5'
put 'Student', '101', 'academic:cgpa', '9.5'

put 'Student', '102', 'personal:name', 'Rahul Sharma'
put 'Student', '102', 'personal:department', 'BCA'
put 'Student', '102', 'academic:semester', '5'
put 'Student', '102', 'academic:cgpa', '8.7'

put 'Student', '103', 'personal:name', 'Priya Singh'
put 'Student', '103', 'personal:department', 'BCA'
put 'Student', '103', 'academic:semester', '5'
put 'Student', '103', 'academic:cgpa', '9.1'

put 'Student', '104', 'personal:name', 'Aman Verma'
put 'Student', '104', 'personal:department', 'BCA'
put 'Student', '104', 'academic:semester', '4'
put 'Student', '104', 'academic:cgpa', '8.4'

put 'Student', '105', 'personal:name', 'Neha Joshi'
put 'Student', '105', 'personal:department', 'BCA'
put 'Student', '105', 'academic:semester', '4'
put 'Student', '105', 'academic:cgpa', '9.0'

# Display records
scan 'Student'
