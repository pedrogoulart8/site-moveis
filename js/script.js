//alert('Hello World!');


var btnMenu = document.querySelector('.btn-menu');

var menu = document.querySelector('.menu');




//Evento de click
btnMenu.addEventListener('click', function(){

    menu.classList.toggle('menu-open');
    
})