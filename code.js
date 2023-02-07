
    mobileBtns = $$('.mobile-menu__btn')
    subMenu = $('.list-group-2')
    itemSubMenus = $$('.list-group-3')


    function renderMain() {
        for (let index = 0; index < mobileBtns.length; index++) {
            mobileBtns[index].onclick = function() {
                mobileBtns[index].classList.toggle('dis-block')
                if (index === 0) {
                    subMenu.classList.toggle('dis-block')
                } else {
                    itemSubMenus[index - 1].classList.toggle('dis-block')
                }
            }
        }
    }

    renderMain()
