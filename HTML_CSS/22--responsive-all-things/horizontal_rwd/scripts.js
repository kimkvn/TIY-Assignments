/* javascripts for dropdown menus, responsive, mobile-first */

var navItems = document.getElementsByTagName('h3'); //collects all h3 tags and assigns them to array navItems


//assigns chosen element the class 'open'
function makeItOpen(element){
  element.className = 'open';
}

//assigns chosen element an empty class
function makeItClosed(element){
  element.className = '';
}
