# Start HBase shell
hbase shell

# Create WebsiteCounter table
create 'WebsiteCounter', 'counter'

# Initialize page counters
put 'WebsiteCounter', 'home', 'counter:views', '0'
put 'WebsiteCounter', 'products', 'counter:views', '0'
put 'WebsiteCounter', 'about', 'counter:views', '0'

# Increment page-view counters
incr 'WebsiteCounter', 'home', 'counter:views', 1
incr 'WebsiteCounter', 'home', 'counter:views', 1
incr 'WebsiteCounter', 'home', 'counter:views', 1

incr 'WebsiteCounter', 'products', 'counter:views', 1
incr 'WebsiteCounter', 'products', 'counter:views', 1

incr 'WebsiteCounter', 'about', 'counter:views', 1

# Display updated counters
get 'WebsiteCounter', 'home'
get 'WebsiteCounter', 'products'
get 'WebsiteCounter', 'about'

scan 'WebsiteCounter'
