(function($){
  $(function(){

    $('.sidenav').sidenav();

  }); // end of document ready
})(jQuery); // end of jQuery name space

function onEnter(){
  var button = document.getElementById('button');
  button.addEventListener('click',save,false);
  display();
}

function display(){
  var display-data = document.getElementById('display-data');
  display-data-innerHTML="";
  for(var i = 0; i < sessionStorage.length; i++){
    var a = sessionStorage.key(i);
    var b = sessionStorage.getItem(a);
    display-data.innerHTML += a;
  }
}

function save(){
  var email = document.getElementById('email');
  var emailName = document.getElementById('emailName');
  sessionStorage.setItem(email);
  display();
  key.value="";
  value.value="";
}

window.addEventListener("load",onEnter,false);
