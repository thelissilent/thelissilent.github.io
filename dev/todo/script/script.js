// initialize on pageload
function onLoad() {
  showCookies();
  toggleForm();
}

// setting a cookie
function setCookie(cookieName, cookieValue, expirationDays) {
  // set expiration date
  var date = new Date();
  date.setTime(date.getTime() + (expirationDays * 24 * 24 * 60 * 1000)); 
  document.cookie = cookieName + "=" + cookieValue +"; expires=" + date.toUTCString();
}

// reading a cookie back by name
function getCookie(cookieName) {
  var name = cookieName + "=";
  var cookieArray = document.cookie.split(';');
  for(var i=0; i<cookieArray.length; i++) {
    var cookie = cookieArray[i];
    while (cookie.charAt(0)==' ') {
      cookie = cookie.substring(1);
    }
    if (cookie.indexOf(name) != -1) return cookie.substring(name.length, cookie.length);
    }
  return "";
}

// show all cookie values
function showCookies() {
  var cookieArray = document.cookie.split(';');
  for (var i = cookieArray.length - 1; i >= 0; i--) {
    var cookie = cookieArray[i];
    
    while (cookie.charAt(0)==' ') {
      cookie = cookie.substring(1);
    }
    
    //get the name / value
    var cookieName = cookie.substring(cookie.indexOf("=") + 1);
    var cookieValue = cookie.substring(cookie.indexOf("=") + 1);
    //update expiration date
    setCookie(cookieName, cookieValue, 20);
    
    // add to DOM
    var div = document.createElement('div');
    div.className = 'todo_item';
    var pTag = document.createElement('p');
    var node = document.createTextNode(cookieValue); 
    pTag.appendChild(node);
    div.appendChild(pTag);
    document.getElementById('content').appendChild(div);
  }
}

// add a cookie from a form submit
function addNewCookie() {
  var value = document.forms['add_item_form']['add_item_desc'].value;
  setCookie(value, value, 20);
  location.reload();
  return true; 
}

// toggle the form to show/hide on mobile
function toggleForm() { 
  document.getElementById('add_item_btn').onclick = function() {
    document.getElementById('add_item_btn').style.display='none';
    var addItemForm = document.forms['add_item_form'].style.display='block';
    document.forms['add_item_form']['add_item_desc'].focus();
  }
}

