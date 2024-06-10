/* MENU HAMBURGUER*/

document.getElementById('hamburger').addEventListener('click', function () {
  document.getElementById('menu').classList.toggle('active');
}); 



/* CARROSSEL */

let slider = document.querySelector('.slider');

function adjustSlides() {
  let images = slider.querySelectorAll('img');
  let totalWidth = 0;

  images.forEach(image => {
    totalWidth += image.clientWidth;
  });

  slider.style.width = totalWidth + 'px';
}

window.onload = function() {
  adjustSlides();
}

window.onresize = function() {
  adjustSlides();
}


