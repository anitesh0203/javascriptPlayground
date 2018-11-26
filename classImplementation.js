/**
 * functional class pattern 
 */

 function  Boy(name){
    this.name =name;
 }

 var obj = new Boy('anitesh');

 console.log('the boy is ', obj.name);


 /**
  * factory class pattern
  */

  // same without the new keyword

  function Girl(name){
    this.name =name;

    return { name :this.name };
 }
  var cbj = Girl('seema');

  console.log(cbj.name);

  /**
   * prototype based classes 
   * define the class using new keyword and 
   * add the properties using the prototype chaining 
   */

    function Smile(name) {
        this.name = name;
    };

    var laugh = new Smile('muskaan');

    Smile.prototype.sam = function  () {
        console.log('laugh');

    };

    laugh.prototype.sam = function () {  // wont work prototype works for classes 
            console.log('not the other one ');
    };
laugh.sam();
    



