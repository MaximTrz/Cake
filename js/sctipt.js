
window.addEventListener('DOMContentLoaded', ()=>{
    const menuButton = document.querySelectorAll('.buttonMenuBox'),
          menuItems = document.querySelector('.menuItems'),
          menuItem = document.querySelectorAll('.menuItems__item'),
          logoBox = document.querySelector('.logoBox'),
          phoneNumber = document.querySelector('.menu__phone>a'),
          menu = document.querySelector('.menu');
    
    ///////////////Восстановление меню при изменении окна
    window.addEventListener('resize', ()=>{
            if(window.innerWidth>768){
                menuItems.style.display = 'flex';                
                menu.style.display='flex';            
                phoneNumber.style.display = 'block';
                showItems();                               
            } else {
                menuItems.style.display = 'none';  
            }
    });
    
    function hideItems(){
        menuItem.forEach(function(item){
            item.style.display = 'none';
        });
    }

    function showItems(){
        menuItem.forEach(function(item){
            item.style.display = 'block';
        });
    }
    
    /////////////////Кнопка меню
    menuButton.forEach(function(button){
        button.addEventListener('click', ()=>{         
            if (menuItems.style.display == 'block'){                
                let counter = menuItem.length; 
                const id = setInterval(hideMenu, 10);
                phoneNumber.style.display = 'block';
                logoBox.classList.remove('menuSM');
                function hideMenu(){
                if (counter==0){
                        clearInterval(id);                        
                        menu.style.display='flex';                   
                    } else {
                        menuItem[counter-1].style.display='none';                      
                        counter--;                                          
                    }
                menuItems.style.display = 'none';                     
                }            
            } else {
                hideItems();                
                let counter = menuItem.length;
                console.log(counter);                 
                const id = setInterval(showMenu, 30);                
                function showMenu(){
                    if (counter==0){
                        clearInterval(id);
                    } else {
                        menuItem[counter-1].style.display='block';                      
                        counter--;                        
                    }                    
                }
                menuItems.style.display = 'block';
                menu.style.display='block';            
                phoneNumber.style.display = 'none';
                logoBox.classList.add('menuSM'); 
            }  
        });
    });

    let cakeOrder = {
        filling: document.querySelector('.choiceBlockItem__value_filling'),
        size: '',
        decor: '',
        setFilling: function(){
            let btn = document.querySelectorAll('button.description__btn');            
            btn.forEach(function(btn, i){                
                btn.addEventListener('click', ()=>{
                    let title = document.querySelectorAll('.description__title')[i];
                    cakeOrder.filling.value = title.textContent.trim();               
                });

            });            
        },
        setSize: function(){
            const sizeItem = document.querySelectorAll('div.itemBox_size');
            const sizeTitle = document.querySelectorAll('.sizeText');
            function setEventSize(item, i){
                item.addEventListener('click', ()=>{                                       
                    const sizeValue = document.querySelector('.choiceBlockItem__value_size');
                    sizeValue.value = sizeTitle[i].textContent.trim();                    
                });
            }
            sizeItem.forEach(function(item, i){
                setEventSize(item, i);
            });

        },
        setDecor: function(){
            const decorItem = document.querySelectorAll('.itemBox_decor');
            const decorTitle = document.querySelectorAll('.decorText__name');
            decorItem.forEach(function(item, i){
                item.addEventListener('click', ()=>{
                    let decorValue = document.querySelector('.choiceBlockItem__value_decor');
                    const decorTitle = document.querySelectorAll('.decorText__name')[i];                    
                    decorValue.value = decorTitle.textContent.trim();                                                      
                });                
            });


        }



    }

    cakeOrder.setFilling();
    cakeOrder.setSize();
    cakeOrder.setDecor();


});