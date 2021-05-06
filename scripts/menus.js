function openMenu() {
    const menu = document.getElementById('menu')
    menu.classList.replace('menuClosed', 'menuOpened')
    const hamburguer = document.getElementById('hamburguerMenu')
    hamburguer.setAttribute('src', './images/icon-close.svg')
    hamburguer.setAttribute('onclick', 'closeMenu()')
}

function closeMenu() {
    const menu = document.getElementById('menu')
    menu.classList.replace('menuOpened', 'menuClosed')
    const hamburguer = document.getElementById('hamburguerMenu')
    hamburguer.setAttribute('src', './images/icon-hamburger.svg')
    hamburguer.setAttribute('onclick', 'openMenu()')
}

function openProductMenu() {
    const options = document.getElementById('productOptions')
    options.classList.replace('menuClosed', 'menuOpened')

    const option = document.getElementById('productOption')
    option.setAttribute('onclick', 'closeProductMenu()')

    const optionAfter = option
    // optionAfter.style.backgroundColor = "#FFFA00"

    console.log(optionAfter)
}

function closeProductMenu() {
    const options = document.getElementById('productOptions')
    options.classList.replace('menuOpened', 'menuClosed')

    const option = document.getElementById('productOption')
    option.setAttribute('onclick', 'openProductMenu()')

    // console.log(option)
}