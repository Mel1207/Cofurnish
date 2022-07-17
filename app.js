const burgerMenu = document.querySelector('.btn-menu');
const slider = document.querySelector('.slider');


$('.slider').slick({
    dots: true,
    arrows: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1
});

burgerMenu.addEventListener('click', () => {
    console.log('menu is clicked')
})


const name = 'Mel'

const greetName = () => {
    console.log(`Hello there ${name}`)
}

greetName();