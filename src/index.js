import './styles/index.css'
import openNewSvg from './assets/open-in-new.svg'

const projectColors = ['purple', 'skyblue', 'orange', 'green', 'red', 'blue', 'yellow', 'pink', 'black', 'white']
const projects = document.getElementById('container-projects');

const totalProjects = 6;

for (let i = 0; i < totalProjects; i++) {
    const card = document.createElement('div');
    card.classList.add('project-card');
    const cardTop = document.createElement('div');
    cardTop.setAttribute('style', `background-color: ${projectColors[i]}`);
    cardTop.classList.add('card-top');
    cardTop.innerHTML = 'Screenshot of Project';
    card.appendChild(cardTop);
    const cardBottom = document.createElement('div');
    cardBottom.classList.add('card-bottom');
    const cardBottomHeader = document.createElement('div');
    cardBottomHeader.classList.add('card-bottom-header');
    cardBottom.appendChild(cardBottomHeader);
    const h2 = document.createElement('h2');
    h2.innerHTML = 'Project name';
    cardBottomHeader.appendChild(h2);
    const cardSocial = document.createElement('div');
    cardSocial.classList.add('card-social');
    cardBottomHeader.appendChild(cardSocial);
    const img = document.createElement('img');
    img.src = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg';
    cardSocial.appendChild(img);
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
    svg.setAttribute('viewBox', '0 0 24 24');
    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path.setAttribute('d', 'M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z');
    svg.appendChild(path);

cardSocial.appendChild(svg);
    const p = document.createElement('p');
    p.innerHTML = 'Short description of the project. Just a couple sentences will do.';
    cardBottom.appendChild(p);
    card.appendChild(cardBottom);
    projects.appendChild(card);
}

