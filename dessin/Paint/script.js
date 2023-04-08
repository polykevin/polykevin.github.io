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
var sceauBtn = document.getElementById("sceau");
var textBtn = document.getElementById("text");
var strokeTextBtn = document.getElementById("strokeText");
var imageBtn = document.getElementById("image");
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
var rect;
var hasInput = false;
ctx.fillStyle = "white";
ctx.fillRect(0, 0, canvas.width, canvas.height);
rect = canvas.getBoundingClientRect();

function bouttonAppuyer(i) {
    if (i == 1) {
        document.getElementById("crayon").style.borderWidth = "5px";
        document.getElementById("gomme").style.borderWidth = "0px";
        document.getElementById("ligne").style.borderWidth = "0px";
        document.getElementById("cercle").style.borderWidth = "0px";
        document.getElementById("polygone").style.borderWidth = "0px";
        document.getElementById("rectangle").style.borderWidth = "0px";
        document.getElementById("sceau").style.borderWidth = "0px";
        document.getElementById("filledRectangle").style.borderWidth = "0px";
        document.getElementById("text").style.borderWidth = "0px";
        document.getElementById("strokeText").style.borderWidth = "0px";
        document.getElementById("image").style.borderWidth = "0px";
    }
    if (i == 2) {
        document.getElementById("crayon").style.borderWidth = "0px";
        document.getElementById("gomme").style.borderWidth = "5px";
        document.getElementById("ligne").style.borderWidth = "0px";
        document.getElementById("cercle").style.borderWidth = "0px";
        document.getElementById("polygone").style.borderWidth = "0px";
        document.getElementById("rectangle").style.borderWidth = "0px";
        document.getElementById("sceau").style.borderWidth = "0px";
        document.getElementById("filledRectangle").style.borderWidth = "0px";
        document.getElementById("text").style.borderWidth = "0px";
        document.getElementById("strokeText").style.borderWidth = "0px";
        document.getElementById("image").style.borderWidth = "0px";
    }
    if (i == 3) {
        document.getElementById("crayon").style.borderWidth = "0px";
        document.getElementById("gomme").style.borderWidth = "0px";
        document.getElementById("ligne").style.borderWidth = "5px";
        document.getElementById("cercle").style.borderWidth = "0px";
        document.getElementById("polygone").style.borderWidth = "0px";
        document.getElementById("rectangle").style.borderWidth = "0px";
        document.getElementById("sceau").style.borderWidth = "0px";
        document.getElementById("filledRectangle").style.borderWidth = "0px";
        document.getElementById("text").style.borderWidth = "0px";
        document.getElementById("strokeText").style.borderWidth = "0px";
        document.getElementById("image").style.borderWidth = "0px";
    }
    if (i == 4) {
        document.getElementById("crayon").style.borderWidth = "0px";
        document.getElementById("gomme").style.borderWidth = "0px";
        document.getElementById("ligne").style.borderWidth = "0px";
        document.getElementById("cercle").style.borderWidth = "5px";
        document.getElementById("polygone").style.borderWidth = "0px";
        document.getElementById("rectangle").style.borderWidth = "0px";
        document.getElementById("sceau").style.borderWidth = "0px";
        document.getElementById("filledRectangle").style.borderWidth = "0px";
        document.getElementById("text").style.borderWidth = "0px";
        document.getElementById("strokeText").style.borderWidth = "0px";
        document.getElementById("image").style.borderWidth = "0px";
    }
    if (i == 5) {
        document.getElementById("crayon").style.borderWidth = "0px";
        document.getElementById("gomme").style.borderWidth = "0px";
        document.getElementById("ligne").style.borderWidth = "0px";
        document.getElementById("cercle").style.borderWidth = "0px";
        document.getElementById("polygone").style.borderWidth = "5px";
        document.getElementById("rectangle").style.borderWidth = "0px";
        document.getElementById("sceau").style.borderWidth = "0px";
        document.getElementById("filledRectangle").style.borderWidth = "0px";
        document.getElementById("text").style.borderWidth = "0px";
        document.getElementById("strokeText").style.borderWidth = "0px";
        document.getElementById("image").style.borderWidth = "0px";
    }
    if (i == 6) {
        document.getElementById("crayon").style.borderWidth = "0px";
        document.getElementById("gomme").style.borderWidth = "0px";
        document.getElementById("ligne").style.borderWidth = "0px";
        document.getElementById("cercle").style.borderWidth = "0px";
        document.getElementById("polygone").style.borderWidth = "0px";
        document.getElementById("rectangle").style.borderWidth = "5px";
        document.getElementById("filledRectangle").style.borderWidth = "0px";
        document.getElementById("sceau").style.borderWidth = "0px";
        document.getElementById("text").style.borderWidth = "0px";
        document.getElementById("strokeText").style.borderWidth = "0px";
        document.getElementById("image").style.borderWidth = "0px";
    }
    if (i == 7) {
        document.getElementById("crayon").style.borderWidth = "0px";
        document.getElementById("gomme").style.borderWidth = "0px";
        document.getElementById("ligne").style.borderWidth = "0px";
        document.getElementById("cercle").style.borderWidth = "0px";
        document.getElementById("polygone").style.borderWidth = "0px";
        document.getElementById("rectangle").style.borderWidth = "0px";
        document.getElementById("filledRectangle").style.borderWidth = "5px";
        document.getElementById("sceau").style.borderWidth = "0px";
        document.getElementById("text").style.borderWidth = "0px";
        document.getElementById("strokeText").style.borderWidth = "0px";
        document.getElementById("image").style.borderWidth = "0px";
    }
    if (i == 8) {
        document.getElementById("crayon").style.borderWidth = "0px";
        document.getElementById("gomme").style.borderWidth = "0px";
        document.getElementById("ligne").style.borderWidth = "0px";
        document.getElementById("cercle").style.borderWidth = "0px";
        document.getElementById("polygone").style.borderWidth = "0px";
        document.getElementById("rectangle").style.borderWidth = "0px";
        document.getElementById("filledRectangle").style.borderWidth = "0px";
        document.getElementById("sceau").style.borderWidth = "0px";
        document.getElementById("text").style.borderWidth = "5px";
        document.getElementById("strokeText").style.borderWidth = "0px";
        document.getElementById("image").style.borderWidth = "0px";
    }
    if (i == 9) {
        document.getElementById("crayon").style.borderWidth = "0px";
        document.getElementById("gomme").style.borderWidth = "0px";
        document.getElementById("ligne").style.borderWidth = "0px";
        document.getElementById("cercle").style.borderWidth = "0px";
        document.getElementById("polygone").style.borderWidth = "0px";
        document.getElementById("rectangle").style.borderWidth = "0px";
        document.getElementById("filledRectangle").style.borderWidth = "0px";
        document.getElementById("sceau").style.borderWidth = "0px";
        document.getElementById("text").style.borderWidth = "0px";
        document.getElementById("strokeText").style.borderWidth = "5px";
        document.getElementById("image").style.borderWidth = "0px";
    }
    if (i == 10) {
        document.getElementById("crayon").style.borderWidth = "0px";
        document.getElementById("gomme").style.borderWidth = "0px";
        document.getElementById("ligne").style.borderWidth = "0px";
        document.getElementById("cercle").style.borderWidth = "0px";
        document.getElementById("polygone").style.borderWidth = "0px";
        document.getElementById("rectangle").style.borderWidth = "0px";
        document.getElementById("filledRectangle").style.borderWidth = "0px";
        document.getElementById("sceau").style.borderWidth = "5px";
        document.getElementById("text").style.borderWidth = "0px";
        document.getElementById("strokeText").style.borderWidth = "0px";
        document.getElementById("image").style.borderWidth = "0px";
    }
    if (i == 11) {
        document.getElementById("crayon").style.borderWidth = "0px";
        document.getElementById("gomme").style.borderWidth = "0px";
        document.getElementById("ligne").style.borderWidth = "0px";
        document.getElementById("cercle").style.borderWidth = "0px";
        document.getElementById("polygone").style.borderWidth = "0px";
        document.getElementById("rectangle").style.borderWidth = "0px";
        document.getElementById("filledRectangle").style.borderWidth = "0px";
        document.getElementById("sceau").style.borderWidth = "0px";
        document.getElementById("text").style.borderWidth = "0px";
        document.getElementById("strokeText").style.borderWidth = "0px";
        document.getElementById("image").style.borderWidth = "5px";

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

function sceau() {
    stop = 6;
    window.addEventListener("mousedown",remplir)
    function remplir(e) {
        if (stop != 6) {
            canvas.removeEventListener("mousedown", remplir);
        } else {
            x = e.clientX;
            y = e.clientY;
            ctx.fillStyle = color;
            ctx.fillFlood(e.clientX - rect.left, e.clientY - rect.top, 24);
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

    canvas.addEventListener("mousedown", debutCercle);

    function debutCercle(e) {
        if (stop != 5) {
            canvas.removeEventListener("mousedown", debutCercle);
        } else {
            dessineCercle(e.offsetX, e.offsetY);
        }
    }
}

function gomme() {
    stop = 7;
    if (color != "white") {
        color = "white";
    }
    /* detecter si la souris est appuyé */
    canvas.addEventListener("mousedown", tar);

    function tar(e) {
        if (stop != 7) {
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
        if (stop != 7) {
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
        if (stop != 7) {
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

function text () {
    stop = 8;
    canvas.addEventListener("mousedown", debutText);

    function handleEnter(e) {
        var keyCode = e.key;
        if (keyCode === "Enter") {
            ctx.beginPath();
            ctx.fillStyle = color;
            cho = document.getElementById("toiture").value;
            if (cho == 0) {
                cho = 30;
            }
            ctx.font = cho + "px Arial";
            ctx.textBaseline = 'top';
            ctx.textAlign = 'left';
            ctx.fillText(this.value, parseInt(this.style.left, 10) - 4, parseInt(this.style.top, 10) - 85);
            document.body.removeChild(this);
            hasInput = false;
        }
    }

    function debutText(e) {
        if (stop != 8) {
            canvas.removeEventListener("mousedown", debutText);
        } else {
            if (hasInput) return;
            var input = document.createElement('input');
            input.type = 'text';
            input.style.position = 'fixed';
            input.style.left = (e.offsetX - 4) + 'px';
            input.style.top = (e.offsetY + 70) + 'px';
            input.classList.add("wow");
            input.onkeydown = handleEnter;

            document.body.appendChild(input);

            input.focus();
            hasInput = true;
        }
    }
}

function strokeText() {
    stop = 9;
    canvas.addEventListener("mousedown", debutStrokeText);


    function handleEnter(e) {
        var keyCode = e.key;
        if (keyCode === "Enter") {
            ctx.beginPath();
            ctx.fillStyle = color;
            cho = document.getElementById("toiture").value;
            if (cho == 0) {
                cho = 30;
            }
            ctx.font = cho + "px Arial";
            ctx.textBaseline = 'top';
            ctx.textAlign = 'left';
            ctx.strokeText(this.value, parseInt(this.style.left, 10) - 4, parseInt(this.style.top, 10) - 80);
            document.body.removeChild(this);
            hasInput = false;
        }
    }

    function debutStrokeText(e) {
        if (stop != 9) {
            canvas.removeEventListener("mousedown", debutStrokeText);
        } else {
            if (hasInput) return;
            var input = document.createElement('input');
            input.type = 'text';
            input.style.position = 'fixed';
            input.style.left = (e.offsetX - 4) + 'px';
            input.style.top = (e.offsetY + 70) + 'px';
            input.classList.add("wow");
            input.onkeydown = handleEnter;

            document.body.appendChild(input);

            input.focus();
            hasInput = true;

        }
    }
}

function renderImage() {
    stop = 10;
    canvas.addEventListener("mousedown", render);


    function handleChange(e) {
        ctx.beginPath();
        ctx.fillStyle = color;
        base_image = new Image();
        base_image.src = URL.createObjectURL(this.files[0]);
        base_image.onload = function(){
            ctx.drawImage(base_image, 0, 0, 1280, 720);
        }
        URL.revokeObjectURL(this.src);
        document.body.removeChild(this);
        hasInput = false;
    }

    function render(e) {
        if (stop != 10) {
            canvas.removeEventListener("mousedown", render);
        } else {
            if (hasInput) return;
            var input = document.createElement('input');
            input.type = 'file';
            input.style.position = 'fixed';
            input.style.left = (e.offsetX - 4) + 'px';
            input.style.top = (e.offsetY + 70) + 'px';
            input.onchange = handleChange;

            document.body.appendChild(input);

            input.focus();
            hasInput = true;

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

gommeBtn.addEventListener("click", () => gomme());

ligneBtn.addEventListener("click", () => ligne());

cercleBtn.addEventListener("click", () => cercle());

crayonBtn.addEventListener("click", () => crayon());

polygoneBtn.addEventListener("click", () => polygone());

rectangleBtn.addEventListener("click", () => rectangle());

filledRectangleBtn.addEventListener("click", () => filledRectangle());

sceauBtn.addEventListener("click", () => sceau());

textBtn.addEventListener("click", () => text());

strokeTextBtn.addEventListener("click", () => strokeText());

imageBtn.addEventListener("click", () => renderImage());

effacerEl.addEventListener("click", () => erase());
