const infoButton = document.getElementById('project-info-btn');
const backdrop = document.querySelector('.backdrop');

const projectName = document.querySelector('.projectName');
const descInfo = document.querySelector('.description');

const displayBox = document.getElementById('info-box-after-click');

const makeBackdropVisible = () =>{
    backdrop.classList.toggle('visible');
    let projectNameBox = document.querySelector('.projectNameBackdrop');
    let descBox = document.querySelector('.descBox');
    projectNameBox.textContent = projectName;
    descBox.textContent = descInfo;
    displayBox.className.toggle('visible');
}


infoButton.addEventListener('click', makeBackdropVisible);

