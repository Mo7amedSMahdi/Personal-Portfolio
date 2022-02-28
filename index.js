const mobileNav = document.getElementById('mobile_nav');
const mobileMenuOpen = document.getElementById('mobile_menu_open');
const mobileNavClose = document.getElementById('mobile_menu_close');
const li = mobileNav.getElementsByTagName('a');
let i;

function ShowMobileNav() {
  mobileNav.classList.remove('hidden');
  mobileMenuOpen.classList.add('hidden');
}

function HideMobileNav() {
  mobileNav.classList.add('hidden');
  mobileMenuOpen.classList.remove('hidden');
}

mobileMenuOpen.addEventListener('click', ShowMobileNav);
mobileNavClose.addEventListener('click', HideMobileNav);
for (i = 0; i < li.length; i += 1) {
  li[i].addEventListener('click', HideMobileNav);
}
