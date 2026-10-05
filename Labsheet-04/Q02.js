# Start HBase shell
hbase shell

# Create Employee table
create 'Employee', 'personal', 'job'

# Insert employee records
put 'Employee', 'E101', 'personal:name', 'Amit Kumar'
put 'Employee', 'E101', 'personal:city', 'Roorkee'
put 'Employee', 'E101', 'job:department', 'IT'
put 'Employee', 'E101', 'job:salary', '45000'

put 'Employee', 'E102', 'personal:name', 'Neha Sharma'
put 'Employee', 'E102', 'personal:city', 'Delhi'
put 'Employee', 'E102', 'job:department', 'HR'
put 'Employee', 'E102', 'job:salary', '50000'

put 'Employee', 'E103', 'personal:name', 'Rahul Singh'
put 'Employee', 'E103', 'personal:city', 'Haridwar'
put 'Employee', 'E103', 'job:department', 'Finance'
put 'Employee', 'E103', 'job:salary', '55000'

# Get employee
get 'Employee', 'E101'

# Display all employees
scan 'Employee'

# Update employee salary
put 'Employee', 'E101', 'job:salary', '48000'

# Verify update
get 'Employee', 'E101'

# Delete employee
deleteall 'Employee', 'E103'

# Display remaining employees
scan 'Employee'
