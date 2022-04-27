var canvas = document.getElementById('canvas');
const plusBtn = document.getElementById('plus');
const moinsBtn = document.getElementById('moins');
const tailleEL = document.getElementById('taille');
const colorEl = document.getElementById('color');
const effacerEl = document.getElementById('effacer');
var gommeBtn = document.getElementById('gomme');
var crayonBtn = document.getElementById('crayon');

const ctx = canvas.getContext('2d');

let taille = 0
let appuyer = false
colorEl.value = 'black'
let color = colorEl.value
let x
let y
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

crayonBtn.addEventListener('click',  () => color = 'black')

effacerEl.addEventListener('click', () => ctx.clearRect(0,0, canvas.width, canvas.height))
