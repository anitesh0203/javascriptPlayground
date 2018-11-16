number for numbers of any kind: integer or floating-point.
string for strings. A string may have one or more characters, there’s no separate single-character type.
boolean for true/false.
null for unknown values – a standalone type that has a single value null.
undefined for unassigned values – a standalone type that has a single value undefined.
object for more complex data structures.
symbol for unique identifiers.


Addition ‘+’ concatenates strings
Almost all mathematical operations convert values to numbers. With a notable exception of the addition +. If one of the added values is a string, then another one is also converted to a string.

Then it concatenates (joins) them:

 alert( 1 + '2' ); // '12' (string to the right)
alert( '1' + 2 ); // '12' (string to the left)
That only happens when one of the arguments is a string. Otherwise, values are converted to numbers.