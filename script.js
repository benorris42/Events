// Ensuring content is loaded before adding event listeners and running functions.
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
// Initializing color and count variables used for labeling boxes and remembering set color.
let newColor = '';
let boxCount = 0;
// Function changes the color variable for new boxes and sets all current boxes to that color.
function setColor(){
    const colorInput = document.querySelector('#color-form input');
    newColor = colorInput.value;
    const boxes = document.getElementsByClassName('box')
    for (box of boxes) {
        box.style.backgroundColor = newColor;
    }
}
// Function increments the box count, labels box, and creates a new box with the set color.
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
// Function checks if double clicked element is a box and then removes it if true.
function rmvBox(e){
    const targetBox = e.target;
    console.log(`${targetBox}`);
    if (targetBox.className === 'box') {
        targetBox.remove();
    }
}
// Function sets box display to element coordinants if hovered over.
function hoverBoxDisplay(e) {
    const targetBox = e.target;
    if (targetBox.className === 'box'){
        const boxLoc = targetBox.getBoundingClientRect();
        const boxX = boxLoc.x
        const boxY = boxLoc.y
        targetBox.innerText = `I am at X:${boxX} Y:${boxY}.`;
    }
}
// Function resets display to the box label (id) when no longer hovered over.
function leaveBoxDisplay(e) {
    const targetBox = e.target;
    if (targetBox.className === 'box'){
        targetBox.innerText = `${targetBox.id}`;
    }
}
