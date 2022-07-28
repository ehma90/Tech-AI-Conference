import data from './data.js';

const navBtn = document.querySelector('.menu');
const navClose = document.querySelector('.close');
const navList = document.querySelector('.navlist');

navBtn.addEventListener('click', () => {
  navList.classList.toggle('nav-open');
});

navClose.addEventListener('click', () => {
  navList.classList.toggle('nav-open');
});

// Feature Speaker

const conSpeakers = document.getElementById('contain-speakers');
let inputSpeaker = '';

data.map((item) => {
  let element = `
    <div class="f-speaker">
        <div>
            <img src="${item.image}" alt="" width="100" height="90">
        </div>
        <div class="description">
            <h3>${item.name}</h3>
            <p class="position">${item.position}</p>
            <div class="dash"></div>
            <p class="experience">${item.experience}</p>
        </div>
    </div>
    `;
  inputSpeaker += element;
  element = '';
  return item;
});

conSpeakers.innerHTML = inputSpeaker;