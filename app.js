const burgerMenu = document.querySelector('.btn-menu');

burgerMenu.addEventListener('click', () => {
    console.log('menu is clicked')
})


const name = 'Mel'

const greetName = () => {
    console.log(`Hello there ${name}`)
}

greetName();