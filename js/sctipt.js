window.addEventListener('DOMContentLoaded', ()=>{
    const menuButton = document.querySelectorAll('.buttonMenuBox'),
          menuItems = document.querySelector('.menuItems'),
          menuItem = document.querySelectorAll('.menuItems__item'),
          logoBox = document.querySelector('.logoBox'),
          phoneNumber = document.querySelector('.menu__phone>a'),
          menu = document.querySelector('.menu');



    menuButton.forEach(function(button){
        button.addEventListener('click', ()=>{            
            if (menuItems.style.display == 'block'){
                menuItems.classList.remove('animated');
                menuItems.classList.remove('bounceOutLeft');
                menuItems.style.display = 'none';                
                menu.style.display='flex';            
                phoneNumber.style.display = 'block';
                logoBox.classList.remove('menuSM');            
            } else {
                menuItems.classList.add('animated');
                menuItems.classList.add('bounceInLeft');
                menuItems.style.display = 'block';
                menu.style.display='block';            
                phoneNumber.style.display = 'none';
                logoBox.classList.add('menuSM'); 
            }  
        });
    });
});