const mobileNav = document.getElementById('mobile_nav');
const mobileMenuOpen = document.getElementById('mobile_menu_open');
const mobileNavClose = document.getElementById('mobile_menu_close');
const li = mobileNav.getElementsByTagName('a');
const cardsContainer = document.getElementById('works');
const buttons = cardsContainer.getElementsByTagName('button');
const modalContainer = document.getElementById('modal');
const modalCloseButton = document.getElementById('modalClose');
let i;
let j;
function ShowMobileNav() {
  mobileNav.classList.remove('hidden');
  mobileMenuOpen.classList.add('hidden');
}

function HideMobileNav() {
  mobileNav.classList.add('hidden');
  mobileMenuOpen.classList.remove('hidden');
}

function ShowModal() {
  modalContainer.classList.remove('hidden');
}

function HideModal() {
  modalContainer.classList.add('hidden');
}

mobileMenuOpen.addEventListener('click', ShowMobileNav);
mobileNavClose.addEventListener('click', HideMobileNav);
modalCloseButton.addEventListener('click', HideModal);
for (i = 0; i < li.length; i += 1) {
  li[i].addEventListener('click', HideMobileNav);
}
for (j = 0; j < buttons.length; j += 1) {
  buttons[j].addEventListener('click', ShowModal);
}
