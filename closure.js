function makeCounter() {
    let count = 0;
  
    return function() {
      return count++; // has access to the outer counter
    };
  }
  
  let counter = makeCounter();
  
  console.log( counter() ); // 0
  console.log( counter() ); // 1
  console.log( counter() ); // 2

  /**
   * 1. Environment Record – an object that has all local variables as its properties 
   *    (and some other information like the value of this).
     2.  A reference to the outer lexical environment, usually the one associated with the 
        code lexically right outside of it (outside of the current curly brackets).
        [Only function do so ]
   */

   function closureMe() {
       let count = 0 ;

       {
            count+=1;
            console.log(count);
       }
   }

   closureMe();
   closureMe();   closureMe();   closureMe();

   // All will print 1 

   function anotherClosure() {
    let count = 0 ;

    return function powerMe (){
         count+=1;
         return count;
        // console.log(count);
     }
   }

   let mine =  anotherClosure();
   console.log(mine());
   console.log(mine());
   console.log(mine());   console.log(mine());