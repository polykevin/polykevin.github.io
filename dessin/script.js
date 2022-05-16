var canvas = document.getElementById("canvas");
const plusBtn = document.getElementById("plus");
const moinsBtn = document.getElementById("moins");
const tailleEL = document.getElementById("taille");
const colorEl = document.getElementById("color");
const effacerEl = document.getElementById("effacer");
var gommeBtn = document.getElementById("gomme");
var cercleBtn = document.getElementById("cercle");
var crayonBtn = document.getElementById("crayon");
var ligneBtn = document.getElementById("ligne");
var polygoneBtn = document.getElementById("polygone");
var rectangleBtn = document.getElementById("rectangle");
var filledRectangleBtn = document.getElementById("filledRectangle");
var saveBtn = document.getElementById("save");


var ctx = canvas.getContext("2d");


let taille = 0;
let appuyer = false;
colorEl.value = "black";
let color = colorEl.value;
let x;
let y;
let x2;
let y2;
var stop = 0;
ctx.fillStyle = "white";
ctx.fillRect(0, 0, canvas.width, canvas.height);

function bouttonAppuyer(i) {
  if (i == 1) {
    document.getElementById("crayon").style.borderWidth = "4px";
    document.getElementById("gomme").style.borderWidth = "0px";
    document.getElementById("ligne").style.borderWidth = "0px";
    document.getElementById("cercle").style.borderWidth = "0px";
    document.getElementById("polygone").style.borderWidth = "0px";
    document.getElementById("rectangle").style.borderWidth = "0px";
    document.getElementById("filledRectangle").style.borderWidth = "0px";
  }
  if (i == 2) {
    document.getElementById("crayon").style.borderWidth = "0px";
    document.getElementById("gomme").style.borderWidth = "4px";
    document.getElementById("ligne").style.borderWidth = "0px";
    document.getElementById("cercle").style.borderWidth = "0px";
    document.getElementById("polygone").style.borderWidth = "0px";
    document.getElementById("rectangle").style.borderWidth = "0px";
    document.getElementById("filledRectangle").style.borderWidth = "0px";
  }
  if (i == 3) {
    document.getElementById("crayon").style.borderWidth = "0px";
    document.getElementById("gomme").style.borderWidth = "0px";
    document.getElementById("ligne").style.borderWidth = "4px";
    document.getElementById("cercle").style.borderWidth = "0px";
    document.getElementById("polygone").style.borderWidth = "0px";
    document.getElementById("rectangle").style.borderWidth = "0px";
    document.getElementById("filledRectangle").style.borderWidth = "0px";
  }
  if (i == 4) {
    document.getElementById("crayon").style.borderWidth = "0px";
    document.getElementById("gomme").style.borderWidth = "0px";
    document.getElementById("ligne").style.borderWidth = "0px";
    document.getElementById("cercle").style.borderWidth = "4px";
    document.getElementById("polygone").style.borderWidth = "0px";
    document.getElementById("rectangle").style.borderWidth = "0px";
    document.getElementById("filledRectangle").style.borderWidth = "0px";
  }
  if (i == 5) {
    document.getElementById("crayon").style.borderWidth = "0px";
    document.getElementById("gomme").style.borderWidth = "0px";
    document.getElementById("ligne").style.borderWidth = "0px";
    document.getElementById("cercle").style.borderWidth = "0px";
    document.getElementById("polygone").style.borderWidth = "4px";
    document.getElementById("rectangle").style.borderWidth = "0px";
    document.getElementById("filledRectangle").style.borderWidth = "0px";
  }
  if (i == 6) {
    document.getElementById("crayon").style.borderWidth = "0px";
    document.getElementById("gomme").style.borderWidth = "0px";
    document.getElementById("ligne").style.borderWidth = "0px";
    document.getElementById("cercle").style.borderWidth = "0px";
    document.getElementById("polygone").style.borderWidth = "0px";
    document.getElementById("rectangle").style.borderWidth = "4px";
    document.getElementById("filledRectangle").style.borderWidth = "0px";
  }
  if (i == 7) {
    document.getElementById("crayon").style.borderWidth = "0px";
    document.getElementById("gomme").style.borderWidth = "0px";
    document.getElementById("ligne").style.borderWidth = "0px";
    document.getElementById("cercle").style.borderWidth = "0px";
    document.getElementById("polygone").style.borderWidth = "0px";
    document.getElementById("rectangle").style.borderWidth = "0px";
    document.getElementById("filledRectangle").style.borderWidth = "4px";
  }
}

