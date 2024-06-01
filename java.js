// Definindo variáveis
let btmenu = document.getElementById('bt-menu')
let menu = document.getElementById('menu-mobile')
let overlay = document.getElementById('overlay-menu')

// Verificador para abrir menu
btmenu.addEventListener('click',()=>{
    menu.classList.add('open-menu')
})

// verificador para fechar menu
menu.addEventListener('click',()=>{
    menu.classList.remove('open-menu')
})
overlay.addEventListener('click',()=>{
    menu.classList.remove('open-menu')
})