const infoBtn = document.getElementsByClassName('infoBtn');
const modalBox = document.querySelector('.modal-bg');
const closeModalBox = document.querySelector('.modal-btn');
const newProjectBtn = document.querySelector('#newProjBtn');

const currentProjectBox = document.getElementById('currentProjectBox');
//const userInputedData = document.querySelectorAll('.new-project-label');

const addNewProjectBtn = document.getElementById('newProjectAdd');

class Project{

    constructor(id, name, desc){
        this.id = id;
        this.name = name;
        this.desc = desc; 
    }

    informations(){
        console.log('ID : ' + this.id + ', project name :' + this.name + ', description : ' + this.desc);
    }
}

const dropdownBackground = () =>{
    modalBox.classList.toggle('visible');
}
const dropdownBackgroundOff = () =>{
    modalBox.classList.toggle('visible');
    clearingInputs();
}

const clearingInputs = () =>{
    document.getElementById('projNameInput').value = "";
    document.getElementById('projDescInput').value = "";
}

const addNewProject = () =>{
    const inputedProjectName = document.getElementById('projNameInput').value;
    const inputedProjectDesc = document.getElementById('projDescInput').value;
    let id = Math.floor(Math.random() * (100 - 1) + 1);
    const newProject = new Project(id, inputedProjectName, inputedProjectDesc);

    newProject.informations();
    dropdownBackgroundOff();
    clearingInputs();
    addProjectToBox(inputedProjectName, inputedProjectDesc);
    return console.log('Add new project : ' + newProject.name);   
}

const addProjectToBox = (name, desc) =>{  
    const div = document.createElement('div');
    div.className = 'project';

    const h3 = document.createElement('h3');
    h3.innerHTML = name;

    const p = document.createElement('p');
    p.innerHTML = desc;

    const infoButton = document.createElement('button');
    infoButton.innerHTML = 'Information';
    infoButton.className = 'infoBtn';

    const finishButton = document.createElement('button');
    finishButton.innerHTML = 'Finished !';
    finishButton.className = 'finishBtn';
    
    currentProjectBox.appendChild(div);
    div.appendChild(h3);
    div.appendChild(p);
    div.appendChild(infoButton);
    div.appendChild(finishButton);
}


// for(let i = 0; i < infoBtn.length; i++){
//     newProjectBtn[i].addEventListener('click', dropdownBackground);
// }

closeModalBox.addEventListener('click', dropdownBackgroundOff);
newProjectBtn.addEventListener('click', dropdownBackground);
addNewProjectBtn.addEventListener('click', addNewProject);