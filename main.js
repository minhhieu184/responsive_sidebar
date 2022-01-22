const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)


const body = $('body')
const toggleThemeBtn = $('.header__control-theme')
const themeText = $('.header__control-theme-text')

toggleThemeBtn.addEventListener('click', () => {
    body.classList.toggle('dark-mode') ? themeText.textContent = 'Dark mode' : themeText.textContent = 'Light mode'
})



// show/hide sidebar

const sidebarBtn = $('.header__header-icon-wrap')
const header = $('.header')
const headerSearch = $('.header__search')
const headerSearchIcon = $('.header__header-icon')

sidebarBtn.addEventListener('click', () => {
    if (header.style.width === '9.3rem'){
        header.style.width = '26rem' 
        headerSearchIcon.style.transform = 'rotateY(0)'
    } else {
        header.style.width = '9.3rem'
        headerSearchIcon.style.transform = 'rotateY(180deg)'
    }
    $('.content').style.marginLeft = header.style.width
})

headerSearch.addEventListener('click', () => {
    header.style.width === '9.3rem' ? header.style.width = '26rem' : 0
})
































