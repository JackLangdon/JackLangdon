const bgCircle = document.getElementById('background-circle');
const bgCircleSmall = document.getElementById('background-circle-small');

let degrees = 0;

const getDeg = () => {
  if (degrees < 360) {
    degrees += 0.1;
  } else if (degrees > 360) {
    degrees = 0.1;
  }
  return degrees;
};

const updateRotation = () => {
  let rotation = getDeg();

  bgCircle.style.transform = `rotate(${rotation}deg)`;
  bgCircleSmall.style.transform = `rotate(${-2 * rotation}deg)`;
};

setInterval(updateRotation, 10);

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