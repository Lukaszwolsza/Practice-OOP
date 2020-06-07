const infoBtn = document.getElementsByClassName('infoBtn');
const modalBox = document.querySelector('.modal-bg');
const closeModalBox = document.querySelector('.modal-btn');



const dropdownBackground = () =>{
    modalBox.classList.toggle('visible');
}
const dropdownBackgroundOff = () =>{
    modalBox.classList.toggle('visible');
}
for(let i = 0; i < infoBtn.length; i++){
    infoBtn[i].addEventListener('click', dropdownBackground);
}
closeModalBox.addEventListener('click', dropdownBackgroundOff);
