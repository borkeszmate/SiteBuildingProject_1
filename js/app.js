
const emailSubscribeBtn = document.querySelector('#emailSubscribeBtn');

emailSubscribeBtn.addEventListener('click', (e)=>{
 console.log(e);
 e.preventDefault();
})


// Pop up functionality

const rotateCard= document.querySelector('.rotateCard');
const popup = document.querySelector('.popup');
rotateCard.addEventListener('click', (e)=>{
 e.preventDefault();
 popup.style.visibility ="visible";
 popup.style.opacity = "1";
 
});

document.querySelector('.popup__card__closeIcon').addEventListener('click', (e)=>{
 e.preventDefault();
 popup.style.visibility = "hidden";
 popup.style.opacity = "0";
})