var canvas = document.getElementById('canvas');
const plusBtn = document.getElementById('plus');
const moinsBtn = document.getElementById('moins');
const tailleEL = document.getElementById('taille');
const colorEl = document.getElementById('color');
const effacerEl = document.getElementById('effacer');
var gommeBtn = document.getElementById('gomme');
var crayonBtn = document.getElementById('crayon');
var ligneBtn = document.getElementById('ligne')
var saveBtn = document.getElementById('save')

const ctx = canvas.getContext('2d');

let taille = 0
let appuyer = false
colorEl.value = 'black'
let color = colorEl.value;
let x;
let y;

function test2 () {
    color = 'black'
/* detecter si la souris est appuyé */
canvas.addEventListener('mousedown', (e) => {
    appuyer = true

    x = e.offsetX
    y = e.offsetY
})
/* detecter si la souris est relaché */
document.addEventListener('mouseup', (e) => {
    appuyer = false

    x = undefined
    y = undefined
})
/* detecter si la souris est en mouvement */

canvas.addEventListener('mousemove', (e) => {
    if(appuyer) {
        const x2 = e.offsetX
        const y2 = e.offsetY

        dessineCercle(x2, y2)
        dessineLigne(x, y, x2, y2)

        x = x2
        y = y2
    }
})
}

saveBtn.addEventListener("click", () => {
    let data = canvas.toDataURL("imag/png")
    let a = document.createElement("a")
    a.href = data
    // what ever name you specify here
    // the image will be saved as that name
    a.download = "sketch.png"
    a.click()
})

function test(){

    function startDragLine(e) {
        firstClick = [e.offsetX, e.offsetY];
        //start the loop
        intervalLoop = setInterval(function(){
            
            ctx.clearRect(0, 0, canvas.width, canvas.height);
           
            ctx.beginPath();
            ctx.moveTo(firstClick[0], firstClick[1]);
            ctx.lineTo(cursorX, cursorY, 6);
    
            ctx.strokeStyle = '#000000';
            ctx.stroke();
        },10);
    }
    function stopDragLine(){
        clearInterval(intervalLoop);
    }
    
    function init() {
        document.onmousemove = function(e){
            cursorX = e.offsetX;
            cursorY = e.offsetY;
        };
        canvas.addEventListener('mousedown', startDragLine, false);
        canvas.addEventListener('mouseup', stopDragLine, false);
    }
    var cursorX;
    var cursorY;
    var firstClick = [0,0];
    var intervalLoop = null;
    init();
}



function dessineCercle(x, y) {
    ctx.beginPath();
    ctx.arc(x, y, taille, 0, Math.PI * 2)
    ctx.fillStyle = color
    ctx.fill()
}

function dessineLigne(x1, y1, x2, y2) {
    ctx.beginPath()
    ctx.moveTo(x1, y1)
    ctx.lineTo(x2, y2)
    ctx.strokeStyle = color
    ctx.lineWidth = taille * 2
    ctx.stroke()
}

function updateLaTaille() {
    document.getElementById('taille').placeholder=taille
}

plusBtn.addEventListener('click', () => {
    taille += 1

    updateLaTaille()
})

moinsBtn.addEventListener('click', () => {
    taille -= 1

    if(taille < 1) {
        taille = 1
    }

    updateLaTaille()
})


tailleEL.addEventListener('change', (e) => taille = e.target.value)

colorEl.addEventListener('change', (e) => color = e.target.value)

gommeBtn.addEventListener('click',  () => color = 'white')

ligneBtn.addEventListener('click',  () => test())

crayonBtn.addEventListener('click',  () => test2())

effacerEl.addEventListener('click', () => ctx.clearRect(0,0, canvas.width, canvas.height))
