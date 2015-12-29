# Here is the syntax for a "for" loop:

# "for <variable> in <condition>
#     return i"

for i in range(20):
    print(i, "is a great number!")

# don't forget that indexing in python starts at 0!
# By the way, my favorite number is 13

#combining for loops (above) and if/else statements is frequently
#how logic is executed in programming. Here is an example below.

for i in range(20):
    if i == 13:
        print(i, "is my favorite number!")
    else:
        print(i, "is a great number!")
