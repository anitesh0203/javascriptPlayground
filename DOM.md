document.documentElement- html node 

document.body = html body 

documnet.head = html head 


childNodes - the collection of all child nodes in the tree , not an array its a collection 

children – only those children that are element nodes.
firstElementChild, lastElementChild – first and last element children.
previousElementSibling, nextElementSibling – neighbour elements.
parentElement – parent element.

There are 6 main methods to search for nodes in DOM:

Method	Searches by...	Can call on an element?	Live?
getElementById	id	-	-
getElementsByName	name	-	✔
getElementsByTagName	tag or '*'	✔	✔
getElementsByClassName	class	✔	✔
querySelector	CSS-selector	✔	-
querySelectorAll	CSS-selector	✔	-


