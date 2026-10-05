# Start HBase shell
hbase shell

# Create CMS table
create 'CMS', 'content', 'author', 'metadata'

# Insert content records
put 'CMS', 'C101', 'content:title', 'MongoDB Basics'
put 'CMS', 'C101', 'content:body', 'Introduction to MongoDB'
put 'CMS', 'C101', 'author:name', 'Aditya Gupta'
put 'CMS', 'C101', 'author:email', 'aditya@example.com'
put 'CMS', 'C101', 'metadata:category', 'Database'
put 'CMS', 'C101', 'metadata:status', 'Published'

put 'CMS', 'C102', 'content:title', 'HBase Tutorial'
put 'CMS', 'C102', 'content:body', 'Introduction to HBase'
put 'CMS', 'C102', 'author:name', 'Rahul Sharma'
put 'CMS', 'C102', 'author:email', 'rahul@example.com'
put 'CMS', 'C102', 'metadata:category', 'NoSQL'
put 'CMS', 'C102', 'metadata:status', 'Draft'

# Retrieve content
get 'CMS', 'C101'

# Update content
put 'CMS', 'C101', 'content:title', 'MongoDB Complete Basics'
put 'CMS', 'C101', 'metadata:status', 'Updated'

# Retrieve updated content
get 'CMS', 'C101'

# Delete content record
deleteall 'CMS', 'C102'

# Display remaining content
scan 'CMS'
