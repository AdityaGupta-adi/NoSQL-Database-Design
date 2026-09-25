create 'Students','personal','academic'

put 'Students','1','personal:Name','Aditya Gupta'
put 'Students','1','personal:Course','BCA'
put 'Students','1','academic:Semester','5'
put 'Students','1','academic:Marks','90'

put 'Students','2','personal:Name','Rahul Sharma'
put 'Students','2','personal:Course','BCA'
put 'Students','2','academic:Semester','5'
put 'Students','2','academic:Marks','85'

put 'Students','3','personal:Name','Priya Singh'
put 'Students','3','personal:Course','MCA'
put 'Students','3','academic:Semester','3'
put 'Students','3','academic:Marks','92'

put 'Students','4','personal:Name','Aman Verma'
put 'Students','4','personal:Course','BCA'
put 'Students','4','academic:Semester','4'
put 'Students','4','academic:Marks','80'

put 'Students','5','personal:Name','Neha Joshi'
put 'Students','5','personal:Course','MCA'
put 'Students','5','academic:Semester','2'
put 'Students','5','academic:Marks','88'

get 'Students','1'

put 'Students','1','academic:Marks','95'

scan 'Students'

deleteall 'Students','5'
