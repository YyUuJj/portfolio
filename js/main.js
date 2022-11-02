let btn_menu = document.querySelector('.portfolio__top__button');
btn_menu.addEventListener('click', (event) => {
    let menu = document.querySelector('.portfolio__bottom');
    console.dir(menu.classList.item(1));
    if (menu.classList.item(1) == "open") {
        menu.classList.remove('open');
        menu.classList.add('close');
        console.log("1")
    } else {
        menu.classList.remove('close');
        menu.classList.add('open');
        console.log(2);
    }
    if(btn_menu.classList.item((1)) == "open_menu") {
        btn_menu.classList.remove("open_menu");
        btn_menu.classList.add("close_menu")
    }else {
        btn_menu.classList.remove("close_menu");
        btn_menu.classList.add("open_menu")
    }


});