import sprite from './img/icons.svg';

(() => {
  const mobileMenu = document.querySelector('.js-menu-container');
  const openMenuBtn = document.querySelector('.js-open-menu');
  const iconUse = document.querySelector('.icon-use'); 

  const toggleMenu = () => {
    const isMenuOpen = openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
    openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
    mobileMenu.classList.toggle('is-open');

    const scrollLockMethod = !isMenuOpen ? 'disableBodyScroll' : 'enableBodyScroll';
    bodyScrollLock[scrollLockMethod](document.body);

    if (isMenuOpen) {
      iconUse.setAttribute('href', `${sprite}#icon-burger`);
    } else {
      iconUse.setAttribute('href', `${sprite}#icon-close`);
    }
  };

  const menuItems = mobileMenu.querySelectorAll('.mobile-menu-link');

  menuItems.forEach(item => {
    item.addEventListener('click', () => {
      mobileMenu.classList.remove('is-open');
      openMenuBtn.setAttribute('aria-expanded', false);
      bodyScrollLock.enableBodyScroll(document.body);
      iconUse.setAttribute('href', `${sprite}#icon-burger`); 
    });
  });

  openMenuBtn.addEventListener('click', toggleMenu);

  // Close the mobile menu on wider screens if the device orientation changes
  window.matchMedia('(min-width: 1440px)').addEventListener('change', e => {
    if (!e.matches) return;
    mobileMenu.classList.remove('is-open');
    openMenuBtn.setAttribute('aria-expanded', false);
    bodyScrollLock.enableBodyScroll(document.body);
    iconUse.setAttribute('href', `${sprite}#icon-burger`); // Змінюємо іконку на бургер при ресайзі
  });
})();

import './scroll';
import './scrollup';