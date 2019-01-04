import logoIcon from '../assets/logo/logo-secondary.svg';
const fixNav = () => {
  const navContainer = document.querySelector('.header');
  const fixNav = () => {
    let landingSection = document.querySelector('.section--landing');
    if(!landingSection){
      landingSection = document.querySelector('.section--404')
    }
    const topOfLanding = landingSection.offsetTop;
    const logo = document.querySelector('.header__logo');
    const windowY = window.scrollY;
    if (windowY >= topOfLanding + 500) {
      logo.src = logoIcon;
      window.removeEventListener('scroll', fixNav);
      navContainer.classList.add('header--fixed');
      const navColor = '#ffffff'
      const navSecondaryColor = '#4586ff'
      document.body.style.setProperty('--nav',navColor);
      document.body.style.setProperty('--nav--secondary',navSecondaryColor);
    }
  };
  window.addEventListener('scroll', fixNav);
};
export default fixNav;
