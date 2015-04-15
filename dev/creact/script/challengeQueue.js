// creact challenge queue (fake)

var queue = new Array;

initialize();



/* initialize
 *
 */
function initialize() {
  // variables
  var cookie;
  
  // read cookie & put into array
  cookie = getCookie('queue');
  
  if (cookie != "") {
    queue = cookie.split(',');
  }
  
  // display information
  showQueue();
  
  // give focus to text field
  document.getElementById('newChallengeInput').focus();
  
}


/* showQueue
 * 
 * this will eventually read from a database.
 * right now it reads cookies
 */
function showQueue() {
  // variables 
  var olNode = document.getElementById('queue');
  
  // loop through queue
  for (var i = 0; i < queue.length; i++) {
    // add to DOM
    var liNode = document.createElement('LI');
    var textNode = document.createTextNode(queue[i]);
    liNode.appendChild(textNode);
    olNode.appendChild(liNode);
  }
}



/* parseQueue
 *
 */
function parseQueue() {
  var queueString = queue.join();
  return queueString; 
}

/* updateQueue
 *
 */
function updateQueue() {
  // variables
  var olNode = document.getElementById('queue');
  var liNode = document.createElement('LI');
  var textNode;
  
  // add value to end of queue
  queue[queue.length] = document.getElementById('newChallengeInput').value;
  
  // update UL
  textNode = document.createTextNode(queue[queue.length -1]);
  liNode.appendChild(textNode);
  olNode.appendChild(liNode);
  
  // clear the input field
  document.getElementById('newChallengeInput').value = "";
  
  // set the cookie
  setCookie('queue', queue.join(','), 365);
  
  return false;
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