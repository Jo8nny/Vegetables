const menu = document.querySelector('.aside__burger')

if (menu) {
    menu.addEventListener('click', function (e) {
        menu.classList.toggle('active')
    })
}

const searchMenu = document.querySelector('.search__menu')

if (searchMenu) {
    searchMenu.addEventListener('click', function (e) {
    searchMenu.classList.toggle('active')
    })
}

const language = document.querySelector('.language')

if (language) {
    language.addEventListener('click', function (e) {
        language.classList.toggle('active')
    })
}



const swiper1 = new Swiper('.swiper-1', {
    direction: 'vertical',
    loop: true,
    slidesPerView: 'auto',
    navigation: {
        nextEl: '.swiper-button-next-1',
        prevEl: '.swiper-button-prev-1',
    },

});

const swiper2 = new Swiper('.swiper-2', {
    direction: 'vertical',
    loop: true,
    slidesPerView: 'auto',
    navigation: {
        nextEl: '.swiper-button-next-2',
        prevEl: '.swiper-button-prev-2',
    },

});

const swiper3 = new Swiper('.swiper-3', {
    direction: 'vertical',
    loop: true,
    slidesPerView: 'auto',
    navigation: {
        nextEl: '.swiper-button-next-3',
        prevEl: '.swiper-button-prev-3',
    },

});

const tabs = document.querySelectorAll('[data-tab-target]')
const tabContent = document.querySelectorAll('[data-tab-content]')

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.tabTarget)
        tabContent.forEach(tabContent => tabContent.classList.remove('active'))
        target.classList.add('active')
        tabs.forEach(tab => tab.classList.remove('active'))
        tab.classList.add('active')
    })
})



