// creact challenge queue (fake!)
initialize();

/*
 * Functions
 */


/* initialize
 *
 */
function initialize() {
  // variables
  var queue  = [];
  var cookie;
  // read cookie
  cookie = getCookie('queue');
  
  console.log("cookie info is " + cookie);
  // display information
}


/* showQueue
 * 
 * this will eventually read from a database.
 * right now it reads cookies
 */
function showQueue(queue) {
  // variables 
  var ulNode = document.getElementById('queue');
  var liNode = document.createElement('LI');
  
  // loop through queue
  for (var i = 0; i < queue.length; i++) {
    // add to DOM
    var textNode = document.createTextNode(queue[i]);
    liNode.appendChild(textNode);
    ulNode.appendChild(liNode);
  }
}


/* setCookie
 */
function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  var expires = "expires="+d.toUTCString();
  document.cookie = cname + "=" + cvalue + "; " + expires;
}


/* getCookie
 */
function getCookie(cname) {
  var name = cname + "=";
  var ca = document.cookie.split(';');
  for(var i=0; i<ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0)==' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length,c.length);
    }
  }
  return "";
}