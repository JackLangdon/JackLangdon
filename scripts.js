const navSlide = () => {
  const hamburgerIcon = document.querySelector('.hamburger');
  const menu = document.querySelector('.nav-screen');
  const navLinks = document.querySelectorAll('.nav-screen li');
  const line1 = document.querySelector('.line-one');
  const line2 = document.querySelector('.line-two');
  const line3 = document.querySelector('.line-three');

  hamburgerIcon.addEventListener('click', () => {
    menu.classList.toggle('nav-active');

    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = '';
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 5 + 0.7
        }s`;
      }
    });

    line1.classList.toggle('burger-active-1');
    line2.classList.toggle('burger-active-2');
    line3.classList.toggle('burger-active-3');
  });
};

navSlide();