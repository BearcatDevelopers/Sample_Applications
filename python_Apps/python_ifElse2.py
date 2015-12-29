import datetime

currDate = datetime.date.today()
newYear = datetime.date(2016, 1, 1)
print (currDate)

if (currDate != newYear):
    print ("You are still in 2015!")
else:
    print ("Welcome to 2016!")
