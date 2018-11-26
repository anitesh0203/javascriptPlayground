var request = new XMLHttpRequest();
request.onreadystatechange = function () {
    var DONE = this.DONE || 4;
    if (this.readyState === DONE){
        alert(this.readyState);
    }
};
request.open('GET', 'somepage.xml', true);
request.setRequestHeader('X-Requested-With', 'XMLHttpRequest');  // Tells server that this call is made for ajax purposes.
                                                                 // Most libraries like jQuery/Prototype/Dojo do this
request.send(null);  // No data needs to be sent along with the request.