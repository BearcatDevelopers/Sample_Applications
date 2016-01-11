# ruby has a couple of fun things that are similar to other languages

# Data Types:
# strings
string = "There are strings! Right?"
# booleans
thisIstrue = TRUE
thisIsFalse = FALSE
# Integers
int = 10

# Data Structures
# Arrays
# to declare an array, set a variable, then equal it to an open square bracket.
array = []
array[0] = "Hello!"

puts array[0]

# Hashes
# A hash is an array with key- pairs instead of an indexed list like an array is.

h = {:lolar => "Sun", :lunar => "Moon"}

h.each do { |key, value|  }
  puts value
end
