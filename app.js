


const mainMenu = document.querySelector('.mainMenu');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.openMenu');
const menu_items = document.querySelectorAll('nav .mainMenu li a');



openMenu.addEventListener('click',function (){
 
    mainMenu.style.top = '0';
    mainMenu.style.transition = 'top 1.5s ease 0s';
});

closeMenu.addEventListener('click',close);

// close menu when you click on a menu item 
menu_items.forEach(item => {
    item.addEventListener('click',function(){
        close();
    })
})


function close(){
    mainMenu.style.top = '-105%';
}

////

