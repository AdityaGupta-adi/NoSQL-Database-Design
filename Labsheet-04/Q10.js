# Start HBase shell
hbase shell

# Create table with pre-split regions
create 'RegionalStudents',
  {NAME => 'student'},
  {SPLITS => ['R2', 'R4', 'R6', 'R8']}

# Insert records across different row-key ranges
put 'RegionalStudents', 'R1_101', 'student:name', 'Aditya Gupta'
put 'RegionalStudents', 'R2_102', 'student:name', 'Rahul Sharma'
put 'RRegionalStudents', 'R3_103', 'student:name', 'Priya Singh'
put 'RegionalStudents', 'R4_104', 'student:name', 'Aman Verma'
put 'RegionalStudents', 'R5_105', 'student:name', 'Neha Joshi'
put 'RegionalStudents', 'R6_106', 'student:name', 'Amit Kumar'
put 'RegionalStudents', 'R7_107', 'student:name', 'Riya Singh'
put 'RegionalStudents', 'R8_108', 'student:name', 'Karan Verma'

# Display records
scan 'RegionalStudents'

# Check region information
describe 'RegionalStudents'

# HBase region information
list_regions 'RegionalStudents'

# RegionServers distribute regions and handle read/write requests.
