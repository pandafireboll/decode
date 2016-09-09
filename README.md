Decrypt string

Here’s a simple strategy to encode a message: before each character of the message, add a digit and series of other characters. The digit should correspond to the number of characters that will precede the message’s actual, meaningful character.

For example, the word “hey” could be coded with “0h2abe1zy”. To read the message, you would:

♣	skip 0, find the ‘h’

♣	skip 2 (‘a’ and ‘b’), find ‘e’

♣	skip 1 (‘z’), find ‘y’

Other examples:

♣	‘2xyz’ would be decoded as just ‘z’

♣	‘0h2zyi2467’ would be decoded as ‘hi7’


Write a function named “decode”, which takes a single parameter of a string encoded in this format. It should return the decoded word in string form. Demonstrate good coding practices (clear variable names, comments, etc).

You may assume that coded strings are always legally encoded with this system. You may also assume that the digit for the number of characters to skip will just be a single digit, not a multi-digit number (that is, you’ll never need to skip more than 9 characters)—but we welcome solutions that can handle multi-digit characters to skip.
