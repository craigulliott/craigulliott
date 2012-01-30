$(document).ready(function(){
  log('hello');
});


// some useful code I like to have
// ------------------------------------
// most functions we name space, but this one is just too common
function log(message) {
  if ( window.console && window.console.log ){
    window.console.log(message);
  }
};

// make some conditional jqiery code more readable with an exists function
jQuery.fn.exists = function(){ 
  return this.length>0;
}
