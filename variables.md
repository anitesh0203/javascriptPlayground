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

alert(2 + 2 + '1' ); // "41" and not "221"
alert( 2 - '1' ); // 1
alert( '6' / '2' ); // 3

alert( '2' > 1 ); // true, string '2' becomes a number 2
alert( '01' == 1 ); // true, string '01' becomes a number 1

alert( null > 0 );  // (1) false
alert( null == 0 ); // (2) false
alert( null >= 0 ); // (3) true

alert( undefined > 0 ); // false (1)
alert( undefined < 0 ); // false (2)
alert( undefined == 0 ); // false (3)
bacause undefined becomes NaN 

A number 0, an empty string "", null, undefined and NaN become false. Because of that they are called “falsy” values.

A Function Expression is used inside the statement: let sayHi = ...;, as a value. It’s not a code block. The semicolon ; is recommended at the end of statements, no matter what is the value. So the semicolon here is not related to the Function Expression itself in any way, it just terminates the statement.