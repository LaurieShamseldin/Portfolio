const app = {
  init : function() {

    app.addListenerToActions();
  },
  
  addListenerToActions() {

  const burgerMenu = document.querySelector('.burger-menu');
  burgerMenu.addEventListener('click', app.animationBurgerMenu)
  
  const aboutTitle = document.querySelector('.about .large-text-title');
  window.onscroll = () => {
    let pos = window.scrollY - 100;
    aboutTitle.style.left = `${pos}px`;

  }

  const experienceListElms = document.querySelectorAll('.experience-content-name_list .list-element');
  experienceListElms.forEach(item => { item.addEventListener('click', app.displayExperience)});
  
  }, 

// Animation of burger Menu
  animationBurgerMenu() {
    const burgerMenu = document.querySelector('.burger-menu');
    burgerMenu.classList.toggle('open');
    burgerMenu.classList.add('close-burger');
  
    const overlayOpen = document.getElementById('overlay_open');
    overlayOpen.classList.toggle('overlay_open')

  },

  displayExperience(event) {
    const list = event.currentTarget;
    const listActive =  document.querySelector('.list-element.active');
    console.log(listActive);
    listActive.classList.remove('active');
    list.classList.add('active');
  }
}



document.addEventListener('DOMContentLoaded', app.init);


