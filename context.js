var argent = 0;
var delai = 0;
var projekt = {
  argent: 0,
  rotule: {
    test: {
      nb: 0,
      cout: 15,
      original: 15,
      money: 0.2,
      nom: "Faire le rat",
    },
    test2: {
      nb: 0,
      cout: 100,
      original: 100,
      money: 1,
      nom: "Video Degustation",
    },
    test3: {
      nb: 0,
      cout: 1100,
      original: 1100,
      money: 8,
      nom: "Travailler chez Mcdo",
    },
    test4: {
      nb: 0,
      cout: 12000,
      original: 12000,
      money: 47,
      nom: "Vendre ta formation",
    },
    test5: {
      nb: 0,
      cout: 130000,
      original: 130000,
      money: 260,
      nom: "NFT",
    },
    test6: {
      nb: 0,
      cout: 1400000,
      original: 1400000,
      money: 1400,
      nom: "Voleur",
    },
    test7: {
      nb: 0,
      cout: 20000000,
      original: 20000000,
      money: 7800,
      nom: "Cartel",
    },
    test8: {
      nb: 0,
      cout: 330000000,
      original: 330000000,
      money: 44000,
      nom: "Casa de Papel",
    },
    test9: {
      nb: 0,
      cout: 5100000000,
      original: 5100000000,
      money: 260000,
      nom: "Elon Musk",
    },
    test10: {
      nb: 0,
      cout: 75000000000,
      original: 75000000000,
      money: 1600000,
      nom: "Chomeur",
    },
    
  },
};

function clique(truc) {
  if (projekt.rotule[truc].cout <= projekt.argent) {
    projekt.argent -= projekt.rotule[truc].cout;
    projekt.rotule[truc].nb++;
    projekt.rotule[truc].cout += Math.round(projekt.rotule[truc].cout * 0.15);
    damn_daniel();
  }
}

function damn_daniel() {
  document.querySelector("#rotule").innerHTML = "";
  var stilo = 0;
  for (i in projekt.rotule) {
    document.querySelector(
      "#rotule"
    ).innerHTML += `<br> <button onclick="clique('${i}')"> <div id = "mp"><span id="button_texte">${projekt.rotule[i].nom}</span> <span id="button_nb">${numberformat.format(projekt.rotule[i].nb)}</span> <span id="button_prix">${numberformat.format(projekt.rotule[i].cout)} <img src="argent.png" id = "cout" /></span>  <span><img src="iop/${stilo}.jpg" class = "megachevalier" /></span></div></button>`;
      stilo++;
  }
}

function jour() {
  if (Cookies.get("projekt") != null && Cookies.get("projekt") != "undefined") {
    var projekt1 = JSON.parse(Cookies.get("projekt"));
    for (i in projekt.rotule) {
      if (projekt1.rotule[i] == null) {
        projekt1.rotule[i] = projekt.rotule[i];
      }
    }
    projekt = projekt1
  }
  damn_daniel();
  setInterval(() => {
    for (i in projekt.rotule) {
      projekt.argent += (projekt.rotule[i].nb * projekt.rotule[i].money) / 20;
    }
    document.querySelector("#uwu").innerHTML = numberformat.format(Number(String(projekt.argent).split(".")[0])) + " $";
    delai++;
    if (delai >= 40) {
      Cookies.set("projekt", JSON.stringify(projekt), {expires:100000})
      delai = 0;
    }
  }, 50); 
}



function reset() {
  Cookies.remove("projekt");
  projekt.argent = 0;
  for (i in projekt.rotule) {
    projekt.rotule[i].nb = 0;
    projekt.rotule[i].cout = projekt.rotule[i].original;
  }
  jour()
}