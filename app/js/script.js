const btnHamburger = document.getElementById("btnHamburger");
const body = document.querySelector('body');
const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay');
const fadeElems = document.querySelectorAll('.has-fade');

btnHamburger.addEventListener('click', () => {
    if (!header.classList.contains('open')) {
        body.classList.add('no-scroll');
        header.classList.add('open');

        fadeElems.forEach((element) => {

            element.classList.add('fade-in');
            element.classList.remove('fade-out');
        })

    }
    else {
        body.classList.remove('no-scroll');
        header.classList.remove('open');
        fadeElems.forEach((element) => {
            element.classList.remove('fade-in');
            element.classList.add('fade-out');

        })
    }

})