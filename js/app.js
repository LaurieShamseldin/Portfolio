const app = {
  init : function() {

    app.addListenerToActions();
  },
  
  addListenerToActions() {

  const burgerMenu = document.querySelector('.burger-menu');
  burgerMenu.addEventListener('click', app.animationBurgerMenu)

  const linksMenu = document.querySelectorAll('#menu-burger-nav a');
  linksMenu.forEach(item => { item.addEventListener('click', app.animationBurgerMenu)});

  const themeSwitch = document.querySelector('.switch-theme input');
  let darkTheme = true;
  themeSwitch.addEventListener('click', () => {
    if (darkTheme) {
      document.body.classList.remove('theme-dark');
      document.body.classList.add('theme-light');
      darkTheme = false;
    } else { 
      document.body.classList.remove('theme-light');
      document.body.classList.add('theme-dark');
      darkTheme = true;
    }
  });
  
  const aboutTitle = document.querySelector('.large-text-title-right');
  window.onscroll = () => {
    let pos = window.scrollY - 100;
    aboutTitle.style.left = `${pos}px`;
  };

  const experienceListElms = document.querySelectorAll('.experience-content-name_list .list-element');
  experienceListElms.forEach(item => { item.addEventListener('click', app.displayExperience)});

  const swiper = new Swiper(".mySwiper", {
    slidesPerView: 1.2,
    centeredSlides: false,
    spaceBetween: 15,
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints: {
      1000: {
        slidesPerView: 2.5,
        spaceBetween: 30,
      },

    },
  });

  // Display Contact
  const displayContact = document.querySelector('.slide-in');

  window.addEventListener('scroll', () => {
    const {scrollTop, clientHeight} = document.documentElement;
    const topElementToTopViewport = displayContact.getBoundingClientRect().top;
    if(scrollTop > (scrollTop + topElementToTopViewport).toFixed() - clientHeight * 0.8){
      displayContact.classList.add('active')
    }
  })

  }, 

// Animation of burger Menu
  animationBurgerMenu() {
    const burgerMenu = document.querySelector('.burger-menu');
    burgerMenu.classList.toggle('open');
    burgerMenu.classList.add('close-burger');
  
    const overlayOpen = document.getElementById('overlay_open');
    overlayOpen.classList.toggle('overlay_open')

  },

// Animation experience
  displayExperience(event) {
    const list = event.currentTarget;
    const listActive =  document.querySelector('.list-element.active');
    const activeDataId = listActive.getAttribute('data-id');
    const actifParagraph = document.getElementById(`project-${activeDataId}`);
    console.log(actifParagraph);

    listActive.classList.remove('active');
    list.classList.add('active');

    const dataId = list.getAttribute('data-id');
    const textProject = document.getElementById(`project-${dataId}`);

    actifParagraph.classList.remove('active');
    // Insert active class for my paragraph
    textProject.classList.add('active');

    actifParagraph.classList.add('hidden');
    // Remove hidden class
    textProject.classList.remove('hidden');
  },
  
}

document.addEventListener('DOMContentLoaded', app.init);