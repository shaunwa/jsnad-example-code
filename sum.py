import sys

total = 0
numbers = sys.argv[1:]

for number in numbers:
    total += int(number)

print(total)