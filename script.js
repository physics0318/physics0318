const title = document.getElementById('title');
const pjts = document.getElementById('toyprojecticon');
const pjtContainer = document.getElementById('projectContainer');
const pjtClose = document.getElementById('pjtClose');
const info = document.getElementById('infoIcon');
const infoCard = document.getElementById('infoCard');
const infoclose = infoCard.querySelector('div');

function changeContent(content) {
    let cDisplay = document.getElementsByClassName('display');
    for (let i = 0; i < cDisplay.length; i++) {
        console.log(cDisplay[i]);
        cDisplay[i].removeAttribute('class', 'display');
    };
    content.setAttribute('class', 'display');
};

pjts.addEventListener('click', function(){
    changeContent(pjtContainer);
});
pjtClose.addEventListener('click', function(){
    changeContent(title);
})
info.addEventListener('click', function(){
    changeContent(infoCard);
});
infoclose.addEventListener('click', function(){
    changeContent(title);
});
