# Start HBase shell
hbase shell

# Create Blog table
create 'Blog', 'blog', 'author', 'comments'

# Insert three blog records
put 'Blog', 'B101', 'blog:title', 'MongoDB Basics'
put 'Blog', 'B101', 'blog:category', 'Database'
put 'Blog', 'B101', 'blog:content', 'Introduction to MongoDB'
put 'Blog', 'B101', 'author:name', 'Aditya Gupta'
put 'Blog', 'B101', 'author:email', 'aditya@example.com'
put 'Blog', 'B101', 'comments:comment1', 'Very useful article'

put 'Blog', 'B102', 'blog:title', 'HBase Tutorial'
put 'Blog', 'B102', 'blog:category', 'NoSQL'
put 'Blog', 'B102', 'blog:content', 'Introduction to HBase'
put 'Blog', 'B102', 'author:name', 'Rahul Sharma'
put 'Blog', 'B102', 'author:email', 'rahul@example.com'
put 'Blog', 'B102', 'comments:comment1', 'Good explanation'

put 'Blog', 'B103', 'blog:title', 'Cassandra Basics'
put 'Blog', 'B103', 'blog:category', 'Database'
put 'Blog', 'B103', 'blog:content', 'Introduction to Cassandra'
put 'Blog', 'B103', 'author:name', 'Priya Singh'
put 'Blog', 'B103', 'author:email', 'priya@example.com'
put 'Blog', 'B103', 'comments:comment1', 'Helpful content'

# Retrieve a particular blog using row key
get 'Blog', 'B101'

# Display all blogs
scan 'Blog'
