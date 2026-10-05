# Start HBase shell
hbase shell

# Create table with multiple column families
create 'StudentDetails', 'personal', 'academic', 'contact'

# Insert data using different qualifiers
put 'StudentDetails', 'S101', 'personal:name', 'Aditya Gupta'
put 'StudentDetails', 'S101', 'personal:gender', 'Male'
put 'StudentDetails', 'S101', 'academic:course', 'BCA'
put 'StudentDetails', 'S101', 'academic:semester', '5'
put 'StudentDetails', 'S101', 'academic:cgpa', '9.5'
put 'StudentDetails', 'S101', 'contact:city', 'Roorkee'
put 'StudentDetails', 'S101', 'contact:phone', '9876543210'

put 'StudentDetails', 'S102', 'personal:name', 'Rahul Sharma'
put 'StudentDetails', 'S102', 'personal:gender', 'Male'
put 'StudentDetails', 'S102', 'academic:course', 'BCA'
put 'StudentDetails', 'S102', 'academic:semester', '5'
put 'StudentDetails', 'S102', 'academic:cgpa', '8.7'
put 'StudentDetails', 'S102', 'contact:city', 'Delhi'
put 'StudentDetails', 'S102', 'contact:phone', '9876543211'

# Retrieve one student
get 'StudentDetails', 'S101'

# Display complete table
scan 'StudentDetails'

# Column-family specific scan
scan 'StudentDetails', {COLUMNS => ['academic']}

# Display a specific qualifier
get 'StudentDetails', 'S101', {COLUMN => 'personal:name'}
