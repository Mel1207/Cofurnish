const burgerMenu = document.querySelector('.btn-menu');
const slider = document.querySelector('.slider');
const mobileMenu = document.querySelector('.mobile-menu-container');


burgerMenu.addEventListener('click', () => {
    mobileMenu.classList.add('mobile-open')
})


$('.slider').slick({
    dots: true,
    arrows: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 850,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 580,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});

const name = 'Mel'

const greetName = () => {
    console.log(`Hello there ${name}`)
}

greetName();