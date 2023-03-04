window.addEventListener('scroll', function (){
    let scroll = window.scrollY
    const header = document.querySelector('header')

    console.log(scroll)

    if (scroll >= 50) {
        header.style.boxShadow = '1px 1px 3px 2px #654548'
    }
    else{
        header.style.boxShadow = 'none'
    }


    let itens = document.querySelectorAll('.cards .list li')

    itens.forEach((item) => {
        if (scroll >= 61) {
            item.classList.add('animar')
        }
        else{
            item.classList.remove('animar')
        }
    })
});

let  cont = 0;

var scrolls = {
    cardapio : 551,
    sobre : 50,
    contato : 1983,
    inicio : 0
};

function scrollPage(arg){
    for (var [key, value] in scrolls){
        if (value == arg)  {
            return true;
        } 
    }

    if (scrollPage){
        window.scrollTo({
            top: arg,
            behavior: 'smooth'
        });
    }

}

function show(){
    const hamburgerMenu = document.querySelector('.hamburger-menu>i');
    const nav = document.querySelector('nav.hidden-display')
    if (MouseEvent){
        
        if (cont % 2 == 1){
            hamburgerMenu.classList.add('icon-menu');
            hamburgerMenu.classList.remove('icon-cross');
            nav.style.display = 'none';
        } else{
            hamburgerMenu.classList.add('icon-cross');
            hamburgerMenu.classList.remove('icon-menu');
            nav.classList.add('show');
            nav.classList.add('hidden-display');
            nav.style.display = 'block';
        }
        cont++;
    }

}