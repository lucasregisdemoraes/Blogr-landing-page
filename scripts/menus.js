function openMenu() {
    document.getElementById('menu').classList.toggle('menuOpened')
    document.getElementById('hamburguerMenu').setAttribute('src', './images/icon-close.svg')
    document.getElementById('hamburguerMenu').setAttribute('onclick', 'closeMenu()')
}

function closeMenu() {
    document.getElementById('menu').classList.replace('menuOpened', 'menuClosed')
    document.getElementById('hamburguerMenu').setAttribute('src', './images/icon-hamburger.svg')
    document.getElementById('hamburguerMenu').setAttribute('onclick', 'openMenu()')
}

function openProductMenu() {
    document.getElementById('productOptions').classList.toggle('menuOpened')
    document.getElementById('productOption').setAttribute('onclick', 'closeProductMenu()')
    document.getElementById('productArrow').style.transform = 'rotate(-360deg)'
}

function closeProductMenu() {
    document.getElementById('productOptions').classList.replace('menuOpened', 'menuClosed')
    document.getElementById('productOption').setAttribute('onclick', 'openProductMenu()')
    document.getElementById('productArrow').style.transform = 'rotate(-180deg)'
}

function openCompanyMenu() {
    document.getElementById('companyOptions').classList.replace('menuClosed', 'menuOpened')
    document.getElementById('companyOption').setAttribute('onclick', 'closeCompanyMenu()')
    document.getElementById('companyArrow').style.transform = 'rotate(-360deg)'
}

function closeCompanyMenu() {
    document.getElementById('companyOptions').classList.replace('menuOpened', 'menuClosed')
    document.getElementById('companyOption').setAttribute('onclick', 'openCompanyMenu()')
    document.getElementById('companyArrow').style.transform = 'rotate(-180deg)'
}

function openConnectMenu() {
    document.getElementById('connectOptions').classList.replace('menuClosed', 'menuOpened')
    document.getElementById('connectOption').setAttribute('onclick', 'closeConnectMenu()')
    document.getElementById('connectArrow').style.transform = 'rotate(-360deg)'
}

function closeConnectMenu() {
    document.getElementById('connectOptions').classList.replace('menuOpened', 'menuClosed')
    document.getElementById('connectOption').setAttribute('onclick', 'openConnectMenu()')
    document.getElementById('connectArrow').style.transform = 'rotate(-180deg)'
}