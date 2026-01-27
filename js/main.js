const swiper = new Swiper('.mySwiper', {
  slidesPerView: 1,
  spaceBetween: 30,
  speed: 600,
  loop: true,
  navigation: {
    nextEl: '.swiper-next',
    prevEl: '.swiper-prev',
  },
});

document.querySelectorAll('.header__menu-link').forEach((link) => link.classList.toggle('is-active', link.href === location.href));




const faqs = document.querySelectorAll('.faq__content');

faqs.forEach(faq => {
  faq.addEventListener('click', () => {
    faq.classList.toggle('active');
  });
})




const filterBtns = document.querySelectorAll('.portfolio__filter-btn');
const cards = document.querySelectorAll('.portfolio__card');


filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const filter = btn.dataset.filter;
    filterBtns.forEach(b => b.classList.remove('is-active'));
    btn.classList.add('is-active');


    cards.forEach(card => {
      if (filter === 'all' || card.dataset.category === filter) {
        card.style.display = 'grid'; 
      } else {
        card.style.display = 'none';
      }
    });
  });
});


const burger = document.querySelector('.burger');
const menu = document.querySelector('.header__menu');
const body = document.querySelector('body')

burger.addEventListener('click', () => { 
  burger.classList.toggle('burger--open');
  menu.classList.toggle('header__menu--active');
  document.body.classList.toggle('no-scroll');
})