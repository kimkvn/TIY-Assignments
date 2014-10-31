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

//checks if html element is open, returns boolean
function isOpen(element){
  if (element.className === 'open'){
    return true;
  }
  return false;
}

//checks if html element is closed, returns boolean
function isClosed(element){
  if (element.className === ''){
    return true;
  }
  return false;
}


//opens/closes menu tabs
function clickNavItem(event){
  if ( isClosed(this.parentElement)){
    makeEverythingClosed(navItems);
    makeItOpen(this.parentElement);
  }
    else if (isOpen(this.parentElement)){
      makeItClosed(this.parentElement);
    }
}

//makes everything closed on click
function makeEverythingClosed(elements){
 _.each(elements, function(element){
   element.parentElement.className = '';
 });
}
