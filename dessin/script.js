var canvas = document.getElementById("canvas");
const plusBtn = document.getElementById("plus");
const moinsBtn = document.getElementById("moins");
const tailleEL = document.getElementById("taille");
const colorEl = document.getElementById("color");
const effacerEl = document.getElementById("effacer");
var gommeBtn = document.getElementById("gomme");
var crayonBtn = document.getElementById("crayon");
var ligneBtn = document.getElementById("ligne");
var saveBtn = document.getElementById("save");

var ctx = canvas.getContext("2d");

let taille = 0;
let appuyer = false;
colorEl.value = "black";
let color = colorEl.value;
let x;
let y;
var stop = false;
function test2() {
  stop = true;
  if (color == "white") {
    color = "black";
  }
  /* detecter si la souris est appuyé */
  canvas.addEventListener("mousedown", tar);

  function tar(e) {
    if (stop == false) {
      canvas.removeEventListener("mousedown", tar);
    } else {
      appuyer = true;

      x = e.offsetX;
      y = e.offsetY;
    }
  }
  /* detecter si la souris est relaché */
  canvas.addEventListener("mouseup", jop);

  function jop(e) {
    if (stop == false) {
      canvas.removeEventListener("mouseup", jop);
    } else {
      appuyer = false;

      x = undefined;
      y = undefined;
    }
  }
  /* detecter si la souris est en mouvement */
  canvas.addEventListener("mousemove", drawing);

  function drawing(e) {
    if (stop == false) {
      canvas.removeEventListener("mousemove", drawing);
    } else {
      if (appuyer) {
        const x2 = e.offsetX;
        const y2 = e.offsetY;

        dessineCercle(x2, y2);
        dessineLigne(x, y, x2, y2);

        x = x2;
        y = y2;
      }
    }
  }
}

saveBtn.addEventListener("click", () => {
  let data = canvas.toDataURL("imag/png");
  let a = document.createElement("a");
  a.href = data;

  a.download = "dessin.png";
  a.click();
});
var lines = [];
function test() {
  stop = false;
  function drawLine(line) {
    ctx.beginPath();
    ctx.moveTo(line.x1, line.y1);
    ctx.lineTo(line.x2, line.y2);
    ctx.strokeStyle = line.colour;
    ctx.lineWidth = line.tailles * 2;
    ctx.stroke();
  }

  function startDragLine(e) {
    if (stop == true) {
      canvas.removeEventListener("mousedown", startDragLine, false);
    } else {
      firstClick = [e.offsetX, e.offsetY];

      intervalLoop = setInterval(function () {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        for (var i = 0; i < lines.length; i++) {
          drawLine(lines[i]);
        }

        drawLine({
          x1: firstClick[0],
          y1: firstClick[1],
          x2: cursorX,
          y2: cursorY,
          colour: color,
          tailles: taille,
        });
      }, 10);
    }
  }
  function stopDragLine() {
    if (stop == true) {
      canvas.removeEventListener("mouseup", stopDragLine, false);
    } else {
      clearInterval(intervalLoop);
      lines.push({
        x1: firstClick[0],
        y1: firstClick[1],
        x2: cursorX,
        y2: cursorY,
        colour: color,
        tailles: taille,
      });
    }
  }

  function init() {
    document.onmousemove = function (e) {
      cursorX = e.offsetX;
      cursorY = e.offsetY;
    };
    canvas.addEventListener("mousedown", startDragLine, false);
    canvas.addEventListener("mouseup", stopDragLine, false);
  }
  var cursorX;
  var cursorY;
  var firstClick = [0, 0];
  var intervalLoop = null;
  init();
}

function erase() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  lines.length = 0;
}

function dessineCercle(x, y) {
  ctx.beginPath();
  ctx.arc(x, y, taille, 0, Math.PI * 2);
  ctx.fillStyle = color;
  ctx.fill();
}

function dessineLigne(x1, y1, x2, y2) {
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.strokeStyle = color;
  ctx.lineWidth = taille * 2;
  ctx.stroke();
}

function updateLaTaille() {
  document.getElementById("taille").placeholder = taille;
  document.getElementById("taille").value = taille;
}

plusBtn.addEventListener("click", () => {
  taille += 1;

  updateLaTaille();
});

moinsBtn.addEventListener("click", () => {
  taille -= 1;

  if (taille < 1) {
    taille = 1;
  }

  updateLaTaille();
});

tailleEL.addEventListener("change", (e) => (taille = e.target.value));

colorEl.addEventListener("change", (e) => (color = e.target.value));

gommeBtn.addEventListener("click", () => (color = "white"));

ligneBtn.addEventListener("click", () => test());

crayonBtn.addEventListener("click", () => test2());

effacerEl.addEventListener("click", () => erase());
