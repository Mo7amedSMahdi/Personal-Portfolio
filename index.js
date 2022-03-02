const mobileNav = document.getElementById('mobile_nav');
const mobileMenuOpen = document.getElementById('mobile_menu_open');
const mobileNavClose = document.getElementById('mobile_menu_close');
const li = mobileNav.getElementsByTagName('a');
const cardsContainer = document.getElementById('cardsContainer');
const buttons = cardsContainer.getElementsByTagName('button');
const modalContainer = document.getElementById('modal');

let i;
let j;

const projects = [
  {
    id: '1',
    title: 'Tonic',
    featured_image: './images/Portoflio-Cards/Portfolio1.png',
    company: {
      name: 'CONOPY',
      position: 'Back End Dev',
      date: '2018',
    },
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    technologies: ['html', 'css', 'javascript'],
    live: 'https://mo7amedsmahdi.github.io/Personal-Portfolio/',
    source: 'https://github.com/Mo7amedSMahdi/Personal-Portfolio/',
  },
  {
    id: '2',
    title: 'Multi-Post Stories',
    featured_image: './images/Portoflio-Cards/Portfolio2.png',
    company: {
      name: 'FACEBOOK',
      position: 'Full Stack Dev',
      date: '2015',
    },
    description:
      'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
    technologies: ['html', 'Ruby on rails', 'css', 'javascript'],
    live: 'https://mo7amedsmahdi.github.io/Personal-Portfolio/',
    source: 'https://github.com/Mo7amedSMahdi/Personal-Portfolio/',
  },
  {
    id: '3',
    title: 'Facebook 360',
    featured_image: './images/Portoflio-Cards/Portfolio3.png',
    company: {
      name: 'FACEBOOK',
      position: 'Full Stack Dev',
      date: '2015',
    },
    description:
      "Exploring the future of media in Facebook's first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.",
    technologies: ['html', 'Ruby on rails', 'css', 'javascript'],
    live: 'https://mo7amedsmahdi.github.io/Personal-Portfolio/',
    source: 'https://github.com/Mo7amedSMahdi/Personal-Portfolio/',
  },
  {
    id: '4',
    title: 'Uber Navigation',
    featured_image: './images/Portoflio-Cards/Portfolio4.png',
    company: {
      name: 'Uber',
      position: 'Lead Developer',
      date: '2018',
    },
    description:
      'A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.',
    technologies: ['html', 'Ruby on rails', 'css', 'javascript'],
    live: 'https://mo7amedsmahdi.github.io/Personal-Portfolio/',
    source: 'https://github.com/Mo7amedSMahdi/Personal-Portfolio/',
  },
];

function LoadProjects() {
  let counter;
  for (counter = 0; counter < projects.length; counter += 1) {
    let k;
    let technologies = '';
    for (k = 0; k < projects[counter].technologies.length; k += 1) {
      technologies += `<li>
        <a href='#'>${projects[counter].technologies[k]}</a>
      </li>`;
    }
    cardsContainer.innerHTML += `<div class="card">
                <div class="card__body">
                    <div class="card__body-img">
                        <img src="${projects[counter].featured_image}" alt="" />
                    </div>
                    <div class="card__body-content">
                        <h3>${projects[counter].title}</h3>
                        <div class="card__body-company">
                            <h4>${projects[counter].company.name}</h4>
                            <ul class="card__body-company__rols">
                                <li>${projects[counter].company.position}</li>
                                <li>${projects[counter].company.date}</li>
                            </ul>
                        </div>
                        <p>A daily selection of privately personalized reads; no accounts or sign-ups required.</p>
                        <ul class="card__body-tags">
                            ${technologies}
                        </ul>
                        <button data-target="${projects[counter].id}" type="submit" class="button__outlined">See Project</button>
                    </div>
                </div>
            </div>`;
  }

  function ShowMobileNav() {
    mobileNav.classList.remove('hidden');
    mobileMenuOpen.classList.add('hidden');
  }

  function HideMobileNav() {
    mobileNav.classList.add('hidden');
    mobileMenuOpen.classList.remove('hidden');
  }

  function HideModal() {
    modalContainer.classList.add('hidden');
  }

  function ShowModal(e) {
    const targetId = e.target.getAttribute('data-target');
    const project = projects.filter((item) => item.id === targetId);
    let technologies = '';
    let k;
    for (k = 0; k < project[0].technologies.length; k += 1) {
      technologies += `<li>
        <a href='#'>${project[0].technologies[k]}</a>
      </li>`;
    }
    const modal = `<div class="modal">
            <div class="modal__header">
                <div class="modal__header__top">
                    <h2 class="modal__title">${project[0].title}</h2>
                    <img id="modalClose" src="./images/icon-close-gray.svg" alt="">
                </div>
                <div class="modal__header__content">
                    <h4>${project[0].company.name}</h4>
                    <ul class="card__body-company__rols">
                        <li>${project[0].company.position}</li>
                        <li>${project[0].company.date}</li>
                    </ul>
                </div>
                <div class="modal__img">
                    <img src="${project[0].featured_image}" alt="">
                </div>
            </div>
            <div class="modal__body">
                <div class="modal__description">
                    <p>${project[0].description}</p>
                </div>
                <div class="modal__description_actions">
                    <div class="modal_list">
                        <ul class="card__body-tags">
                            ${technologies}
                        </ul>
                    </div>
                    <span class="devider"></span>
                    <div class="button__group">
                        <a href="${project[0].live}" target="_blank" class="button__outlined">See live<i class="icon-live"></i></a>
                        <a href="${project[0].source}" target="_blank" class="button__outlined">See Source<i class="icon-github"></i></a>
                    </div>
                </div>
            </div>
        </div>`;
    modalContainer.innerHTML = modal;
    modalContainer.classList.remove('hidden');
    const modalCloseButton = document.getElementById('modalClose');
    modalCloseButton.addEventListener('click', HideModal);
  }

  mobileMenuOpen.addEventListener('click', ShowMobileNav);
  mobileNavClose.addEventListener('click', HideMobileNav);
  for (i = 0; i < li.length; i += 1) {
    li[i].addEventListener('click', HideMobileNav);
  }

  for (j = 0; j < buttons.length; j += 1) {
    buttons[j].addEventListener('click', ShowModal.bind(buttons[j]));
  }
}

document.addEventListener('DOMContentLoaded', LoadProjects, false);

const form = document.getElementById('contactForm');
const errorMessage = 'Email address should only be in lowercase letters';
const errorMessageContainer = document.getElementById('error_message');
const emailInput = document.getElementById('email');
form.addEventListener('submit', (event) => {
  const validateRegex = /[A-Z]/;

  if (validateRegex.test(emailInput.value)) {
    emailInput.style.border = '1px solid red';
    emailInput.focus();
    errorMessageContainer.classList.remove('hidden');
    errorMessageContainer.innerText = errorMessage;
    event.preventDefault();
  } else if (!errorMessageContainer.className === 'hidden') {
    errorMessageContainer.classList.add('hidden');
    emailInput.style.border = null;
  }
});
