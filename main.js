const navBtn = document.querySelector('.menu');
const navClose = document.querySelector('.close');
const navList = document.querySelector('.navlist');

navBtn.addEventListener('click', () => {
    navList.classList.toggle('nav-open');
});

navClose.addEventListener('click', () => {
    navList.classList.toggle('nav-open');
});

//Feature Speaker

const data = [
    {
        id: 1,
        image: 'imgs/person1.jpeg',
        name: 'Alex Timber',
        position: 'Lead AI engineer at AirBNB',
        experience: 'Lorem ipsum dolor sit amet consectetur git goom rule weite loradipisicing elit. yiysdiuw'
    },
    {
        id: 2,
        image: 'imgs/person2.jpeg',
        name: 'Chou Zhao',
        position: 'Lead AI engineer at AirBNB',
        experience: 'Lorem ipsum dolor sit amet consectetur git goom rule weite loradipisicing elit. yiysdiuw'
    },
    {
        id: 3,
        image: 'imgs/person3.jpeg',
        name: 'John Lake',
        position: 'Lead AI engineer at AirBNB',
        experience: 'Lorem ipsum dolor sit amet consectetur git goom rule weite loradipisicing elit. yiysdiuw'
    },
    {
        id: 4,
        image: 'imgs/person4.jpeg',
        name: 'Sarah James',
        position: 'Lead AI engineer at AirBNB',
        experience: 'Lorem ipsum dolor sit amet consectetur git goom rule weite loradipisicing elit. yiysdiuw'
    },
    {
        id: 5,
        image: 'imgs/person5.jpeg',
        name: 'Mark Benson',
        position: 'Lead AI engineer at AirBNB',
        experience: 'Lorem ipsum dolor sit amet consectetur git goom rule weite loradipisicing elit. yiysdiuw'
    },
    {
        id: 6,
        image: 'imgs/person6.jpeg',
        name: 'Jones Paul',
        position: 'Lead AI engineer at AirBNB',
        experience: 'Lorem ipsum dolor sit amet consectetur git goom rule weite loradipisicing elit. yiysdiuw'
    }
]

const conSpeakers = document.getElementById('contain-speakers');
conSpeakers.innerHTML = inputSpeaker;

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
            <p class="experience">${item.experience}</p>
        </div>
    </div>
    `;
    inputSpeaker += element;
    element = '';
});
