#if -else statements work very similar to other functions in ruby
#they open with IF, the middle is 'elsif', then 'else', and is closed with
#end, the same way you close loops and functions

# you're already familiar with for loops
for list in 1..10
  if list == 2
    puts "snakeyes"
  elsif list == 10
    puts list
    puts "End of list"
  else
    puts list
  end
end