function crayon() {
  stop = 1;
  if (color == "white") {
    color = "black";
  }
 /* detecter si la souris est appuyé */
 canvas.addEventListener("mousedown", tar);

 function tar(e) {
   if (stop != 1) {
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
   if (stop != 1) {
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
   if (stop != 1) {
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

function ligne() {
  stop = 0;
  if (color == "white") {
    color = "black";
  }
  window.addEventListener("mousedown", debutLigne);
  window.addEventListener("mouseup", finLigne);
  function debutLigne(e) {
    if (stop != 0) {
      canvas.removeEventListener("mousedown", debutLigne);
    } else {
      ctx.beginPath();
      let x = e.offsetX;
      let y = e.offsetY;
      ctx.lineTo(x, y);
      ctx.strokeStyle = color;
      ctx.lineWidth = taille * 2;
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(x, y);
    }
  }

  function finLigne(e) {
    if (stop != 0) {
      canvas.removeEventListener("mouseup", finLigne);
    } else {
      let x = e.offsetX;
      let y = e.offsetY;

      ctx.lineTo(x, y);
      ctx.strokeStyle = color;
      ctx.lineWidth = taille * 2;
      ctx.stroke();
    }
  }
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

function erase() {
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
}

function polygone() {
  stop = 2;
  let poly = false;
  let polyTimeout = undefined;

  window.addEventListener("mousedown", debutpolygone);
  window.addEventListener("mouseup", finPolygone);

  function debutpolygone(e) {
    if (e.target.id != "canvas") return;

    if (stop != 2) {
      canvas.removeEventListener("mousedown", debutpolygone);
    } else {
      if (poly) {
        polygon(e);
      } else {
        let x = e.offsetX;
        let y = e.offsetY;

        ctx.beginPath();
        ctx.lineTo(x, y);
        ctx.strokeStyle = color;
        ctx.lineWidth = taille * 2;
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(x, y);
      }
      poly = true;
    }
  }

  function finPolygone(e) {
    if (!poly) return;

    if (stop != 2) {
      canvas.removeEventListener("mouseup", finPolygone);
    } else {
      polyTimeout = setTimeout(() => {
        ctx.closePath();
        ctx.strokeStyle = color;
        ctx.lineWidth = taille * 2;
        ctx.stroke();

        poly = false;
      }, 1000);
    }
  }

  function polygon(e) {
    clearTimeout(polyTimeout);

    let x = e.offsetX;
    let y = e.offsetY;

    ctx.lineTo(x, y);
    ctx.stroke();
  }
}

function rectangle() {
  stop = 3;
  let start = {};
  window.addEventListener("mousedown", debutRect);
  window.addEventListener("mouseup", finRect);

  function getMousePos(canvas, evt) {
    var rect = canvas.getBoundingClientRect(),
      scaleX = canvas.width / rect.width,
      scaleY = canvas.height / rect.height;

    return {
      x: (evt.clientX - rect.left) * scaleX,
      y: (evt.clientY - rect.top) * scaleY,
    };
  }

  function debutRect(e) {
    if (stop != 3) {
      canvas.removeEventListener("mousedown", debutRect);
    } else {
      start = getMousePos(canvas, e);
    }
  }

  function finRect(e) {
    if (stop != 3) {
      canvas.removeEventListener("mouseup", finRect);
    } else {
      let { x, y } = getMousePos(canvas, e);
      ctx.fillStyle = color;
      ctx.strokeStyle = color;
      ctx.strokeRect(start.x, start.y, x - start.x, y - start.y);
    }
  }
}

function filledRectangle() {
  stop = 4;
  let start = {};
  window.addEventListener("mousedown", debutFilledRect);
  window.addEventListener("mouseup", finFilledRect);

  function getMousePos(canvas, evt) {
    var rect = canvas.getBoundingClientRect(),
      scaleX = canvas.width / rect.width,
      scaleY = canvas.height / rect.height;

    return {
      x: (evt.clientX - rect.left) * scaleX,
      y: (evt.clientY - rect.top) * scaleY,
    };
  }

  function debutFilledRect(e) {
    if (stop != 4) {
      canvas.removeEventListener("mousedown", debutFilledRect);
    } else {
      start = getMousePos(canvas, e);
    }
  }

  function finFilledRect(e) {
    if (stop != 4) {
      canvas.removeEventListener("mouseup", finFilledRect);
    } else {
      let { x, y } = getMousePos(canvas, e);
      ctx.fillStyle = color;
      ctx.fillRect(start.x, start.y, x - start.x, y - start.y);
    }
  }
}

function cercle() {
  stop = 5;

  window.addEventListener("click", debutCercle);

  function debutCercle(e) {
    if (stop != 5) {
      canvas.removeEventListener("click", debutCercle);
    } else {
      dessineCercle(e.offsetX, e.offsetY);
    }
  }
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

ligneBtn.addEventListener("click", () => ligne());

cercleBtn.addEventListener("click", () => cercle());

crayonBtn.addEventListener("click", () => crayon());

polygoneBtn.addEventListener("click", () => polygone());

rectangleBtn.addEventListener("click", () => rectangle());

filledRectangleBtn.addEventListener("click", () => filledRectangle());

effacerEl.addEventListener("click", () => erase());
