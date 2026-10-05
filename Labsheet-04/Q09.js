# Start HBase shell
hbase shell

# Create table for large-scale application
create 'LargeScaleApp', 'data'

# Row-key strategy:
# Region prefix + timestamp + unique ID
# This helps distribute records across regions.

# Insert records using distributed row keys
put 'LargeScaleApp', 'R01_20261005_001', 'data:user', 'U101'
put 'LargeScaleApp', 'R02_20261005_002', 'data:user', 'U102'
put 'LargeScaleApp', 'R03_20261005_003', 'data:user', 'U103'
put 'LargeScaleApp', 'R04_20261005_004', 'data:user', 'U104'
put 'LargeScaleApp', 'R05_20261005_005', 'data:user', 'U105'

put 'LargeScaleApp', 'R01_20261005_006', 'data:user', 'U106'
put 'LargeScaleApp', 'R02_20261005_007', 'data:user', 'U107'
put 'LargeScaleApp', 'R03_20261005_008', 'data:user', 'U108'
put 'LargeScaleApp', 'R04_20261005_009', 'data:user', 'U109'
put 'LargeScaleApp', 'R05_20261005_010', 'data:user', 'U110'

# Display inserted records
scan 'LargeScaleApp'

# Retrieve records using row-key prefix
scan 'LargeScaleApp', {
  STARTROW => 'R01',
  STOPROW => 'R02'
}
