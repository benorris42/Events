document.addEventListener('DOMContentLoaded', function(){
    const boxContainer = document.getElementById('box-container')
    const colorSet = document.querySelector('#color-form button');
    const newBoxButton = document.getElementById('new-box-button')
    colorSet.addEventListener('click', function(e){
        e.preventDefault();
        setColor();
    })
    document.addEventListener('keypress', function(e){
        if (e.key === 'n') {newBox();}
    })
    newBoxButton.addEventListener('click', e => newBox());
    boxContainer.addEventListener('dblclick',e => rmvBox(e));
    boxContainer.addEventListener('mouseover',e => hoverBoxDisplay(e));
    boxContainer.addEventListener('mouseout',e => leaveBoxDisplay(e));
})
let newColor = '';
let boxCount = 0;
function setColor(){
    const colorInput = document.querySelector('#color-form input');
    newColor = colorInput.value;
    const boxes = document.getElementsByClassName('box')
    for (box of boxes) {
        box.style.backgroundColor = newColor;
    }
}
function newBox(){
    const boxContainer = document.getElementById('box-container')
    boxCount ++;
    const currentBox = boxCount;
    let createdBox = document.createElement('div');
    createdBox.id = `Box${currentBox}`;
    createdBox.innerText = `${createdBox.id}`;
    createdBox.className = 'box';
    createdBox.style.backgroundColor = newColor;
    boxContainer.appendChild(createdBox);
}
function rmvBox(e){
    const targetBox = e.target;
    console.log(`${targetBox}`);
    if (targetBox.className === 'box') {
        targetBox.remove();
    }
}
function leaveBoxDisplay(e) {
    const targetBox = e.target;
    if (targetBox.className === 'box'){
        targetBox.innerText = `${targetBox.id}`;
    }
}
function hoverBoxDisplay(e) {
    const targetBox = e.target;
    if (targetBox.className === 'box'){
        const boxLoc = targetBox.getBoundingClientRect();
        const boxX = boxLoc.x
        const boxY = boxLoc.y
        targetBox.innerText = `I am at X:${boxX} Y:${boxY}.`;
    }
}
