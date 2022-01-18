const title = document.getElementById('title');
const info = document.getElementById('infoIcon');
const infoCard = document.getElementById('infoCard');
const infoclose = infoCard.querySelector('div');

info.addEventListener('click',function(){
    infoCard.setAttribute('class', 'display');
    title.removeAttribute('class');
});
infoclose.addEventListener('click',function(){
    infoCard.removeAttribute('class');
    title.setAttribute('class', 'display');
});