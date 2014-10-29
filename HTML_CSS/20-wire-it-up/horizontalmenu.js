function hello(){alert("hello")}



function openMenu(element){
  document.getElementById(element).style.display = 'block';
};

function closeMenu(element){
  document.getElementById(element).style.display = 'none';
};



function toggleMenu(element){
  if (document.getElementById(element).style.display === 'none'){
    return openMenu(element);
  }
  return closeMenu(element);
};//END toggleMenu



function clearAll(){

  var allMenus = ['products', 'downloads', 'applications', 'projects', 'freeware'];

    for( var i = 0; i < allMenus.length; i++){
        document.getElementById(allMenus[i]).style.display = "none";
    }
}; //END clearAll
