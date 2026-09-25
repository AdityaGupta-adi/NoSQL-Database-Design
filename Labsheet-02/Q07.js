CREATE
(s1:Student {Student_ID:1, Name:"Aditya Gupta"}),
(s2:Student {Student_ID:2, Name:"Rahul Sharma"}),
(s3:Student {Student_ID:3, Name:"Priya Singh"}),
(s4:Student {Student_ID:4, Name:"Aman Verma"}),
(s5:Student {Student_ID:5, Name:"Neha Joshi"}),
(c1:Course {Name:"BCA"}),
(c2:Course {Name:"MCA"}),
(c3:Course {Name:"BBA"})

CREATE
(s1)-[:ENROLLED_IN]->(c1),
(s2)-[:ENROLLED_IN]->(c1),
(s3)-[:ENROLLED_IN]->(c2),
(s4)-[:ENROLLED_IN]->(c1),
(s5)-[:ENROLLED_IN]->(c2)

MATCH (s:Student)
RETURN s;

MATCH (s:Student)-[:ENROLLED_IN]->(c:Course {Name:"BCA"})
RETURN s;

MATCH (s:Student {Name:"Aditya Gupta"})-[:ENROLLED_IN]->(c:Course)
RETURN c;

MATCH (s:Student {Name:"Neha Joshi"}),
(c:Course {Name:"BBA"})
CREATE (s)-[:ENROLLED_IN]->(c);

MATCH (s:Student {Name:"Neha Joshi"})-[r:ENROLLED_IN]->(c:Course {Name:"BBA"})
DELETE r;
