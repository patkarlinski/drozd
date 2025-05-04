const nav = document.querySelector('.nav-deskopt');
const menu = document.querySelector('.menu');
const close = document.querySelector('.close');
const a = document.querySelectorAll('li');

menu.addEventListener('click', () => {
    nav.classList.add('nav--visible');
    menu.classList.add('menu--hide');
    close.classList.add('close--show');
});

close.addEventListener('click', () => {
    nav.classList.remove('nav--visible');
    menu.classList.remove('menu--hide');
    close.classList.remove('close--show');

})

a.forEach(i => {
    i.addEventListener('click', () => {
        nav.classList.remove('nav--visible');
        menu.classList.remove('menu--hide');
        close.classList.remove('close--show');
    })
})



document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (event) {
      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
  
      if (targetElement) {
        event.preventDefault();
  
        const yOffset = -94;
        const y = targetElement.getBoundingClientRect().top + window.pageYOffset + yOffset;
  
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    });
  });