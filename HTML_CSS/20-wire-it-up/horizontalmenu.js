/*
* Javascript functions for horizontalmenu.html
*/



  function openMenu(element){
    document.getElementById(element).style.display = 'block';
};

  function closeMenu(element){
    document.getElementById(element).style.display = 'none';
};


var allMenus = ['products', 'downloads', 'applications', 'projects', 'freeware'];


  function toggleMenu(element){
      for(var i = 0; i < allMenus.length; i++){
        if(allMenus[i] !== element){
         closeMenu(allMenus[i]);
       }
      }
return openMenu(element);
  };



 function selfToggle(element){
   if(openMenu(element)){
     return closeMenu(element);
   }
 }

//this function will be in the header and makes it so clicking anywhere in the header resets the menus.
function clearAll(){
    for( var i = 0; i < allMenus.length; i++){
        closeMenu(allMenus[i]);
    }
}; //END clearAll
